import Script from 'next/script'

/*
 * Birdeye review embed. The v7 script renders its widget where the tag sits,
 * so this component is placed inline at the point in the page the widget
 * should appear — not hoisted into the layout.
 */
export default function BirdeyeWidget({ id, src }: { id: string; src: string }) {
  return <Script id={id} src={src} strategy="afterInteractive" />
}
