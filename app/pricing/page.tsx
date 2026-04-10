'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, marginTop: '2px' }}
  >
    <circle cx="7" cy="7" r="6.5" stroke="#c8f000" strokeWidth="1" />
    <path d="M4 7L6.2 9.5L10 5" stroke="#c8f000" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const plans = [
  {
    id: 'websites',
    num: '01.',
    title: 'WEBSITE CREATION',
    monthly: {
      price: 199,
      desc: '12-month min · hosting + updates + support included',
      includes: [
        'Custom design, mobile-first',
        'Up to 8 pages',
        'Contact form + Google Analytics',
        'Hosting & monthly updates',
        '1 month free support',
        'SEO foundations included',
      ],
    },
    onetime: {
      price: 1490,
      desc: 'Full ownership · source code handed over',
      includes: [
        'Custom design, mobile-first',
        'Up to 8 pages',
        'Contact form + Google Analytics',
        'Full source code ownership',
        '1 month free support',
        'Training session',
      ],
    },
  },
  {
    id: 'phone-ai',
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    monthly: {
      price: 149,
      desc: 'Up to 300 calls/mo · 24/7 coverage',
      includes: [
        'AI answers calls 24/7',
        'Books appointments automatically',
        'Handles FAQs with custom script',
        'Custom voice profile',
        'Integrates with your calendar',
        'Call summaries & transcripts',
      ],
    },
    onetime: {
      price: 1890,
      desc: 'Setup + 12 months support included',
      includes: [
        'Full AI receptionist setup',
        'Custom voice & script',
        '12 months support included',
        'Calendar integration',
        'Full ownership',
        'Training & handover session',
      ],
    },
  },
  {
    id: 'bookings',
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    monthly: {
      price: 79,
      desc: 'Unlimited bookings · calendar sync',
      includes: [
        'Works with Cal.com / Calendly / Google',
        'Automated SMS reminders',
        'No-show reduction sequences',
        'Calendar sync & rescheduling',
        'Waitlist management',
        'Monthly booking report',
      ],
    },
    onetime: {
      price: 690,
      desc: 'Setup + integration',
      includes: [
        'Booking system setup',
        'Calendar integration',
        'SMS reminder sequences',
        'Waitlist configuration',
        '3 months support',
        'Training session',
      ],
    },
  },
  {
    id: 'crm',
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    monthly: {
      price: 119,
      desc: 'Automated sequences · monthly report',
      includes: [
        'Lead capture & automated follow-ups',
        'Email & SMS sequences',
        'CRM dashboard',
        'Re-engagement campaigns',
        'Review generation flows',
        'Monthly performance report',
      ],
    },
    onetime: {
      price: 990,
      desc: 'Full setup + 1 training session',
      includes: [
        'CRM configuration',
        'Follow-up sequence building',
        'Review campaigns',
        'Re-engagement flows',
        '1 training session included',
        '3 months support',
      ],
    },
  },
];

const bundle = {
  title: 'FULL GROWTH BUNDLE',
  badge: 'Most Popular',
  monthly: {
    price: 449,
    desc: 'All 4 services · priority support · dedicated account manager',
    saving: 'Save $97/mo vs buying individually',
    includes: [
      'Everything in all four services',
      'Dedicated account manager',
      'Monthly strategy call',
      'Monthly performance report',
      'Priority Slack support',
      'Full cross-system integration',
      'Proactive optimisation',
    ],
  },
  onetime: {
    price: 4490,
    desc: 'Complete setup · everything included · saves $580',
    saving: 'Save $580 vs buying individually',
    includes: [
      'Everything in all four services',
      'Full system integration',
      'Dedicated account manager (12 months)',
      'Priority support SLA',
      'Full source code & ownership',
      'Team training sessions',
      'Analytics & reporting setup',
    ],
  },
};

const faqs = [
  {
    q: 'Are there any setup fees?',
    a: 'No setup fees on monthly plans. What you see is what you pay from day one. One-time plans include everything — setup, configuration, and handover.',
  },
  {
    q: "What's your contract length?",
    a: 'Monthly plans run on a 12-month minimum, then roll to month-to-month automatically. One-time plans have zero lock-in — you own it outright.',
  },
  {
    q: 'What if I want to cancel?',
    a: "We make it easy. Give us 30 days notice after your minimum term and you're done. No penalties, no hoops.",
  },
  {
    q: 'Why are your prices lower than other AI agencies?',
    a: "We're new, hungry, and efficient. No bloated teams. No office overheads. You get the same tech, better service — and we publish our prices, unlike everyone else.",
  },
  {
    q: 'Do you offer a free trial?',
    a: "We offer a free 30-minute strategy call. We will assess your business, identify quick wins, and recommend the right plan. No obligation, no pitch deck.",
  },
  {
    q: "What's included in 'support'?",
    a: 'Email and chat support during business hours (AEST). Bundle clients get priority Slack access with faster response times and a dedicated account manager.',
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'onetime'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="section-dark page-hero-shell"
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
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
            Simple pricing
          </p>
          <h1 className="heading-display" style={{
          fontSize: 'clamp(64px, 12vw, 140px)',
          letterSpacing: '0.03em',
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
        </div>
      </section>

      <Marquee text="Transparent Pricing" separator="·" dark={true} size="sm" speed={28} />

      {/* Plans */}
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
            border: '2px solid #c8f000',
            marginBottom: '3rem',
            position: 'relative',
            background: 'rgba(200, 240, 0, 0.03)',
          }}>
            <span style={{
              position: 'absolute',
              top: '-1px',
              left: '2rem',
              background: '#c8f000',
              color: 'var(--black)',
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '4px 12px',
            }}>
              ⭐ {bundle.badge}
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
                <h2 className="heading-section" style={{
                  fontSize: 'clamp(20px, 3vw, 36px)',
                  letterSpacing: '0.02em',
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
                      color: '#6a7c00',
                      marginTop: '4px',
                      letterSpacing: '0.05em',
                      fontWeight: 600,
                    }}>
                      {billing === 'monthly' ? bundle.monthly.saving : bundle.onetime.saving}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <ul style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '0.5rem 2rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              listStyle: 'none',
              padding: 0,
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
                  <CheckIcon />
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
                  <h3 className="heading-card" style={{
                    fontSize: 'clamp(16px, 2vw, 22px)',
                    letterSpacing: '0.02em',
                    color: 'var(--black)',
                    marginBottom: '0.5rem',
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
                  <ul style={{ marginBottom: '1.5rem', listStyle: 'none', padding: 0 }}>
                    {current.includes.map((item) => (
                      <li key={item} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        padding: '5px 0',
                        borderBottom: '1px solid var(--border-light)',
                        fontFamily: 'Satoshi, sans-serif',
                        fontSize: '13px',
                        color: 'rgba(0,0,0,0.6)',
                      }}>
                        <CheckIcon />
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

        {/* Not sure CTA */}
        <AnimatedSection delay={0.2}>
          <div style={{
            marginTop: '3rem',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            background: 'var(--surface-light)',
          }}>
            <div>
              <p style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 2vw, 22px)',
                color: 'var(--black)',
                marginBottom: '0.25rem',
              }}>
                Not sure which plan?
              </p>
              <p style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '14px', color: 'var(--muted-light)' }}>
                We'll figure out what fits your business in 30 minutes.
              </p>
            </div>
            <Link href="/contact" className="cta-btn-light">
              Book a free call →
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="section-dark" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <AnimatedSection>
          <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1rem' }}>Common questions</p>
          <h2 className="heading-section" style={{
            fontSize: 'clamp(28px, 5vw, 60px)',
            letterSpacing: '0.02em',
            color: 'var(--white)',
            marginBottom: '3rem',
          }}>
            FAQ
          </h2>
        </AnimatedSection>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 'clamp(1rem, 2vw, 1.5rem) 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '2rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(15px, 2vw, 20px)',
                    color: 'var(--white)',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '22px',
                    color: '#c8f000',
                    fontWeight: 300,
                    flexShrink: 0,
                    transition: 'transform 0.2s ease',
                    transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                  }}>
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        color: 'var(--muted-dark)',
                        paddingBottom: 'clamp(1rem, 2vw, 1.5rem)',
                        maxWidth: '640px',
                        lineHeight: 1.7,
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-dark" style={{
        padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}>
        <AnimatedSection>
          <h2 className="heading-section" style={{
            fontSize: 'clamp(36px, 6vw, 80px)',
            letterSpacing: '0.02em',
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
