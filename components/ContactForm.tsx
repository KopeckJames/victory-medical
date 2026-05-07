'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const SERVICE_OPTIONS = [
  'General Inquiry',
  'Primary Care',
  'Urgent Care',
  'MedSpa / Aesthetics',
  'Ketamine Therapy',
  'Allergy Services',
  'Weight Loss',
  'MDVIP Concierge',
  'Other',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(26,58,71,0.06)',
  border: '1px solid rgba(26,58,71,0.1)',
  borderRadius: 8,
  padding: '12px 16px',
  color: 'var(--white)',
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  marginBottom: '8px',
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<string[]>([])

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const getFocusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === field ? 'rgba(34,184,209,0.5)' : 'rgba(26,58,71,0.1)',
  })

  function validate(): string[] {
    const errs: string[] = []
    if (!name.trim()) errs.push('Name is required.')
    if (!phone.trim() && !email.trim()) errs.push('Phone or email is required.')
    if (!message.trim()) errs.push('Message is required.')
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (errs.length > 0) {
      setErrors(errs)
      return
    }
    setErrors([])
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, service, message }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'rgba(26,58,71,0.04)',
          border: '1px solid rgba(26,58,71,0.08)',
          borderRadius: 16,
          padding: 36,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '320px',
          gap: '20px',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(34,184,209,0.15)',
            border: '1px solid rgba(34,184,209,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--copper)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.4rem',
              fontWeight: 400,
              color: 'var(--white)',
              marginBottom: '10px',
            }}
          >
            Message Sent
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(26,58,71,0.6)', lineHeight: 1.6 }}>
            Thank you! We&apos;ll be in touch within 1 business day.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: 'rgba(26,58,71,0.04)',
        border: '1px solid rgba(26,58,71,0.08)',
        borderRadius: 16,
        padding: 36,
      }}
    >
      {errors.length > 0 && (
        <div
          style={{
            backgroundColor: 'rgba(34,184,209,0.1)',
            border: '1px solid rgba(34,184,209,0.3)',
            borderRadius: 8,
            padding: '12px 16px',
            marginBottom: '24px',
          }}
        >
          {errors.map((err) => (
            <p
              key={err}
              style={{ fontSize: '0.85rem', color: 'var(--copper)', margin: 0, lineHeight: 1.6 }}
            >
              {err}
            </p>
          ))}
        </div>
      )}

      {status === 'error' && (
        <div
          style={{
            backgroundColor: 'rgba(34,184,209,0.1)',
            border: '1px solid rgba(34,184,209,0.3)',
            borderRadius: 8,
            padding: '12px 16px',
            marginBottom: '24px',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--copper)', margin: 0, lineHeight: 1.6 }}>
            Something went wrong — please call us directly at{' '}
            <a href="tel:5124623627" style={{ color: 'var(--copper)', fontWeight: 600 }}>
              (512) 462-3627
            </a>
            .
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name + Phone row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px',
          }}
          className="contact-form-name-row"
        >
          <div>
            <label htmlFor="cf-name" style={labelStyle}>
              Name <span style={{ color: 'var(--copper)' }}>*</span>
            </label>
            <input
              id="cf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              style={getFocusStyle('name')}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="cf-phone" style={labelStyle}>
              Phone
            </label>
            <input
              id="cf-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(512) 000-0000"
              style={getFocusStyle('phone')}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="cf-email" style={labelStyle}>
            Email
          </label>
          <input
            id="cf-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={getFocusStyle('email')}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            autoComplete="email"
          />
        </div>

        {/* Service */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="cf-service" style={labelStyle}>
            Service
          </label>
          <select
            id="cf-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{
              ...getFocusStyle('service'),
              cursor: 'pointer',
            }}
            onFocus={() => setFocusedField('service')}
            onBlur={() => setFocusedField(null)}
          >
            <option value="" style={{ backgroundColor: 'var(--dark-teal)' }}>
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} style={{ backgroundColor: 'var(--dark-teal)' }}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div style={{ marginBottom: '24px' }}>
          <label htmlFor="cf-message" style={labelStyle}>
            Message <span style={{ color: 'var(--copper)' }}>*</span>
          </label>
          <textarea
            id="cf-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help you?"
            rows={4}
            style={{
              ...getFocusStyle('message'),
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary"
          style={{ width: '100%', justifyContent: 'center', opacity: status === 'submitting' ? 0.7 : 1 }}
        >
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
