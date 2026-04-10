'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const principles = [
  {
    number: '01',
    title: 'Clarity before complexity',
    text: 'We design systems so owners can understand what is happening, what is working, and what the next step should be.',
  },
  {
    number: '02',
    title: 'Premium does not mean excessive',
    text: 'The visual and operational goal is composure: cleaner journeys, stronger trust, and fewer moving parts that confuse people.',
  },
  {
    number: '03',
    title: 'Technology should support reputation',
    text: 'Every touchpoint should reinforce the quality of the business behind it, not undermine it with friction or inconsistency.',
  },
];

const partners = ['Next.js', 'n8n', 'Vapi', 'ElevenLabs', 'Calendly', 'HubSpot', 'Airtable', 'Stripe'];

export default function AboutPage() {
  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>About</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '10.25em' }}>A digital studio for businesses that deserve better systems.</h1>
          <p className="page-hero-copy">
            The same crocodile leather image now anchors this hero too, so the studio story inherits the same luxury texture, darker depth, and calm readability as the rest of the premium pages.
          </p>
        </div>
      </section>

      <Marquee text="Strategy · Systems · Visibility · Conversion" separator="·" dark={true} size="md" speed={25} />

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>What the studio stands for</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 74px)', color: 'var(--black)', marginBottom: '1.25rem' }}>
                Good businesses should not look disorganised online.
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div style={{ maxWidth: '36rem', justifySelf: 'end' }}>
              <p style={{ color: 'var(--muted-light)', marginBottom: '1rem' }}>
                AIGA builds the systems that sit between reputation and revenue: the website, the response layer, the booking flow, and the follow-up rhythm.
              </p>
              <p style={{ color: 'var(--muted-light)', marginBottom: '1.75rem' }}>
                We care about premium presentation because it shapes trust. We care about automation because it protects time. The strongest setup does both.
              </p>
              <Link href="/services" className="cta-btn-light">See the service model</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-3">
          {principles.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.08}>
              <article className="premium-card premium-card-dark" style={{ height: '100%' }}>
                <span className="premium-number" style={{ display: 'block', marginBottom: '1rem' }}>{item.number}</span>
                <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--white)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--muted-dark)' }}>{item.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'center' }}>
          <AnimatedSection>
            <div className="premium-card premium-card-light">
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>How we work</p>
              <ul className="premium-list">
                {[
                  'We audit the current setup before suggesting anything.',
                  'We simplify the client journey rather than adding layers for the sake of automation.',
                  'We build with platforms that are stable, maintainable, and realistic for growing businesses.',
                ].map((item) => (
                  <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Platform stack</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 68px)', color: 'var(--black)', marginBottom: '1rem' }}>Built on proven tools, arranged with intent.</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {partners.map((partner) => (
                  <span key={partner} className="premium-card premium-card-light" style={{ padding: '0.8rem 1rem', borderRadius: '999px' }}>{partner}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Start here</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: 'var(--white)', marginBottom: '1rem' }}>If the business is strong, the digital layer should feel equally considered.</h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '36rem', marginBottom: '1.75rem' }}>
              We can assess where the current experience is leaking trust or losing efficiency, then recommend the clearest next move.
            </p>
            <Link href="/contact" className="cta-btn">Book a strategy call</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
