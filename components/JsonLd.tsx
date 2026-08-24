// Renders a JSON-LD structured-data block. Data is app-authored (never user
// input), so serializing straight into the script tag is safe here.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
