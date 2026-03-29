'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';

const plans = [
  {
    id: 'websites',
    title: 'Website Creation',
    monthly: { price: 299, desc: '12-month commitment', includes: ['Custom design', 'Mobile-first build', 'Hosting included', 'Monthly updates', 'SEO optimisation', 'Booking form integration'] },
    onetime: { price: 1990, desc: 'Full ownership, handed over', includes: ['Custom design', 'Mobile-first build', 'Full source code', '3 months support', 'SEO optimisation', 'Training session'] },
  },
  {
    id: 'phone-ai',
    title: 'Phone AI Automation',
    monthly: { price: 199, desc: 'Up to 500 calls/mo, 24/7 coverage', includes: ['AI receptionist', '24/7 call answering', 'Calendar booking', 'Call transcripts', 'Daily analytics', 'Custom voice and script'] },
    onetime: { price: 2490, desc: 'Setup + 12 months support', includes: ['AI receptionist setup', 'Custom voice and script', '12 months support', 'Unlimited calls (fair use)', 'Full ownership', 'Training and handover'] },
  },
  {
    id: 'bookings',
    title: 'Automated Bookings',
    monthly: { price: 99, desc: 'Unlimited bookings, calendar sync', includes: ['Online booking page', 'SMS and email reminders', 'Calendar integration', 'Waitlist management', 'Monthly reporting', 'Rescheduling automation'] },
    onetime: { price: 890, desc: 'Setup + integration', includes: ['Booking system setup', 'Calendar integration', 'Reminder sequences', 'Waitlist setup', '3 months support', 'Training session'] },
  },
  {
    id: 'crm',
    title: 'Client Follow-up CRM',
    monthly: { price: 149, desc: 'Automated sequences, reporting dashboard', includes: ['Follow-up sequences', 'Review generation', 'Re-engagement campaigns', 'Birthday automations', 'Revenue dashboard', 'Monthly strategy review'] },
    onetime: { price: 1290, desc: 'Full setup + training', includes: ['CRM configuration', 'Sequence building', 'Review campaigns', 'Re-engagement flows', 'Full training session', '3 months support'] },
  },
];

const bundle = {
  id: 'bundle',
  title: 'Full Digitalisation Bundle',
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
      'Custom development as needed',
      '6 months support',
      'Two training sessions',
      'Project management included',
      'Launch and go-live support',
    ],
  },
};

const faqs = [
  {
    q: 'Is there a lock-in contract on monthly plans?',
    a: 'Website creation requires a 12-month commitment (this covers the ongoing hosting, updates, and support). All other monthly services are month-to-month with 30 days notice to cancel.',
  },
  {
    q: 'What does "one-time" mean exactly?',
    a: 'You pay once and own the system outright. We hand over all files, credentials, and access. Support periods vary by service. After that, you can manage it yourself or choose to continue with us on a retainer.',
  },
  {
    q: 'Are prices in Australian dollars?',
    a: 'Yes, all prices are in AUD. GST may apply depending on your business registration status.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most services are live within 1 to 2 weeks. The Full Digitalisation Bundle typically takes 2 to 4 weeks depending on complexity. We always set a firm go-live date at the start.',
  },
  {
    q: 'Can I start with one service and add more later?',
    a: 'Absolutely. Many clients start with Automated Bookings or Phone AI and expand over time. Upgrading to the bundle credits your existing payments.',
  },
  {
    q: 'Do you work with any type of small business?',
    a: 'We specialise in restaurants, salons, healthcare practitioners, retail, and trade businesses. If you have customers and a phone, we can almost certainly help.',
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'onetime'>('monthly');

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden" style={{ borderBottom: '1px solid var(--border)' }}>
        <AnimatedBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overline mb-6">Pricing</div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--text)',
            }}>
              Transparent pricing,
              <br />
              <span className="grad-gold-text">no surprises</span>
            </h1>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--muted2)',
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
            }}>
              Monthly plans for ongoing service, or one-time setups for full ownership. All in AUD.
            </p>

            {/* Toggle */}
            <div
              className="inline-flex items-center gap-1 p-1 rounded-xl"
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
            >
              <button
                onClick={() => setBilling('monthly')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '0.6rem',
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: billing === 'monthly' ? 'var(--text)' : 'transparent',
                  color: billing === 'monthly' ? 'var(--bg)' : 'var(--muted)',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('onetime')}
                style={{
                  padding: '8px 20px',
                  borderRadius: '0.6rem',
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: billing === 'onetime' ? 'var(--text)' : 'transparent',
                  color: billing === 'onetime' ? 'var(--bg)' : 'var(--muted)',
                }}
              >
                One-time
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bundle (featured) */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                border: '1px solid var(--border2)',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(167,139,250,0.06))',
              }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 pointer-events-none"
                style={{ background: 'var(--gold)' }}
              />
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                      style={{
                        background: 'var(--grad-gold)',
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.65rem',
                      }}
                    >
                      {bundle.badge}
                    </div>
                    <h2 style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 300,
                      fontSize: '1.75rem',
                      color: 'var(--text)',
                      marginBottom: '0.35rem',
                    }}>
                      {bundle.title}
                    </h2>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontWeight: 300,
                      fontSize: '0.875rem',
                      color: 'var(--muted)',
                    }}>
                      {billing === 'monthly' ? bundle.monthly.desc : bundle.onetime.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={billing}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="stat-number" style={{ fontSize: '3.5rem', color: 'var(--text)', lineHeight: 1 }}>
                          ${billing === 'monthly' ? bundle.monthly.price : bundle.onetime.price}
                          {billing === 'monthly' && (
                            <span style={{
                              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                              fontSize: '1.1rem',
                              fontWeight: 300,
                              color: 'var(--muted)',
                            }}>/mo</span>
                          )}
                        </div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontSize: '0.8rem',
                          fontWeight: 400,
                          color: 'var(--gold)',
                          marginTop: '0.25rem',
                        }}>
                          {billing === 'monthly' ? bundle.monthly.saving : bundle.onetime.saving}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
                  {(billing === 'monthly' ? bundle.monthly.includes : bundle.onetime.includes).map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ background: 'var(--gold)' }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontWeight: 300,
                        fontSize: '0.875rem',
                        color: 'var(--muted2)',
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 28px',
                    borderRadius: '999px',
                    background: 'var(--gold)',
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#090806',
                    textDecoration: 'none',
                  }}
                >
                  Get the bundle
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Individual plans */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1.25rem',
              color: 'var(--muted)',
            }}>
              Or choose individual services
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {plans.map((plan, i) => {
              const current = billing === 'monthly' ? plan.monthly : plan.onetime;
              return (
                <AnimatedSection key={plan.id} delay={i * 0.08}>
                  <div
                    className="p-6 rounded-2xl h-full flex flex-col"
                    style={{
                      background: 'var(--bg3)',
                      border: '1px solid var(--border)',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <h3 style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          color: 'var(--text)',
                          marginBottom: '0.25rem',
                        }}>
                          {plan.title}
                        </h3>
                        <p style={{
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          fontWeight: 300,
                          fontSize: '0.75rem',
                          color: 'var(--muted)',
                        }}>
                          {current.desc}
                        </p>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={billing + plan.id}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="text-right flex-shrink-0"
                        >
                          <div className="stat-number" style={{ fontSize: '2rem', color: 'var(--text)', lineHeight: 1 }}>
                            ${current.price}
                          </div>
                          {billing === 'monthly' && (
                            <div style={{
                              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                              fontSize: '0.7rem',
                              fontWeight: 300,
                              color: 'var(--muted)',
                            }}>/mo</div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Gold line separator */}
                    <div style={{ height: '1px', background: 'rgba(201,169,110,0.2)', marginBottom: '1.25rem' }} />

                    <ul className="space-y-2 flex-1 mb-6">
                      {current.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.1rem' }}>+</span>
                          <span style={{
                            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: '0.875rem',
                            color: 'var(--muted)',
                          }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        borderRadius: '999px',
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--muted2)',
                        textDecoration: 'none',
                        border: '1px solid var(--border)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Get started
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Frequently asked questions
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 300,
              color: 'var(--muted)',
            }}>
              Everything you need to know before getting started.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.06}>
                <div
                  className="p-5 rounded-xl"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}>
                    {faq.q}
                  </h3>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 300,
              color: 'var(--muted)',
              marginBottom: '1rem',
            }}>
              Still have questions?
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '999px',
                background: 'var(--gold)',
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#090806',
                textDecoration: 'none',
              }}
            >
              Book a free strategy call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
