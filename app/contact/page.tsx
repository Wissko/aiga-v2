'use client';
import LiquidBackground from '@/components/LiquidBackground';
import ParticleWaves from '@/components/ParticleWaves';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'transparent',
    border: '1px solid var(--border-light)',
    color: 'var(--black)',
    fontFamily: 'Satoshi, sans-serif',
    fontSize: '15px',
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.2s ease',
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'Satoshi, sans-serif',
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--muted-light)',
    marginBottom: '8px',
  };

  return (
    <>
      {/* Hero */}
      <section
        className="section-dark"
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)',
        
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <LiquidBackground />
        <ParticleWaves />
        <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
          Get in touch
        </p>
        <h1 className="heading-display" style={{
          fontSize: 'clamp(64px, 12vw, 140px)',
          letterSpacing: '0.03em',
          color: 'var(--white)',
          marginBottom: '2rem',
        }}>
          CONTACT
        </h1>
        <p style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'var(--muted-dark)',
          maxWidth: '480px',
          lineHeight: 1.6,
        }}>
          Start with a free strategy call. No pressure, no pitch: just an honest conversation about your business.
        </p>
      </section>

      <Marquee text="Let's talk" separator="·" dark={true} size="md" speed={22} />

      {/* Form section */}
      <section
        className="section-light"
        style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 8rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Left: info */}
          <AnimatedSection>
            <h2 className="heading-section" style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '0.02em',
              color: 'var(--black)',
              marginBottom: '2rem',
            }}>
              We'd love to hear about your business.
            </h2>

            <div style={{ marginBottom: '3rem' }}>
              {[
                { label: 'Email', value: 'hello@aiga.au' },
                { label: 'Location', value: 'Brisbane, Australia' },
                { label: 'Hours', value: 'Mon to Fri, 9am to 5pm AEST' },
                { label: 'Response time', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--border-light)',
                }}>
                  <span className="label">{item.label}</span>
                  <span style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '14px',
                    color: 'var(--black)',
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              padding: '2rem',
              border: '1px solid var(--border-light)',
              background: 'var(--surface-light)',
            }}>
              <p className="label" style={{ marginBottom: '0.75rem' }}>What to expect</p>
              <ul style={{ listStyle: 'none' }}>
                {[
                  'A 30-minute call to understand your business',
                  'An honest assessment of what automation would actually help',
                  'A clear proposal with pricing within 48 hours',
                  'No obligation, no pressure',
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    gap: '10px',
                    padding: '6px 0',
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '14px',
                    color: 'var(--muted-light)',
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: 'var(--accent)', filter: 'brightness(0.7)' }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.15}>
            {status === 'sent' ? (
              <div style={{
                padding: '3rem',
                border: '1px solid var(--border-light)',
                textAlign: 'center',
              }}>
                <span style={{ color: 'var(--accent)', filter: 'brightness(0.7)', fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>✦</span>
                <h3 className="heading-card" style={{
                  fontSize: '24px',
                  letterSpacing: '0.02em',
                  color: 'var(--black)',
                  marginBottom: '0.75rem',
                }}>
                  Message received.
                </h3>
                <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '15px', color: 'var(--muted-light)', lineHeight: 1.7 }}>
                  We'll be in touch within 24 hours to schedule your free strategy call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sarah Mitchell"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Email address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@yourbusiness.com.au"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Business name</label>
                    <input
                      name="business"
                      type="text"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your Business Pty Ltd"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Service you're interested in</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    >
                      <option value="">Select a service</option>
                      <option value="websites">Website Creation</option>
                      <option value="phone-ai">Phone AI Automation</option>
                      <option value="bookings">Automated Bookings</option>
                      <option value="crm">Client Follow-up CRM</option>
                      <option value="bundle">Full Digitalisation Bundle</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell us about your business</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What does your business do, and what's the main challenge you're facing right now?"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="cta-btn-light"
                    style={{ border: '1px solid var(--border-light)', cursor: status === 'sending' ? 'wait' : 'pointer' }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message →'}
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
