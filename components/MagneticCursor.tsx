'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // No custom cursor on touch devices — saves battery and avoids ghost cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      if (dotRef.current) dotRef.current.style.display = 'none'
      if (ringRef.current) ringRef.current.style.display = 'none'
      return
    }

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let raf: number
    let isHovering = false

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.12)
      ringY = lerp(ringY, mouseY, 0.12)
      gsap.set(ring, { x: ringX - 20, y: ringY - 20 })
      gsap.set(dot, { x: mouseX - 4, y: mouseY - 4 })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnterMagnetic = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement
      if (isHovering) return
      isHovering = true

      gsap.to(ring, {
        width: 60, height: 60,
        borderColor: 'rgba(201,122,60,0.8)',
        backgroundColor: 'rgba(201,122,60,0.08)',
        duration: 0.3, ease: 'power2.out',
      })
      gsap.to(dot, {
        width: 12, height: 12,
        backgroundColor: 'var(--copper)',
        duration: 0.3, ease: 'power2.out',
      })

      const rect = target.getBoundingClientRect()
      const targetX = rect.left + rect.width / 2
      const targetY = rect.top + rect.height / 2

      const handleMouseMove = (me: MouseEvent) => {
        const dx = me.clientX - targetX
        const dy = me.clientY - targetY
        gsap.to(target, {
          x: dx * 0.35, y: dy * 0.35,
          duration: 0.4, ease: 'power2.out',
        })
      }

      target.addEventListener('mousemove', handleMouseMove)
      ;(target as HTMLElement & { _magneticMM?: (e: MouseEvent) => void })._magneticMM = handleMouseMove
    }

    const onMouseLeaveMagnetic = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement & { _magneticMM?: (e: MouseEvent) => void }
      isHovering = false

      gsap.to(ring, {
        width: 40, height: 40,
        borderColor: 'rgba(255,255,255,0.5)',
        backgroundColor: 'transparent',
        duration: 0.4, ease: 'power2.out',
      })
      gsap.to(dot, {
        width: 8, height: 8,
        backgroundColor: 'var(--copper)',
        duration: 0.3,
      })
      gsap.to(target, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' })

      if (target._magneticMM) {
        target.removeEventListener('mousemove', target._magneticMM)
        delete target._magneticMM
      }
    }

    const onMouseEnterLink = () => {
      gsap.to(ring, {
        width: 50, height: 50,
        borderColor: 'rgba(196,168,122,0.7)',
        duration: 0.3, ease: 'power2.out',
      })
    }

    const onMouseLeaveLink = () => {
      gsap.to(ring, {
        width: 40, height: 40,
        borderColor: 'rgba(255,255,255,0.5)',
        duration: 0.3, ease: 'power2.out',
      })
    }

    // Attach magnetic listeners
    const magneticEls = document.querySelectorAll('.btn-primary, .btn-outline, [data-magnetic]')
    magneticEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterMagnetic as EventListener)
      el.addEventListener('mouseleave', onMouseLeaveMagnetic as EventListener)
    })

    const linkEls = document.querySelectorAll('a:not(.btn-primary):not(.btn-outline)')
    linkEls.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    window.addEventListener('mousemove', onMouseMove)

    // Hide on leave / show on enter
    const onMouseLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
    }
    const onMouseEnterWindow = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
    }
    document.addEventListener('mouseleave', onMouseLeaveWindow)
    document.addEventListener('mouseenter', onMouseEnterWindow)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
      magneticEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterMagnetic as EventListener)
        el.removeEventListener('mouseleave', onMouseLeaveMagnetic as EventListener)
      })
      linkEls.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink)
        el.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--copper)',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-4px, -4px)',
          willChange: 'transform',
          mixBlendMode: 'normal',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '40px', height: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.5)',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-20px, -20px)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
