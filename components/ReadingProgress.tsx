'use client'

import { useEffect, useRef } from 'react'

export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number | null = null

    function onScroll() {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        rafId = null
        const scrollTop = window.scrollY
        const docHeight = document.body.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        if (barRef.current) {
          barRef.current.style.width = `${Math.min(progress, 100)}%`
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000,
        height: '3px',
        width: '0%',
        background: 'linear-gradient(90deg, var(--copper), var(--gold))',
        pointerEvents: 'none',
        transition: 'width 0.05s linear',
      }}
      aria-hidden="true"
    />
  )
}
