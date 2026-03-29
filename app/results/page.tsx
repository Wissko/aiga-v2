'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const caseStudies = [
  {
    id: 'mitchell-hair',
    business: 'Mitchell Hair Studio',
    location: 'Melbourne, VIC',
    type: 'Hair salon',
    services: ['Phone AI', 'Automated Bookings', 'Client Follow-up CRM'],
    challenge:
      'Missing 40% of after-hours calls. Manual booking via phone was creating double-bookings and wasting 2 hours per day of staff time. No follow-up system meant clients would drift to competitors.',
    solution:
      'Deployed an AI phone agent that answers 24/7 and books directly into their calendar. Added automated SMS reminders and a follow-up sequence that re-engages clients after 6 weeks of inactivity.',
    results: [
      { metric: '+40%', label: 'Revenue in 4 months' },
      { metric: '100%', label: 'Calls answered' },
      { metric: '-65%', label: 'No-show rate' },
      { metric: '2h', label: 'Staff time saved daily' },
    ],
    quote:
      'We went from missing half our after-hours calls to capturing every single enquiry. Revenue is up 40% in four months. The AI sounds more professional than I do on a bad day.',
    author: 'Sarah Mitchell, Owner',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    imageAlt: 'Analytics dashboard',
  },
  {
    id: 'tran-kitchen',
    business: 'Tran Kitchen',
    location: 'Sydney, NSW',
    type: 'Restaurant',
    services: ['Phone AI', 'Automated Bookings'],
    challenge:
      'Busy kitchen meant calls were constantly missed during service. Reservation system was a paper book. Managing bookings, enquiries, and walk-ins simultaneously during dinner service was causing errors and stress.',
    solution:
      'Built a phone AI that handles reservation calls and answers common questions about opening hours, menu, and dietary requirements. Integrated with an online booking system with real-time availability.',
    results: [
      { metric: '0', label: 'Missed reservation calls' },
      { metric: '+25%', label: 'Table bookings per week' },
      { metric: '4.2 to 4.8', label: 'Google rating improvement' },
      { metric: '3h/wk', label: 'Time saved on admin' },
    ],
    quote:
      'The AI phone bot handles our reservation line better than a part-time staff member. Our team can focus on the floor instead of running to answer the phone every five minutes.',
    author: 'James Tran, Head Chef and Owner',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    imageAlt: 'Technology circuit abstraction',
  },
  {
    id: 'sharma-health',
    business: 'Sharma Allied Health',
    location: 'Brisbane, QLD',
    type: 'Allied health clinic',
    services: ['Website Creation', 'Automated Bookings', 'Client Follow-up CRM'],
    challenge:
      'Outdated website was not ranking on Google and had no online booking. Reception was spending 30 minutes per day on rebooking reminders. No system to re-engage patients who had not returned in 3 months.',
    solution:
      'Complete website rebuild optimised for local SEO and conversion. Integrated online booking with automated reminders via SMS. Built a CRM flow that prompts patients to rebook at appropriate intervals and requests Google reviews after positive visits.',
    results: [
      { metric: '+60%', label: 'Reduction in no-shows' },
      { metric: '3.8 to 4.7', label: 'Google rating improvement' },
      { metric: '+35%', label: 'New patient enquiries from Google' },
      { metric: '30min', label: 'Daily admin time saved' },
    ],
    quote:
      "AIGA built our booking system and CRM in two weeks. We've reduced no-shows by 60% and our Google rating went from 3.8 to 4.7. The ROI was clear within the first month.",
    author: 'Priya Sharma, Practice Manager',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
    imageAlt: 'Abstract technology interface',
  },
];

const globalStats = [
  { value: '500+', label: 'Automations deployed' },
  { value: '98%', label: 'Client retention rate' },
  { value: '2 weeks', label: 'Average go-live time' },
  { value: '3.4x', label: 'Average ROI in first year' },
];

export default function ResultsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16" style={{ borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="overline mb-6">Client results</div>
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
              Real businesses,
              <br />
              <span className="grad-gold-text">real numbers</span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--muted2)',
              lineHeight: 1.8,
            }}>
              Not case studies designed to impress investors. Results from Australian small businesses that were missing calls, losing clients, and drowning in admin before we helped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global stats */}
      <section className="py-16" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {globalStats.map((stat, i) => (
              <AnimatedSection key={stat.value} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl text-center"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border2)' }}
                >
                  <div
                    className="stat-number grad-text mb-2"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    letterSpacing: '0.05em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.id}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Image — abstract/tech only */}
                  <div className={`relative h-64 md:h-auto ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#111120] to-transparent md:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4">
                      <div
                        className="px-3 py-1.5 rounded-lg"
                        style={{
                          background: 'rgba(6,6,8,0.8)',
                          border: '1px solid var(--border)',
                          fontFamily: "'DM Sans', system-ui, sans-serif",
                          fontSize: '0.7rem',
                          fontWeight: 400,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                        }}
                      >
                        {cs.type}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <div className="mb-6">
                      <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: 'var(--text)',
                        marginBottom: '0.25rem',
                      }}>
                        {cs.business}
                      </h2>
                      <div style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontWeight: 300,
                        fontSize: '0.8rem',
                        color: 'var(--muted)',
                        marginBottom: '0.75rem',
                      }}>
                        {cs.location}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cs.services.map((s) => (
                          <span
                            key={s}
                            className="stat-number"
                            style={{
                              padding: '3px 10px',
                              borderRadius: '6px',
                              fontSize: '0.6rem',
                              color: 'var(--muted)',
                              background: 'rgba(255,255,255,0.03)',
                              border: '1px solid var(--border)',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results — Space Mono metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {cs.results.map((r) => (
                        <div
                          key={r.label}
                          className="p-3 rounded-xl"
                          style={{ background: 'var(--bg2)', border: '1px solid var(--border2)' }}
                        >
                          <div
                            className="stat-number grad-gold-text"
                            style={{ fontSize: '1.35rem', lineHeight: 1, marginBottom: '0.35rem' }}
                          >
                            {r.metric}
                          </div>
                          <div style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontSize: '0.7rem',
                            fontWeight: 300,
                            color: 'var(--muted)',
                          }}>
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <blockquote
                      className="pl-4 mb-4"
                      style={{ borderLeft: '2px solid rgba(201,169,110,0.4)' }}
                    >
                      <p style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: '0.9rem',
                        color: 'var(--muted2)',
                        lineHeight: 1.75,
                        marginBottom: '0.5rem',
                      }}>
                        "{cs.quote}"
                      </p>
                      <cite style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontWeight: 300,
                        fontSize: '0.75rem',
                        color: 'var(--muted)',
                        fontStyle: 'normal',
                      }}>
                        {cs.author}
                      </cite>
                    </blockquote>

                    <div className="mt-6 space-y-3">
                      <details className="group">
                        <summary
                          className="list-none flex items-center gap-1.5 cursor-pointer"
                          style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontSize: '0.75rem',
                            fontWeight: 400,
                            color: 'var(--muted)',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
                          The challenge
                        </summary>
                        <p
                          className="mt-2 pl-4"
                          style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: '0.8rem',
                            color: 'var(--muted)',
                            lineHeight: 1.75,
                          }}
                        >
                          {cs.challenge}
                        </p>
                      </details>
                      <details className="group">
                        <summary
                          className="list-none flex items-center gap-1.5 cursor-pointer"
                          style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontSize: '0.75rem',
                            fontWeight: 400,
                            color: 'var(--muted)',
                          }}
                        >
                          <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
                          What we built
                        </summary>
                        <p
                          className="mt-2 pl-4"
                          style={{
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: '0.8rem',
                            color: 'var(--muted)',
                            lineHeight: 1.75,
                          }}
                        >
                          {cs.solution}
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Note about real screenshots */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div
              className="px-6 py-4 rounded-xl"
              style={{
                background: 'rgba(201,169,110,0.05)',
                border: '1px solid rgba(201,169,110,0.2)',
              }}
            >
              <p style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '0.8rem',
                color: 'var(--gold)',
                letterSpacing: '0.03em',
                lineHeight: 1.6,
              }}>
                Real client screenshots and project visuals coming soon. Results above are from actual client engagements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lead-in CTA */}
      <section className="py-24" style={{ borderTop: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                color: 'var(--text)',
              }}>
                Your business could be{' '}
                <span className="grad-gold-text" style={{ fontStyle: 'italic' }}>next</span>
              </h2>
              <p style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '0.95rem',
                color: 'var(--muted)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}>
                Every business in these case studies started with the same thing: a 30-minute conversation about what was actually costing them money.
                Not a proposal. Not a quote. Just an honest assessment.
              </p>
              <p style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '0.95rem',
                color: 'var(--muted)',
                lineHeight: 1.8,
              }}>
                If you are missing calls, spending hours on admin, or watching clients not come back, there is a fix.
                And it usually pays for itself within the first month.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{
                  border: '1px solid var(--border2)',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.05))',
                }}
              >
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                }}>
                  Start with a free audit
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'We review your current setup',
                    'Identify your top 3 revenue leaks',
                    'Show exactly what automation would fix them',
                    'Give you a clear price and timeline',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ background: 'var(--grad)' }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
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
                    padding: '12px 24px',
                    borderRadius: '999px',
                    background: 'var(--grad)',
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  Book your free strategy call
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
