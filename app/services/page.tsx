'use client';
import LiquidBackground from '@/components/LiquidBackground';
import ParticleWaves from '@/components/ParticleWaves';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const services = [
  {
    id: 'websites',
    num: '01.',
    title: 'WEBSITE CREATION',
    tagline: 'Your digital shopfront, built to convert.',
    desc: `Your website is often the first impression a potential customer gets. Most small business websites are slow, outdated, and built on templates that look like every other competitor. AIGA builds modern, fast, and conversion-focused websites tailored to your business.`,
    bullets: [
      'Custom design aligned to your brand',
      'Mobile-first, Google-optimised (Core Web Vitals)',
      'Integrated booking and enquiry forms',
      'E-commerce ready with payment processing',
      'Ongoing hosting and updates included on monthly plans',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    imageAlt: 'Web interface technology',
    tag: '[WEB DESIGN]',
    from: '$299/mo',
  },
  {
    id: 'phone-ai',
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    tagline: 'Never miss a call. Never hire a receptionist.',
    desc: `Most small businesses lose revenue from missed calls. After hours, during peak service times, when you're with a customer. Our AI voice agent answers every call, qualifies the enquiry, books appointments, and escalates emergencies to you.`,
    bullets: [
      '24/7 call answering, 365 days per year',
      'Books appointments directly into your calendar',
      'Handles common FAQs and pricing enquiries',
      'Transfers to you for urgent or complex calls',
      'Full call transcripts and analytics delivered daily',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    imageAlt: 'Circuit board technology abstract',
    tag: '[AI VOICE]',
    from: '$199/mo',
  },
  {
    id: 'bookings',
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    tagline: 'Let clients book around the clock.',
    desc: `Manual booking systems waste time and lose clients. Our automated booking solution lets customers schedule online at 2am if they want to, syncs with your calendar, sends reminders to reduce no-shows, and handles rescheduling automatically.`,
    bullets: [
      'Online booking from your website, Google, and social',
      'Automated SMS and email reminders',
      'No-show reduction: typically 50 to 70%',
      'Syncs with Google Calendar, iCal, and more',
      'Waitlist management and auto-fill cancellations',
    ],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
    imageAlt: 'Abstract technology interface',
    tag: '[SCHEDULING]',
    from: '$99/mo',
  },
  {
    id: 'crm',
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    tagline: 'Keep clients coming back, automatically.',
    desc: `Most businesses spend all their energy acquiring new customers and neglect the gold mine sitting in their existing client list. AIGA builds personalised automated sequences that re-engage past clients, request reviews, offer seasonal promotions, and keep your business top of mind.`,
    bullets: [
      'Automated post-visit follow-up sequences',
      'AI-personalised re-engagement messages',
      'Review generation campaigns (Google, Facebook)',
      'Birthday and anniversary automations',
      'Dashboard showing revenue attributed to follow-ups',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    imageAlt: 'Analytics dashboard',
    tag: '[CRM]',
    from: '$149/mo',
  },
  {
    id: 'bundle',
    num: '05.',
    title: 'FULL DIGITALISATION BUNDLE',
    tagline: 'From zero to fully operational.',
    desc: `You want everything working together: your website, phone system, bookings, and follow-up all integrated and running as one. That's the bundle. Built, integrated, tested, and maintained. One plan, one team, one bill.`,
    bullets: [
      'All four services integrated as one system',
      'Dedicated account manager',
      '4-hour priority support response',
      'Monthly strategy calls and proactive optimisation',
      'Cross-system analytics and revenue reporting',
    ],
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80',
    imageAlt: 'City lights at night',
    tag: '[BUNDLE]',
    from: '$599/mo',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-dark"
        style={{
          minHeight: '70vh',
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
        <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
          What we do
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
          SERVICES
        </h1>
        <p style={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 400,
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'var(--muted-dark)',
          maxWidth: '520px',
          lineHeight: 1.6,
        }}>
          Five systems that handle the work your business shouldn't be doing manually.
        </p>
      </section>

      {/* Marquee */}
      <Marquee text="Our Services" separator="·" dark={true} size="md" speed={22} />

      {/* Services detail — alternating light/dark */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={i % 2 === 0 ? 'section-light' : 'section-dark'}
          style={{
            padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)',
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            <AnimatedSection delay={0.05}>
              <span className="label" style={{
                display: 'block',
                marginBottom: '1rem',
                color: i % 2 === 0 ? 'var(--muted-light)' : 'var(--muted-dark)',
              }}>
                {svc.num}
              </span>
              <h2 style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 56px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.0,
                textTransform: 'uppercase',
                color: i % 2 === 0 ? 'var(--black)' : 'var(--white)',
                marginBottom: '0.75rem',
              }}>
                {svc.title}
              </h2>
              <p style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(16px, 2vw, 20px)',
                color: i % 2 === 0 ? 'var(--muted-light)' : 'var(--muted-dark)',
                marginBottom: '1.5rem',
              }}>
                {svc.tagline}
              </p>
              <p style={{
                fontSize: '15px',
                lineHeight: 1.75,
                color: i % 2 === 0 ? 'var(--muted-light)' : 'var(--muted-dark)',
                marginBottom: '2rem',
              }}>
                {svc.desc}
              </p>
              <ul style={{ marginBottom: '2rem' }}>
                {svc.bullets.map((b, bi) => (
                  <li key={bi} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '8px 0',
                    borderBottom: `1px solid ${i % 2 === 0 ? 'var(--border-light)' : 'var(--border-dark)'}`,
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '14px',
                    color: i % 2 === 0 ? 'rgba(0,0,0,0.65)' : 'var(--muted-dark)',
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>✦</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className={i % 2 === 0 ? 'cta-btn-light' : 'cta-btn'}>
                  Get started →
                </Link>
                <span style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: i % 2 === 0 ? 'var(--muted-light)' : 'var(--muted-dark)',
                  letterSpacing: '0.05em',
                }}>
                  from {svc.from}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'} delay={0.2}>
              <div className="img-hover" style={{
                borderRadius: '4px',
                border: `1px solid ${i % 2 === 0 ? 'var(--border-light)' : 'var(--border-dark)'}`,
                height: '420px',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.image} alt={svc.imageAlt} style={{ opacity: i % 2 === 0 ? 1 : 0.7 }} />
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-dark" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem)', textAlign: 'center' }}>
        <AnimatedSection>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--white)',
            marginBottom: '1rem',
          }}>
            Not sure where to start?
          </h2>
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            color: 'var(--muted-dark)',
            marginBottom: '2.5rem',
            maxWidth: '480px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}>
            Book a free strategy call. We'll assess your setup and tell you exactly which service will have the biggest impact.
          </p>
          <Link href="/contact" className="cta-btn">
            Book a free strategy call →
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
