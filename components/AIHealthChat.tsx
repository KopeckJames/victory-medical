'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface Message {
  role: 'user' | 'assistant'
  content: string
  streaming?: boolean
}

const SUGGESTED = [
  'What services do you offer?',
  'How does Botox work?',
  'Tell me about ketamine therapy',
  'Do you accept walk-ins?',
  'What is the Harvard Allergy Protocol?',
]

export default function AIHealthChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)

  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Sync body class for cross-component mobile coordination
  useEffect(() => {
    document.body.classList.toggle('ai-chat-open', isOpen)
    return () => document.body.classList.remove('ai-chat-open')
  }, [isOpen])

  // Panel open/close animation
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    if (isOpen) {
      gsap.fromTo(panel,
        { opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.4)' }
      )
      // Welcome message on first open
      if (!hasOpened) {
        setHasOpened(true)
        setTimeout(() => {
          setMessages([{
            role: 'assistant',
            content: "Hi! I'm the Victory Medical AI assistant. I can help you find the right service, answer health questions, or help you book an appointment. What can I help you with today?",
          }])
        }, 300)
      }
      setTimeout(() => inputRef.current?.focus(), 400)
    } else {
      gsap.to(panel, {
        opacity: 0, y: 20, scale: 0.95,
        duration: 0.3, ease: 'power2.in',
      })
    }
  }, [isOpen, hasOpened])

  // Button pulse animation
  useEffect(() => {
    if (!isOpen && buttonRef.current) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })
      tl.to(buttonRef.current, { scale: 1.08, duration: 0.4, ease: 'power2.out' })
        .to(buttonRef.current, { scale: 1, duration: 0.4, ease: 'power2.in' })
    }
    return () => gsap.killTweensOf(buttonRef.current)
  }, [isOpen])

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg: Message = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    // Add streaming assistant placeholder
    setMessages(prev => [...prev, { role: 'assistant', content: '', streaming: true }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        setMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: err.error || 'Sorry, something went wrong. Please call us at (512) 462-3627.' },
        ])
        return
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          accumulated += decoder.decode(value, { stream: true })
          setMessages(prev => [
            ...prev.slice(0, -1),
            { role: 'assistant', content: accumulated, streaming: true },
          ])
        }
      }

      // Finalize — remove streaming flag
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: accumulated },
      ])
    } catch {
      setMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: "I'm having trouble connecting right now. Please call us at (512) 462-3627 or visit our contact page." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9000 }}>
      {/* Chat Panel */}
      <div
        ref={panelRef}
        style={{
          position: 'absolute',
          bottom: '72px',
          right: 0,
          width: 'min(380px, calc(100vw - 32px))',
          height: 'min(560px, calc(100vh - 120px))',
          backgroundColor: '#f5fbfc',
          border: '1px solid rgba(34,184,209,0.25)',
          borderRadius: '20px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(26,58,71,0.04)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: 0,
          pointerEvents: isOpen ? 'all' : 'none',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 20px 16px',
          borderBottom: '1px solid rgba(26,58,71,0.06)',
          background: 'linear-gradient(135deg, #ffffff 0%, #f5fbfc 100%)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--copper) 0%, #4fc8dd 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: 700, color: 'white',
              fontFamily: 'var(--font-playfair)',
              flexShrink: 0,
            }}>V</div>
            <div>
              <div style={{
                fontSize: '0.875rem', fontWeight: 600,
                color: 'var(--white)', fontFamily: 'var(--font-playfair)',
              }}>Victory Health AI</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  backgroundColor: '#22c55e', flexShrink: 0,
                  boxShadow: '0 0 6px rgba(34,197,94,0.6)',
                }} />
                <span style={{ fontSize: '0.65rem', color: 'rgba(26,58,71,0.5)', letterSpacing: '0.05em' }}>
                  Online · Instant responses
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginLeft: 'auto', background: 'none', border: 'none',
                color: 'rgba(26,58,71,0.4)', cursor: 'pointer',
                padding: '4px', lineHeight: 1, fontSize: '18px',
              }}
              aria-label="Close chat"
            >×</button>
          </div>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '16px',
          display: 'flex', flexDirection: 'column', gap: '12px',
          scrollbarWidth: 'thin',
        }}>
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>⚕</div>
              <p style={{ fontSize: '0.8rem', color: 'rgba(26,58,71,0.4)', lineHeight: 1.6 }}>
                Your personal Victory Medical guide.<br/>Ask me anything about our services.
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div style={{
                maxWidth: '85%',
                padding: '10px 14px',
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                backgroundColor: msg.role === 'user'
                  ? 'var(--copper)'
                  : 'rgba(26,58,71,0.06)',
                border: msg.role === 'assistant' ? '1px solid rgba(26,58,71,0.08)' : 'none',
                fontSize: '0.825rem',
                lineHeight: 1.6,
                color: msg.role === 'user' ? 'white' : 'rgba(26,58,71,0.9)',
                letterSpacing: '0.01em',
              }}>
                {msg.content}
                {msg.streaming && (
                  <span style={{
                    display: 'inline-block',
                    width: '6px', height: '14px',
                    backgroundColor: 'var(--copper)',
                    marginLeft: '2px',
                    verticalAlign: 'text-bottom',
                    animation: 'blink 0.8s step-end infinite',
                  }} />
                )}
              </div>
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.content === '' && (
            <div style={{ display: 'flex', gap: '6px', paddingLeft: '4px' }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  backgroundColor: 'var(--copper)',
                  animation: `bounce 1.2s ${i * 0.2}s ease-in-out infinite`,
                }} />
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {messages.length <= 1 && (
          <div style={{
            padding: '0 16px 8px',
            display: 'flex', flexWrap: 'wrap', gap: '6px',
          }}>
            {SUGGESTED.slice(0, 3).map(q => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                style={{
                  fontSize: '0.7rem', padding: '5px 10px',
                  backgroundColor: 'rgba(34,184,209,0.12)',
                  border: '1px solid rgba(34,184,209,0.25)',
                  borderRadius: '20px', color: 'rgba(26,58,71,0.7)',
                  cursor: 'pointer', transition: 'all 0.2s',
                  lineHeight: 1.4,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(34,184,209,0.2)'
                  e.currentTarget.style.color = 'white'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(34,184,209,0.12)'
                  e.currentTarget.style.color = 'rgba(26,58,71,0.7)'
                }}
              >{q}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: '12px 16px',
            borderTop: '1px solid rgba(26,58,71,0.06)',
            display: 'flex', gap: '8px', alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.15)',
            flexShrink: 0,
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about services, symptoms..."
            disabled={isLoading}
            style={{
              flex: 1, background: 'rgba(26,58,71,0.06)',
              border: '1px solid rgba(26,58,71,0.1)',
              borderRadius: '10px', padding: '10px 14px',
              fontSize: '0.8rem', color: 'white',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => { e.target.style.borderColor = 'rgba(34,184,209,0.4)' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(26,58,71,0.1)' }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: input.trim() ? 'var(--copper)' : 'rgba(26,58,71,0.08)',
              border: 'none', cursor: input.trim() ? 'pointer' : 'default',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', flexShrink: 0,
            }}
            aria-label="Send"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>

        {/* Disclaimer */}
        <div style={{
          padding: '8px 16px',
          fontSize: '0.6rem', color: 'rgba(26,58,71,0.25)',
          textAlign: 'center', lineHeight: 1.4,
          backgroundColor: 'rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}>
          AI assistant for general info only. Not medical advice.
        </div>
      </div>

      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: isOpen
            ? 'rgba(34,184,209,0.2)'
            : 'linear-gradient(135deg, var(--copper) 0%, #4fc8dd 100%)',
          border: isOpen ? '1px solid rgba(34,184,209,0.4)' : 'none',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: isOpen ? 'none' : '0 8px 30px rgba(34,184,209,0.5)',
          transition: 'all 0.3s ease',
          position: 'relative',
          zIndex: 1,
        }}
        aria-label="Open AI health assistant"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 5L15 15M15 5L5 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="white"/>
          </svg>
        )}

        {/* Notification dot */}
        {!isOpen && !hasOpened && (
          <span style={{
            position: 'absolute', top: '2px', right: '2px',
            width: '10px', height: '10px', borderRadius: '50%',
            backgroundColor: '#22c55e',
            border: '2px solid #f5fbfc',
            animation: 'pulse-dot 2s ease-in-out infinite',
          }} />
        )}
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}
