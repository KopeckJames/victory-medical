interface SectionDividerProps {
  flip?: boolean
  fromColor?: string
  toColor?: string
}

export default function SectionDivider({
  flip = false,
  fromColor = 'var(--teal)',
  toColor = 'var(--dark-teal)',
}: SectionDividerProps) {
  return (
    <div
      style={{
        position: 'relative',
        height: '80px',
        overflow: 'hidden',
        backgroundColor: fromColor,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        style={{ position: 'absolute', bottom: 0, width: '100%', height: '80px' }}
        preserveAspectRatio="none"
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill={toColor} />
      </svg>
    </div>
  )
}
