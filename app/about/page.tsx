'use client';
import LiquidBackground from '@/components/LiquidBackground';
import ParticleWaves from '@/components/ParticleWaves';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const values = [
  {
    num: '01.',
    title: 'Accessible by design',
    desc: 'AI automation should not be reserved for companies with dedicated tech teams. We build systems that any small business owner can understand and rely on.',
  },
  {
    num: '02.',
    title: 'Results, not reports',
    desc: 'We measure success by what shows up in your bank account, your calendar, and your review count. Not vanity metrics.',
  },
  {
    num: '03.',
    title: 'Done for you',
    desc: 'You run your business. We run your systems. No training manuals, no config spreadsheets. We set it up, you benefit.',
  },
  {
    num: '04.',
    title: 'Built to last',
    desc: 'We use reliable, proven platforms. No fragile custom code that breaks when someone leaves. Systems that work whether we are involved or not.',
  },
];

const techPartners = [
  'n8n', 'Make', 'Vapi.ai', 'ElevenLabs', 'Cal.com', 'Calendly', 'HubSpot', 'Airtable', 'Next.js', 'Webflow',
];

export default function AboutPage() {
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
        <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
          Who we are
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
          ABOUT
        </h1>
        <p style={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 400,
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'var(--muted-dark)',
          maxWidth: '560px',
          lineHeight: 1.6,
        }}>
          Built for the businesses that keep Australia running.
        </p>
      </section>

      {/* Marquee */}
      <Marquee text="Our Story" separator="·" dark={true} size="md" speed={25} />

      {/* Mission */}
      <section
        className="section-light"
        style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'start',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 64px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: 'var(--black)',
              marginBottom: '2rem',
            }}>
              We exist to make AI work for the businesses that need it most.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--muted-light)', marginBottom: '1.5rem' }}>
              AIGA was built with a straightforward mission: make the automation tools that large corporations use accessible to small businesses across Australia.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--muted-light)', marginBottom: '1.5rem' }}>
              We watched restaurants, salons, health clinics, and retail stores struggle not because they weren't good at what they did, but because the systems supporting their business were broken. Missed calls. Manual bookings. No follow-up. Websites built years ago that no longer served them.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--muted-light)', marginBottom: '2rem' }}>
              Every system we build is designed to work without requiring you to become a tech expert. You run your business. We run everything that supports it.
            </p>
            <Link href="/contact" className="cta-btn-light">
              Partner with us →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-dark"
        style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}
      >
        <AnimatedSection>
          <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
            What we believe
          </p>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--white)',
            marginBottom: '4rem',
          }}>
            Our values.
          </h2>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0',
          borderTop: '1px solid var(--border-dark)',
        }}>
          {values.map((v, i) => (
            <AnimatedSection key={v.num} delay={i * 0.1}>
              <div style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderBottom: '1px solid var(--border-dark)',
                borderRight: i % 2 === 0 ? '1px solid var(--border-dark)' : 'none',
              }}>
                <span className="label" style={{ color: 'var(--muted-dark)', display: 'block', marginBottom: '1rem' }}>
                  {v.num}
                </span>
                <h3 style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1.2,
                  color: 'var(--white)',
                  marginBottom: '1rem',
                }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted-dark)' }}>
                  {v.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section
        className="section-light"
        style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}
      >
        <AnimatedSection>
          <p className="label" style={{ marginBottom: '1.5rem' }}>Tools we use</p>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--black)',
            marginBottom: '3rem',
          }}>
            Built on proven platforms.
          </h2>
        </AnimatedSection>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {techPartners.map((tech, i) => (
            <AnimatedSection key={tech} delay={i * 0.05}>
              <span style={{
                display: 'inline-block',
                padding: '10px 20px',
                border: '1px solid var(--border-light)',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: 'var(--muted-light)',
              }}>
                {tech}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-dark"
        style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}
      >
        <AnimatedSection>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 80px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--white)',
            marginBottom: '1.5rem',
          }}>
            Ready to work together?
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'var(--muted-dark)',
            marginBottom: '2.5rem',
            maxWidth: '460px',
            lineHeight: 1.7,
          }}>
            Free strategy call. No pressure. We'll tell you honestly what would make the biggest difference for your business.
          </p>
          <Link href="/contact" className="cta-btn">
            Book a free call →
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
