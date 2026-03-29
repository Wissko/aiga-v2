'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

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
    padding: '12px 16px',
    borderRadius: '10px',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '0.9rem',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '0.6rem',
    fontWeight: 500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    color: 'var(--muted)',
    marginBottom: '6px',
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16" style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="overline mb-6">Contact</div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--text)',
            }}>
              Start with a
              <br />
              <span className="grad-gold-text">free strategy call</span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--muted2)',
              lineHeight: 1.8,
            }}>
              30 minutes. No sales pitch. We will map out which automations would have the biggest impact on your business and give you an honest assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              {status === 'sent' ? (
                <div
                  className="p-8 rounded-2xl text-center"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'var(--grad)' }}
                  >
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M2 9l7 7L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                  }}>
                    Message sent
                  </h2>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                  }}>
                    We will get back to you within 24 hours to schedule your strategy call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Your name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Sarah Mitchell"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="sarah@yourbusiness.com.au"
                        style={inputStyle}
                        onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Business name</label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="Your Business Name"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Service you are interested in</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, color: form.service ? 'var(--text)' : 'var(--muted)' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    >
                      <option value="">Select a service...</option>
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
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What kind of business do you run? What is your biggest challenge right now?"
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--border2)'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                      width: '100%',
                      padding: '14px 20px',
                      borderRadius: '999px',
                      background: 'var(--grad)',
                      border: 'none',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                      opacity: status === 'sending' ? 0.6 : 1,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Book my free strategy call'}
                  </button>

                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    textAlign: 'center',
                  }}>
                    We typically respond within a few hours during business days.
                  </p>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    color: 'var(--text)',
                    marginBottom: '1.25rem',
                  }}>
                    What to expect
                  </h2>
                  <div className="space-y-4">
                    {[
                      { step: '01', title: 'We review your submission', desc: 'Within a few hours, we will look at your business and prepare relevant questions and ideas.' },
                      { step: '02', title: 'Schedule your call', desc: 'We will send a booking link so you can choose a time that works for you.' },
                      { step: '03', title: '30-minute strategy session', desc: 'An honest, no-pressure conversation about where AI automation fits your business.' },
                      { step: '04', title: 'Receive a clear plan', desc: 'After the call, we will send a written summary of what we recommend and how much it costs.' },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: 'var(--bg3)',
                            border: '1px solid var(--border2)',
                          }}
                        >
                          <span className="stat-number" style={{ fontSize: '0.6rem', color: 'var(--accent2)' }}>
                            {item.step}
                          </span>
                        </div>
                        <div>
                          <div style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: 'var(--text)',
                            marginBottom: '0.25rem',
                          }}>
                            {item.title}
                          </div>
                          <div style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: '0.8rem',
                            color: 'var(--muted)',
                            lineHeight: 1.7,
                          }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gold divider */}
                <div style={{ height: '1px', background: 'rgba(201,169,110,0.2)' }} />

                <div
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  <h3 style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                  }}>
                    Who we work with
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Restaurants', 'Cafes', 'Hair salons', 'Beauty clinics', 'Physios', 'Dentists', 'Retail shops', 'Trades', 'Gyms', 'Yoga studios'].map((type) => (
                      <span
                        key={type}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontFamily: "'DM Sans', system-ui, sans-serif",
                          fontWeight: 300,
                          fontSize: '0.75rem',
                          color: 'var(--muted)',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  <h3 style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}>
                    Based in Australia
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                  }}>
                    We work with businesses across Sydney, Melbourne, Brisbane, Perth, Adelaide, and everywhere in between.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
