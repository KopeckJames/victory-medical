// Full-width editorial image band used near the top of core pages.
export default function PageVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="container" style={{ paddingTop: '24px', paddingBottom: '8px' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          display: 'block',
          boxShadow: '0 10px 30px rgba(34, 109, 122, 0.12)',
        }}
      />
    </div>
  )
}
