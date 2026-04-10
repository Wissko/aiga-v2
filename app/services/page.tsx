'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const services = [
  {
    id: 'websites',
    number: '01',
    title: 'Website Creation',
    summary: 'Fast, premium websites designed to establish trust quickly and move visitors toward a clear next step.',
    why: 'For businesses that do strong work offline but still look inconsistent, dated, or generic online.',
    includes: ['Custom conversion-led design', 'Mobile-first build quality', 'Enquiry and booking pathways', 'Clean launch-ready performance setup'],
    outcome: 'Your brand feels more established, more credible, and easier to choose from the first visit.',
    tone: 'light',
  },
  {
    id: 'phone-ai',
    number: '02',
    title: 'Phone AI Automation',
    summary: 'An AI receptionist that answers immediately, handles common questions, qualifies intent, and books the next action.',
    why: 'For businesses where missed calls are equivalent to missed revenue.',
    includes: ['24/7 call answering', 'Qualification logic by service type', 'Escalation for urgent calls', 'Calendar booking or lead capture'],
    outcome: 'Your business feels responsive even when the team is busy, off-site, or closed.',
    tone: 'dark',
  },
  {
    id: 'bookings',
    number: '03',
    title: 'Automated Bookings',
    summary: 'A cleaner scheduling journey built to reduce friction, remove admin loops, and protect the calendar from unnecessary gaps.',
    why: 'For businesses that are losing conversions between interest and confirmed appointment.',
    includes: ['Website booking flows', 'Reminder sequences', 'Reschedule and cancellation logic', 'Calendar sync with existing tools'],
    outcome: 'Clients can book faster, and your team spends less time coordinating simple appointments.',
    tone: 'light',
  },
  {
    id: 'crm',
    number: '04',
    title: 'Client Follow-Up CRM',
    summary: 'Structured follow-up systems that keep past clients warm, encourage repeat bookings, and build stronger retention.',
    why: 'For businesses with a valuable client base that is not being reactivated consistently.',
    includes: ['Post-visit follow-up', 'Review requests', 'Reactivation campaigns', 'Segmented messaging journeys'],
    outcome: 'The database becomes a growth channel rather than a static contact list.',
    tone: 'dark',
  },
  {
    id: 'seo-performance',
    number: '05',
    title: 'SEO & Performance Insights',
    summary: 'Technical visibility, performance tuning, and reporting that help the right clients find you and trust the experience.',
    why: 'For businesses that need better discovery and cleaner data before they invest more heavily in growth.',
    includes: ['Technical SEO foundations', 'Core performance optimisation', 'Conversion tracking setup', 'Reporting that stays commercially useful'],
    outcome: 'Search visibility improves, site friction drops, and decisions get easier because the signal is clearer.',
    tone: 'dark',
  },
  {
    id: 'bundle',
    number: '06',
    title: 'Full Digitalisation Bundle',
    summary: 'A fully connected setup where website, calls, bookings, follow-up, and reporting are designed as one coherent system.',
    why: 'For owners who want a complete front-end and back-end digital layer instead of isolated fixes.',
    includes: ['Website and conversion path', 'Phone AI and bookings', 'CRM follow-up logic', 'Reporting and optimisation rhythm'],
    outcome: 'Your operation feels more premium, more organised, and much easier to scale with confidence.',
    tone: 'light',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Services</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '10.5em' }}>Built around clear business outcomes.</h1>
          <p className="page-hero-copy">
            Each offer now sits on the same luxury visual language as the home hero, using the crocodile leather image as the real base so the page feels premium, coherent, and immediately readable.
          </p>
        </div>
      </section>

      <Marquee text="Website · AI Reception · Bookings · CRM · Digital Systems" separator="·" dark={true} size="md" speed={22} />

      <section className="section-light" style={{ padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>How to read this</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--black)' }}>
                Less noise. Better hierarchy. Faster understanding.
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="premium-card premium-card-light">
              <p style={{ color: 'var(--muted-light)', marginBottom: '0.85rem' }}>
                Each offer now follows the same editorial structure so a prospect can scan it in seconds without guessing what is actually being delivered.
              </p>
              <ul className="premium-list">
                {['What the service is', 'Why a business buys it', 'What sits inside the offer', 'What result to expect'].map((item) => (
                  <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, index) => {
        const light = service.tone === 'light';
        const text = light ? 'var(--black)' : 'var(--white)';
        const muted = light ? 'var(--muted-light)' : 'var(--muted-dark)';
        const border = light ? 'var(--border-light)' : 'var(--border-dark)';
        const panelBg = light ? 'rgba(255,255,255,0.58)' : 'rgba(255,255,255,0.03)';

        return (
          <section key={service.id} id={service.id} className={light ? 'section-light service-band' : 'section-dark service-band'} style={{ padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 5rem)', borderTopColor: border }}>
            <div className="editorial-shell service-layout">
              <AnimatedSection delay={0.04}>
                <div>
                  <span className="premium-number" style={{ display: 'block', marginBottom: '1rem' }}>{service.number}</span>
                  <h2 className="heading-section" style={{ fontSize: 'clamp(42px, 6vw, 82px)', color: text, marginBottom: '1rem' }}>{service.title}</h2>
                  <p style={{ fontSize: '18px', lineHeight: 1.6, color: muted, maxWidth: '32rem', marginBottom: '1.5rem' }}>{service.summary}</p>
                  <div className={light ? 'premium-card premium-card-light' : 'premium-card premium-card-dark'}>
                    <p className="premium-kicker" style={{ color: light ? 'var(--accent)' : 'var(--accent)', marginBottom: '0.5rem' }}>Why clients choose this</p>
                    <p style={{ color: text }}>{service.why}</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="service-panel" style={{ borderColor: border, background: panelBg }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.6rem' }}>Included</p>
                    <div className="service-feature-grid">
                      {service.includes.map((item) => (
                        <div key={item} className="service-feature-card" style={{ borderColor: border, background: light ? 'rgba(255,255,255,0.64)' : 'rgba(255,255,255,0.02)' }}>
                          <span className="premium-dot" style={{ marginBottom: '1rem', display: 'block' }} />
                          <p style={{ color: text, lineHeight: 1.65 }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ paddingTop: '1.5rem', borderTop: `1px solid ${border}`, display: 'grid', gap: '1.25rem' }}>
                    <div>
                      <p className="premium-kicker" style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Expected outcome</p>
                      <p style={{ color: muted }}>{service.outcome}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link href="/contact" className={light ? 'cta-btn-light' : 'cta-btn'}>Book a strategy call</Link>
                      {index < services.length - 1 ? <Link href={`#${services[index + 1].id}`} className="link-arrow">Next service</Link> : <Link href="/contact" className="link-arrow">Discuss the full scope</Link>}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        );
      })}

      <section className="section-dark" style={{ padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Unsure where to begin</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--white)', marginBottom: '1rem' }}>We can map the right first move with you.</h2>
            <p style={{ maxWidth: '36rem', color: 'var(--muted-dark)', marginBottom: '1.8rem' }}>
              If you are deciding between calls, bookings, CRM, or a full build, start with the strategy call. We will identify the highest-value bottleneck before recommending anything.
            </p>
            <Link href="/contact" className="cta-btn">Book a free strategy call</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
