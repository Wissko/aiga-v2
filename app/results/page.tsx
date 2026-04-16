'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const featuredResult = {
  title: 'A stronger first impression from the first scroll',
  summary:
    'For service businesses, credibility is often lost before the conversation even starts. We rebuild the digital layer so the business feels more established, easier to trust, and easier to contact.',
  outcomes: ['Sharper positioning', 'Cleaner enquiry path', 'More confident presentation'],
};

const resultBlocks = [
  {
    number: '01',
    title: 'Reduced booking friction',
    text: 'Booking journeys are simplified so interest does not get lost between curiosity and action.',
  },
  {
    number: '02',
    title: 'Better repeat visibility',
    text: 'Wallet loyalty and follow-up create a clearer view of who returns, when, and why.',
  },
  {
    number: '03',
    title: 'Stronger perceived quality',
    text: 'The brand feels more structured before a call, visit, or quote request ever happens.',
  },
  {
    number: '04',
    title: 'Less admin drag',
    text: 'Clearer systems reduce manual handling, scattered follow-up, and avoidable operational noise.',
  },
];

const scenarios = [
  {
    label: 'Website',
    result: 'Built to look established from the first seconds.',
  },
  {
    label: 'Bookings',
    result: 'Designed to remove hesitation and back-and-forth.',
  },
  {
    label: 'Follow-up',
    result: 'Structured to bring clients back without pressure.',
  },
];

export default function ResultsPage() {
  return (
    <>
      <section className="section-dark page-hero-shell" style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)' }}>
        <div className="page-hero-gradient" />
        <div className="editorial-shell" style={{ position: 'relative', zIndex: 2 }}>
          <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Results</p>
          <h1 className="heading-display" style={{ fontSize: 'clamp(72px, 12vw, 150px)', color: 'var(--white)', marginBottom: '1.5rem', maxWidth: '9.5em' }}>
            Clearer systems. Better outcomes.
          </h1>
          <p className="page-hero-copy">
            The work is designed to make a business feel easier to trust, easier to choose, and easier to run.
          </p>
        </div>
      </section>

      <Marquee text="Credibility · Retention · Conversion · Clarity" separator="·" dark={true} size="md" speed={24} />

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <AnimatedSection>
            <div>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Featured shift</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 74px)', color: 'var(--black)', marginBottom: '1rem' }}>
                {featuredResult.title}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <div className="premium-card premium-card-light">
              <p style={{ color: 'var(--muted-light)', marginBottom: '1.25rem' }}>{featuredResult.summary}</p>
              <ul className="premium-list">
                {featuredResult.outcomes.map((item) => (
                  <li key={item}><span className="premium-dot" /><span style={{ color: 'var(--black)' }}>{item}</span></li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2">
          {resultBlocks.map((block, index) => (
            <AnimatedSection key={block.title} delay={index * 0.06}>
              <article className="premium-card premium-card-dark" style={{ height: '100%' }}>
                <span className="premium-number" style={{ display: 'block', marginBottom: '1rem' }}>{block.number}</span>
                <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--white)', marginBottom: '0.75rem' }}>{block.title}</h3>
                <p style={{ color: 'var(--muted-dark)' }}>{block.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-3">
          {scenarios.map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 0.06}>
              <article className="premium-card premium-card-light" style={{ height: '100%' }}>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>{item.label}</p>
                <h3 className="heading-card" style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--black)', marginBottom: '0.75rem' }}>{item.result}</h3>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Next move</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 5vw, 72px)', color: 'var(--white)', marginBottom: '1rem' }}>
              Ready to build something more structured?
            </h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '36rem', marginBottom: '1.75rem' }}>
              Start with a strategy call and we will map the clearest first move for the business.
            </p>
            <Link href="/contact" className="cta-btn">Book a strategy call</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
