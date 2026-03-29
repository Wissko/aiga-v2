'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const plans = [
  {
    id: 'websites',
    num: '01.',
    title: 'WEBSITE CREATION',
    monthly: { price: 299, desc: '12-month commitment', includes: ['Custom design', 'Mobile-first build', 'Hosting included', 'Monthly updates', 'SEO optimisation', 'Booking form integration'] },
    onetime: { price: 1990, desc: 'Full ownership, handed over', includes: ['Custom design', 'Mobile-first build', 'Full source code', '3 months support', 'SEO optimisation', 'Training session'] },
  },
  {
    id: 'phone-ai',
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    monthly: { price: 199, desc: 'Up to 500 calls/mo, 24/7 coverage', includes: ['AI receptionist', '24/7 call answering', 'Calendar booking', 'Call transcripts', 'Daily analytics', 'Custom voice and script'] },
    onetime: { price: 2490, desc: 'Setup + 12 months support', includes: ['AI receptionist setup', 'Custom voice and script', '12 months support', 'Unlimited calls (fair use)', 'Full ownership', 'Training and handover'] },
  },
  {
    id: 'bookings',
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    monthly: { price: 99, desc: 'Unlimited bookings, calendar sync', includes: ['Online booking page', 'SMS and email reminders', 'Calendar integration', 'Waitlist management', 'Monthly reporting', 'Rescheduling automation'] },
    onetime: { price: 890, desc: 'Setup + integration', includes: ['Booking system setup', 'Calendar integration', 'Reminder sequences', 'Waitlist setup', '3 months support', 'Training session'] },
  },
  {
    id: 'crm',
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    monthly: { price: 149, desc: 'Automated sequences, reporting dashboard', includes: ['Follow-up sequences', 'Review generation', 'Re-engagement campaigns', 'Birthday automations', 'Revenue dashboard', 'Monthly strategy review'] },
    onetime: { price: 1290, desc: 'Full setup + training', includes: ['CRM configuration', 'Sequence building', 'Review campaigns', 'Re-engagement flows', 'Full training session', '3 months support'] },
  },
];

const bundle = {
  title: 'FULL DIGITALISATION BUNDLE',
  badge: 'Best value',
  monthly: {
    price: 599,
    desc: 'All services, priority support, dedicated account manager',
    saving: 'Save $249/mo vs individual services',
    includes: [
      'Everything in all four services',
      'Dedicated account manager',
      '4-hour priority support response',
      'Monthly strategy calls',
      'Proactive system optimisation',
      'A/B testing and analytics',
      'Full cross-system integration',
    ],
  },
  onetime: {
    price: 5900,
    desc: 'Complete setup, everything included',
    saving: 'Save $1,560 vs individual setups',
    includes: [
      'Everything in all four services',
      'Full system integration',
      'Dedicated account manager (12 months)',
      'Priority support SLA',
      'Full source code and ownership',
      'Team training sessions',
      'Analytics and reporting setup',
    ],
  },
};

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'onetime'>('monthly');

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
        }}
      >
        <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
          Simple pricing
        </p>
        <h1 style={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(64px, 12vw, 140px)',
          letterSpacing: '-0.03em',
          lineHeight: 0.9,
          textTransform: 'uppercase',
          color: 'var(--white)',
          marginBottom: '2rem',
        }}>
          PRICING
        </h1>
        <p style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'var(--muted-dark)',
          maxWidth: '520px',
          lineHeight: 1.6,
        }}>
          Monthly plans or one-time setup. All prices in AUD. GST may apply.
        </p>
      </section>

      <Marquee text="Transparent Pricing" separator="·" dark={true} size="sm" speed={28} />

      {/* Toggle */}
      <section className="section-light" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <AnimatedSection>
          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex',
            border: '1px solid var(--border-light)',
            marginBottom: '4rem',
          }}>
            {(['monthly', 'onetime'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setBilling(opt)}
                style={{
                  padding: '10px 24px',
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: billing === opt ? 'var(--black)' : 'transparent',
                  color: billing === opt ? 'var(--white)' : 'var(--muted-light)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >
                {opt === 'monthly' ? 'Monthly' : 'One-time setup'}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Bundle highlight */}
        <AnimatedSection delay={0.1}>
          <div style={{
            padding: 'clamp(2rem, 4vw, 4rem)',
            border: '1px solid var(--border-light)',
            marginBottom: '3rem',
            position: 'relative',
          }}>
            <span style={{
              position: 'absolute',
              top: '-1px',
              left: '2rem',
              background: 'var(--accent)',
              color: 'var(--black)',
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
            }}>
              {bundle.badge}
            </span>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '2rem',
              marginTop: '1rem',
            }}>
              <div>
                <h2 style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 3vw, 36px)',
                  letterSpacing: '-0.02em',
                  color: 'var(--black)',
                  marginBottom: '0.5rem',
                }}>
                  {bundle.title}
                </h2>
                <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '14px', color: 'var(--muted-light)' }}>
                  {billing === 'monthly' ? bundle.monthly.desc : bundle.onetime.desc}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billing}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(40px, 6vw, 72px)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      color: 'var(--black)',
                    }}>
                      ${billing === 'monthly' ? bundle.monthly.price : bundle.onetime.price}
                      {billing === 'monthly' && (
                        <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 400, color: 'var(--muted-light)' }}>/mo</span>
                      )}
                    </div>
                    <div style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(0,0,0,0.5)',
                      marginTop: '4px',
                      letterSpacing: '0.05em',
                    }}>
                      {billing === 'monthly' ? bundle.monthly.saving : bundle.onetime.saving}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <ul style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.5rem 2rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}>
              {(billing === 'monthly' ? bundle.monthly.includes : bundle.onetime.includes).map((item) => (
                <li key={item} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(0,0,0,0.65)',
                  lineHeight: 1.6,
                  padding: '4px 0',
                }}>
                  <span style={{ color: 'var(--accent)', filter: 'brightness(0.6)', flexShrink: 0 }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="cta-btn-light">
              Get the bundle →
            </Link>
          </div>
        </AnimatedSection>

        {/* Individual plans */}
        <AnimatedSection delay={0.15}>
          <p className="label" style={{ marginBottom: '2rem' }}>Or choose individual services</p>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          border: '1px solid var(--border-light)',
        }}>
          {plans.map((plan, i) => {
            const current = billing === 'monthly' ? plan.monthly : plan.onetime;
            return (
              <AnimatedSection key={plan.id} delay={i * 0.08}>
                <div style={{
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  borderRight: i % 2 === 0 ? '1px solid var(--border-light)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none',
                  height: '100%',
                }}>
                  <span className="label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                    {plan.num}
                  </span>
                  <h3 style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 2vw, 22px)',
                    letterSpacing: '-0.01em',
                    color: 'var(--black)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                  }}>
                    {plan.title}
                  </h3>
                  <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '13px', color: 'var(--muted-light)', marginBottom: '1.5rem' }}>
                    {current.desc}
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={billing}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      style={{ marginBottom: '1.5rem' }}
                    >
                      <span style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 900,
                        fontSize: 'clamp(28px, 4vw, 48px)',
                        letterSpacing: '-0.02em',
                        color: 'var(--black)',
                      }}>
                        ${current.price}
                      </span>
                      {billing === 'monthly' && (
                        <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '14px', color: 'var(--muted-light)' }}>/mo</span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  <ul style={{ marginBottom: '1.5rem' }}>
                    {current.includes.map((item) => (
                      <li key={item} style={{
                        display: 'flex',
                        gap: '8px',
                        padding: '5px 0',
                        borderBottom: '1px solid var(--border-light)',
                        fontFamily: 'Satoshi, sans-serif',
                        fontSize: '13px',
                        color: 'rgba(0,0,0,0.6)',
                      }}>
                        <span style={{ color: 'var(--accent)', filter: 'brightness(0.6)', flexShrink: 0 }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="cta-btn-light" style={{ fontSize: '11px', padding: '10px 20px' }}>
                    Get started →
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark" style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <AnimatedSection>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 80px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--white)',
            marginBottom: '1rem',
          }}>
            Questions about pricing?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted-dark)', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
            We'll build a custom quote based on your actual needs. No upsells. No hidden fees.
          </p>
          <Link href="/contact" className="cta-btn">Book a free strategy call →</Link>
        </AnimatedSection>
      </section>
    </>
  );
}
