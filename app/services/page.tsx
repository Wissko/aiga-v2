'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import LiquidBackground from '@/components/LiquidBackground';
import Marquee from '@/components/Marquee';
import ParticleWaves from '@/components/ParticleWaves';

const services = [
  {
    id: 'websites',
    num: '01.',
    title: 'WEBSITE CREATION',
    tagline: 'Your digital shopfront, built to convert.',
    intro:
      'Your website is often the first impression a potential customer gets. Most small business websites are slow, outdated, and built on templates that look like every other competitor. We design modern, high-conviction websites that feel premium, load fast, and guide people toward an enquiry.',
    bullets: [
      'Custom design aligned to your brand and positioning',
      'Mobile-first builds with strong speed foundations',
      'Integrated booking and enquiry journeys',
      'E-commerce ready when your business needs it',
      'Hosting, updates, and support available on monthly plans',
    ],
    note: 'Built to feel sharp on day one and useful every day after.',
    tag: '[WEB DESIGN]',
    from: '$299/mo',
    tone: 'light',
    layout: 'split',
  },
  {
    id: 'phone-ai',
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    tagline: 'Never miss a call. Never lose an enquiry to silence.',
    intro:
      'Most small businesses lose revenue in the gaps: after hours, during busy service windows, or when no one can get to the phone. Our AI voice system answers instantly, handles common questions, qualifies the caller, and books the next step without making your operation feel robotic.',
    bullets: [
      '24/7 call answering with a tailored voice and script',
      'Appointment booking directly into your calendar',
      'Lead qualification before the enquiry hits your team',
      'Escalation paths for urgent or complex calls',
      'Transcripts and daily visibility on what is coming in',
    ],
    note: 'A front desk that stays on, even when you do not.',
    tag: '[AI VOICE]',
    from: '$199/mo',
    tone: 'dark',
    layout: 'cards',
  },
  {
    id: 'bookings',
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    tagline: 'Let clients book when they are ready, not when you are free.',
    intro:
      'Manual booking systems create friction at the exact moment people are ready to commit. We build streamlined booking flows that make scheduling simple, reduce admin, and keep your calendar moving without the back-and-forth.',
    bullets: [
      'Online booking from your website, Google, and social channels',
      'Automated reminders to reduce missed appointments',
      'Rescheduling flows that protect your time',
      'Syncing with the calendars and tools you already use',
      'Waitlist logic and cancellation fill-ins where needed',
    ],
    note: 'Less admin. Fewer drop-offs. A smoother path to confirmed revenue.',
    tag: '[SCHEDULING]',
    from: '$99/mo',
    tone: 'light',
    layout: 'split',
  },
  {
    id: 'crm',
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    tagline: 'Keep your client base warm, active, and easier to grow.',
    intro:
      'Most businesses spend all their energy chasing the next customer and underuse the people who already know, trust, and would happily return to them. We build follow-up systems that keep your brand present after the first booking and turn good service into repeat revenue.',
    bullets: [
      'Automated follow-up sequences after every enquiry or booking',
      'AI-personalised re-engagement messages for past clients',
      'Automated review request automation to build your reputation on Google',
      'Seasonal promotion and offer automations',
      'Birthday and anniversary automations',
      'Dashboard showing revenue attributed to automated follow-ups',
    ],
    note: 'A CRM that behaves more like a revenue engine than a contact list.',
    tag: '[CRM]',
    from: '$149/mo',
    tone: 'dark',
    layout: 'cards',
  },
  {
    id: 'seo-performance',
    num: '05.',
    title: 'SEO & PERFORMANCE INSIGHTS',
    tagline: 'Get found earlier. Understand what is actually driving enquiries.',
    intro:
      'Your next client is already searching, we just make sure they find you. We optimise everything behind the scenes so your site ranks, earns trust, and converts visitors into enquiries.',
    bullets: [
      'Technical SEO (Search Engine Optimisation) — We keep your site fast, clean, and built to rank across all devices',
      'On-Page optimisation — Every page is optimised so the right customers find you for the right searches',
      'Keyword & Competitor Review specific to your industry — We find the opportunities your competitors are missing and build your strategy around them',
      "Conversion Tracking — We track what visitors do on your site so you know exactly what's driving enquiries",
      'Monthly Insights and Reporting — Clear, simple reports every month showing what is working and what could be tweaked next',
    ],
    note: 'Search visibility, site health, and decision-making clarity in one layer.',
    tag: '[SEO]',
    from: '$129/mo',
    tone: 'light',
    layout: 'split',
  },
  {
    id: 'bundle',
    num: '06.',
    title: 'FULL DIGITALISATION BUNDLE',
    tagline: 'Everything connected. One system, one direction, one team.',
    intro:
      'For businesses ready to stop stitching tools together, this is the full operating layer. Website, phone system, bookings, follow-up, and performance insight are planned as a cohesive system so every piece reinforces the next.',
    bullets: [
      'Website, bookings, CRM, phone AI, and SEO aligned together',
      'Integrated journeys from first visit to repeat booking',
      'One account lead and one strategic direction',
      'Cross-system reporting on activity and revenue',
      'Priority support and ongoing optimisation',
    ],
    note: 'Best for owners who want the whole setup to finally feel intentional.',
    tag: '[BUNDLE]',
    from: '$599/mo',
    tone: 'dark',
    layout: 'cards',
  },
];

export default function ServicesPage() {
  return (
    <>
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
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
            What we do
          </p>
          <h1
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(64px, 12vw, 140px)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '2rem',
            }}
          >
            SERVICES
          </h1>
          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2vw, 22px)',
              color: 'var(--muted-dark)',
              maxWidth: '640px',
              lineHeight: 1.6,
            }}
          >
            A clear, single-column service page built around the systems that make a modern business easier to run, easier to trust, and easier to choose.
          </p>
        </div>
      </section>

      <Marquee text="Our Services" separator="·" dark={true} size="md" speed={22} />

      <section className="section-light" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell">
          <AnimatedSection>
            <div className="services-intro-grid">
              <div>
                <p className="label" style={{ marginBottom: '1rem' }}>
                  Service structure
                </p>
                <h2
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(34px, 5vw, 68px)',
                    letterSpacing: '-0.03em',
                    lineHeight: 0.95,
                    color: 'var(--black)',
                  }}
                >
                  Designed to read clearly. Built to sell clearly.
                </h2>
              </div>
              <div>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted-light)', marginBottom: '1rem' }}>
                  Instead of a noisy feature dump, each service is laid out like an offer: what it does, why it matters, and what sits inside it.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted-light)' }}>
                  The result is more editorial, more personal, and easier for a client to move through without losing the premium tone of the site.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {services.map((svc, i) => {
        const isLight = svc.tone === 'light';
        const sectionClass = isLight ? 'section-light' : 'section-dark';
        const textColor = isLight ? 'var(--black)' : 'var(--white)';
        const muted = isLight ? 'var(--muted-light)' : 'var(--muted-dark)';
        const border = isLight ? 'var(--border-light)' : 'var(--border-dark)';
        const panelBg = isLight ? 'rgba(0,0,0,0.025)' : 'rgba(255,255,255,0.03)';

        return (
          <section
            key={svc.id}
            id={svc.id}
            className={sectionClass}
            style={{
              padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)',
              borderTop: `1px solid ${border}`,
            }}
          >
            <div className="editorial-shell">
              {svc.layout === 'split' ? (
                <div className="service-sticky-grid">
                  <AnimatedSection delay={0.04}>
                    <div className="service-sticky-rail">
                      <div className="service-sticky-inner">
                        <span className="label" style={{ display: 'block', color: muted, marginBottom: '1.25rem' }}>
                          {svc.num} {svc.tag}
                        </span>
                        <h2
                          style={{
                            fontFamily: 'var(--font-logo)',
                            fontWeight: 600,
                            fontSize: 'clamp(56px, 9vw, 112px)',
                            letterSpacing: '-0.02em',
                            lineHeight: 0.9,
                            textTransform: 'uppercase',
                            color: textColor,
                            marginBottom: '1rem',
                          }}
                        >
                          {svc.title}
                        </h2>
                        <p
                          style={{
                            fontFamily: 'Satoshi, sans-serif',
                            fontWeight: 500,
                            fontSize: 'clamp(18px, 2vw, 22px)',
                            lineHeight: 1.45,
                            color: muted,
                            marginBottom: '1.5rem',
                            maxWidth: '24rem',
                          }}
                        >
                          {svc.tagline}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.12}>
                    <div className="service-sticky-content">
                      <div className="service-panel" style={{ background: panelBg, borderColor: border }}>
                        <p style={{ fontSize: '15px', lineHeight: 1.8, color: muted, maxWidth: '56ch', marginBottom: '2rem' }}>{svc.intro}</p>
                        <ul className="service-bullet-list service-bullet-list-featured">
                          {svc.bullets.map((bullet) => (
                            <li key={bullet} style={{ borderBottom: `1px solid ${border}`, color: textColor }}>
                              <span style={{ color: 'var(--accent)' }}>✦</span>
                              <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 500, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1 }}>
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="service-panel-footer" style={{ borderTop: `1px solid ${border}` }}>
                          <p style={{ color: muted }}>{svc.note}</p>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="/contact" className={isLight ? 'cta-btn-light' : 'cta-btn'}>
                              Get started →
                            </Link>
                            <span className="label" style={{ color: muted }}>
                              from {svc.from}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ) : (
                <div>
                  <AnimatedSection delay={0.04}>
                    <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', maxWidth: '760px' }}>
                      <span className="label" style={{ display: 'block', color: muted, marginBottom: '1.25rem' }}>
                        {svc.num} {svc.tag}
                      </span>
                      <h2
                        style={{
                          fontFamily: 'Satoshi, sans-serif',
                          fontWeight: 700,
                          fontSize: 'clamp(30px, 4.5vw, 58px)',
                          letterSpacing: '-0.03em',
                          lineHeight: 0.98,
                          textTransform: 'uppercase',
                          color: textColor,
                          marginBottom: '1rem',
                        }}
                      >
                        {svc.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: 'Satoshi, sans-serif',
                          fontWeight: 500,
                          fontSize: 'clamp(18px, 2vw, 22px)',
                          lineHeight: 1.45,
                          color: muted,
                          marginBottom: '1rem',
                        }}
                      >
                        {svc.tagline}
                      </p>
                      <p style={{ fontSize: '15px', lineHeight: 1.8, color: muted }}>{svc.intro}</p>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.12}>
                    <div className="service-card-grid">
                      {svc.bullets.map((bullet) => (
                        <div key={bullet} className="service-card" style={{ background: panelBg, borderColor: border }}>
                          <span style={{ color: 'var(--accent)', fontSize: '18px', lineHeight: 1 }}>✦</span>
                          <p style={{ color: muted }}>{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.16}>
                    <div className="service-meta-row" style={{ borderTop: `1px solid ${border}` }}>
                      <p style={{ color: muted }}>{svc.note}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/contact" className={isLight ? 'cta-btn-light' : 'cta-btn'}>
                          Get started →
                        </Link>
                        <span className="label" style={{ color: muted }}>
                          from {svc.from}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="section-dark" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="editorial-shell" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 64px)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: 'var(--white)',
                marginBottom: '1rem',
              }}
            >
              Not sure where to start?
            </h2>
            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '16px',
                color: 'var(--muted-dark)',
                margin: '0 auto 2.5rem',
                maxWidth: '520px',
                lineHeight: 1.7,
              }}
            >
              Book a free strategy call. We will look at your setup, identify the gaps, and tell you which service will make the biggest difference first.
            </p>
            <Link href="/contact" className="cta-btn">
              Book a free strategy call →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
