'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const details = [
  ['Email', 'hello@aiga.au'],
  ['Location', 'Brisbane, Australia'],
  ['Response window', 'Within 24 hours'],
  ['Call format', 'Free strategy session'],
];

const expectations = [
  'A focused review of your current setup',
  'A recommendation on the most valuable next move',
  'Clear scope if you decide to proceed',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', business: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '68vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Contact</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '10em' }}>A calmer, more premium way to start the conversation.</h1>
          <p className="page-hero-copy">
            The briefed leather reference is now genuinely integrated here as well, giving the contact entry the same black, beige, and accent balance instead of falling back to a generic animated background.
          </p>
        </div>
      </section>

      <Marquee text="Strategy Call · Project Scope · Business Systems" separator="·" dark={true} size="md" speed={22} />

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div style={{ display: 'grid', gap: '1.25rem' }}>
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Before we speak</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--black)', marginBottom: '1rem' }}>Tell us where the current setup is slowing the business down.</h2>
                <p style={{ color: 'var(--muted-light)', maxWidth: '34rem' }}>
                  That might be missed calls, inconsistent bookings, weak follow-up, an outdated website, or the need for a full digital reset. We will use that context to guide the call.
                </p>
              </div>

              <div className="premium-card premium-card-light">
                <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>Business details</p>
                <div style={{ display: 'grid', gap: '0.9rem' }}>
                  {details.map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingBottom: '0.9rem', borderBottom: '1px solid rgba(10,10,10,0.08)' }}>
                      <span className="premium-kicker" style={{ color: 'var(--muted-light)' }}>{label}</span>
                      <span style={{ color: 'var(--black)', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card premium-card-light">
                <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>What to expect</p>
                <ul className="premium-list">
                  {expectations.map((item) => (
                    <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="contact-form-shell">
              {status === 'sent' ? (
                <div>
                  <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Message received</p>
                  <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--black)', marginBottom: '0.75rem' }}>We will be in touch shortly.</h3>
                  <p style={{ color: 'var(--muted-light)' }}>A response should reach you within 24 hours to arrange the next conversation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
                  <div>
                    <label className="contact-label">Your name</label>
                    <input className="contact-input" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Sarah Mitchell" required />
                  </div>
                  <div>
                    <label className="contact-label">Email address</label>
                    <input className="contact-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="hello@yourbusiness.com.au" required />
                  </div>
                  <div>
                    <label className="contact-label">Business name</label>
                    <input className="contact-input" name="business" type="text" value={form.business} onChange={handleChange} placeholder="Your Business" />
                  </div>
                  <div>
                    <label className="contact-label">Service of interest</label>
                    <select className="contact-input" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option value="website">Website Creation</option>
                      <option value="phone-ai">Phone AI Automation</option>
                      <option value="bookings">Automated Bookings</option>
                      <option value="crm">Client Follow-Up CRM</option>
                      <option value="bundle">Full Digitalisation Bundle</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="contact-label">Brief project context</label>
                    <textarea className="contact-input" name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Tell us what currently feels inefficient, unclear, or underperforming in the business." />
                  </div>
                  <button type="submit" className="cta-btn-light" disabled={status === 'sending'} style={{ justifyContent: 'center', width: '100%' }}>
                    {status === 'sending' ? 'Sending...' : 'Send enquiry'}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
