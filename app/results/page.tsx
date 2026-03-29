'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import Marquee from '@/components/Marquee';

const caseStudies = [
  {
    id: 'mitchell-hair',
    num: '01.',
    business: 'Mitchell Hair Studio',
    location: 'Melbourne, VIC',
    type: 'Hair salon',
    services: ['Phone AI', 'Automated Bookings', 'Client Follow-up CRM'],
    challenge: 'Missing 40% of after-hours calls. Manual booking via phone was creating double-bookings and wasting 2 hours per day of staff time. No follow-up system meant clients would drift to competitors.',
    solution: 'Deployed an AI phone agent that answers 24/7 and books directly into their calendar. Added automated SMS reminders and a follow-up sequence that re-engages clients after 6 weeks of inactivity.',
    results: [
      { metric: '+40%', label: 'Revenue in 4 months' },
      { metric: '100%', label: 'Calls answered' },
      { metric: '-65%', label: 'No-show rate' },
      { metric: '2h', label: 'Staff time saved daily' },
    ],
    quote: 'We went from missing half our after-hours calls to capturing every single enquiry. Revenue is up 40% in four months.',
    author: 'Sarah Mitchell, Owner',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    imageAlt: 'Analytics dashboard',
  },
  {
    id: 'tran-kitchen',
    num: '02.',
    business: 'Tran Kitchen',
    location: 'Sydney, NSW',
    type: 'Restaurant',
    services: ['Phone AI', 'Automated Bookings'],
    challenge: 'Busy kitchen meant calls were constantly missed during service. Reservation system was a paper book. Managing bookings, enquiries, and walk-ins simultaneously during dinner service was causing errors.',
    solution: 'Built a phone AI that handles reservation calls and answers common questions. Integrated with an online booking system with real-time availability.',
    results: [
      { metric: '0', label: 'Missed reservation calls' },
      { metric: '+25%', label: 'Table bookings per week' },
      { metric: '4.2 to 4.8', label: 'Google rating' },
      { metric: '3h/wk', label: 'Admin time saved' },
    ],
    quote: 'The AI phone bot handles our reservation line better than a part-time staff member. Our team can focus on the floor.',
    author: 'James Tran, Head Chef and Owner',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    imageAlt: 'Technology circuit abstraction',
  },
  {
    id: 'sharma-health',
    num: '03.',
    business: 'Sharma Allied Health',
    location: 'Brisbane, QLD',
    type: 'Allied health clinic',
    services: ['Website Creation', 'Automated Bookings', 'Client Follow-up CRM'],
    challenge: 'Outdated website was not ranking on Google. Reception was spending 30 minutes per day on rebooking reminders. No system to re-engage patients who had not returned in 3 months.',
    solution: 'Complete website rebuild optimised for local SEO. Integrated online booking with automated reminders. Built a CRM flow that prompts patients to rebook at appropriate intervals and requests Google reviews.',
    results: [
      { metric: '-60%', label: 'No-show reduction' },
      { metric: '3.8 to 4.7', label: 'Google rating' },
      { metric: '+35%', label: 'New patient enquiries' },
      { metric: '30min', label: 'Daily admin saved' },
    ],
    quote: "AIGA built our booking system and CRM in two weeks. We've reduced no-shows by 60% and our Google rating went from 3.8 to 4.7.",
    author: 'Priya Sharma, Practice Manager',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
    imageAlt: 'Abstract technology interface',
  },
];

const globalStats = [
  { value: '500+', label: 'Automations deployed' },
  { value: '98%', label: 'Client retention rate' },
  { value: '2 wks', label: 'Average go-live time' },
  { value: '3x', label: 'Average revenue growth' },
];

export default function ResultsPage() {
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
          Proof of work
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
          RESULTS
        </h1>
        <p style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'var(--muted-dark)',
          maxWidth: '520px',
          lineHeight: 1.6,
        }}>
          Real businesses. Real numbers. Here's what actually happens when automation is done right.
        </p>
      </section>

      <Marquee text="Real Results" separator="·" dark={true} size="md" speed={22} />

      {/* Global stats */}
      <section className="section-light" style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '4rem',
          marginBottom: '4rem',
        }}>
          {globalStats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div>
                <div style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(36px, 6vw, 72px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.9,
                  color: 'var(--black)',
                  marginBottom: '12px',
                }}>
                  <CountUp value={stat.value} duration={1500} />
                </div>
                <p className="label">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--black)',
            marginBottom: '0.5rem',
          }}>
            Case studies.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted-light)', marginBottom: '4rem', maxWidth: '480px', lineHeight: 1.7 }}>
            Three businesses. Three different problems. One consistent outcome: measurable growth.
          </p>
        </AnimatedSection>
      </section>

      {/* Case studies — alternating */}
      {caseStudies.map((cs, i) => (
        <section
          key={cs.id}
          id={cs.id}
          className={i % 2 === 0 ? 'section-dark' : 'section-light'}
          style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            <AnimatedSection>
              <span className="label" style={{
                color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)',
                display: 'block',
                marginBottom: '0.75rem',
              }}>
                {cs.num} {cs.type} · {cs.location}
              </span>
              <h2 style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3.5vw, 48px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                textTransform: 'uppercase',
                color: i % 2 === 0 ? 'var(--white)' : 'var(--black)',
                marginBottom: '2rem',
              }}>
                {cs.business}
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <p className="label" style={{ color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)', marginBottom: '0.75rem' }}>
                  The challenge
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)' }}>
                  {cs.challenge}
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <p className="label" style={{ color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)', marginBottom: '0.75rem' }}>
                  What we built
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)' }}>
                  {cs.solution}
                </p>
              </div>

              <blockquote style={{
                borderLeft: `2px solid var(--accent)`,
                paddingLeft: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <p style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: 1.5,
                  color: i % 2 === 0 ? 'var(--white)' : 'var(--black)',
                  fontStyle: 'italic',
                  marginBottom: '0.5rem',
                }}>
                  "{cs.quote}"
                </p>
                <cite style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)',
                  fontStyle: 'normal',
                }}>
                  {cs.author}
                </cite>
              </blockquote>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cs.services.map((s) => (
                  <span key={s} style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)',
                    border: `1px solid ${i % 2 === 0 ? 'var(--border-dark)' : 'var(--border-light)'}`,
                    padding: '4px 12px',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              {/* Results grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px',
                border: `1px solid ${i % 2 === 0 ? 'var(--border-dark)' : 'var(--border-light)'}`,
                marginBottom: '2rem',
              }}>
                {cs.results.map((r, ri) => (
                  <div key={ri} style={{
                    padding: '1.5rem',
                    borderRight: ri % 2 === 0 ? `1px solid ${i % 2 === 0 ? 'var(--border-dark)' : 'var(--border-light)'}` : 'none',
                    borderBottom: ri < 2 ? `1px solid ${i % 2 === 0 ? 'var(--border-dark)' : 'var(--border-light)'}` : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(22px, 3vw, 36px)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      color: i % 2 === 0 ? 'var(--white)' : 'var(--black)',
                      marginBottom: '6px',
                    }}>
                      {r.metric}
                    </div>
                    <p className="label" style={{ color: i % 2 === 0 ? 'var(--muted-dark)' : 'var(--muted-light)' }}>
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="img-hover" style={{
                height: '320px',
                border: `1px solid ${i % 2 === 0 ? 'var(--border-dark)' : 'var(--border-light)'}`,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cs.image} alt={cs.imageAlt} style={{ opacity: i % 2 === 0 ? 0.6 : 1 }} />
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

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
            Your business could be next.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted-dark)', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
            Free strategy call. We'll assess your current setup and map out exactly what would make the biggest difference.
          </p>
          <Link href="/contact" className="cta-btn">Book a free strategy call →</Link>
        </AnimatedSection>
      </section>
    </>
  );
}
