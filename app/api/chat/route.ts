import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const SYSTEM_PROMPT = `You are the AI health assistant for Victory Medical, a leading integrated healthcare practice in Austin and Westlake Hills, Texas, founded in 1996. You are helpful, warm, and knowledgeable.

Victory Medical's Services:
- Family & Primary Care: Annual physicals, chronic disease management, preventive care, same-day sick visits
- Urgent Care: Walk-ins welcome, extended hours, lab work, X-rays on-site
- Medical Spa (MedSpa): Botox/Dysport, dermal fillers, CoolSculpting, laser treatments, HydraFacial, microneedling, Scarlet RF, IV therapy, chemical peels, PRP, PDO threading, Sculptra
- Ketamine Therapy: IV ketamine for depression, PTSD, anxiety, chronic pain (physician-monitored)
- Allergy Services: Harvard Protocol rapid desensitization (unique to Victory Medical)
- Medical Weight Loss: Physician-supervised programs including GLP-1 medications
- Hormone Replacement (Club Longevity): BHRT, testosterone therapy, thyroid optimization
- Physical Medicine: Musculoskeletal care, pain management, sports medicine
- Compounding Pharmacy: On-site, custom medications

Locations:
1. Victory Drive (Main): 4303 Victory Drive, Austin TX — (512) 462-3627
2. MedSpa: 2108 W Ben White Blvd, Austin TX — (512) 969-6900
3. Westlake Hills: 3811 Bee Caves Rd, Westlake Hills TX

Booking:
- Primary Care / Urgent Care: https://www.priviahealth.com/practice/victory-medical/
- MedSpa: https://victory.janeapp.com/
- Phone: (512) 462-3627

Your role:
1. Help visitors understand which Victory Medical service best fits their needs
2. Answer general health and wellness questions clearly and helpfully
3. Always recommend they consult with a Victory Medical provider for medical advice
4. Be warm, conversational, and genuinely helpful
5. Keep responses concise — 2-4 sentences for most answers
6. When appropriate, mention the specific booking link for the service
7. Never diagnose or prescribe — guide them to the right provider
8. Highlight what makes Victory Medical unique (Harvard Allergy Protocol, integrated medicine, on-site pharmacy, physician-supervised MedSpa)

Start with a warm welcome if this is the first message. Always end with a helpful follow-up question or suggestion.`

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json(
        { error: 'AI assistant not configured. Please add ANTHROPIC_API_KEY to your environment.' },
        { status: 503 }
      )
    }

    const stream = await client.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    })

    const readableStream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === 'content_block_delta' &&
              chunk.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(chunk.delta.text))
            }
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Something went wrong. Please call us at (512) 462-3627.' },
      { status: 500 }
    )
  }
}
