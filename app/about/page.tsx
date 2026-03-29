'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const values = [
  {
    title: 'Accessible by design',
    desc: 'AI automation should not be reserved for companies with dedicated tech teams. We build systems that any small business owner can understand and rely on.',
  },
  {
    title: 'Results, not reports',
    desc: 'We measure success by what shows up in your bank account, your calendar, and your review count. Not vanity metrics.',
  },
  {
    title: 'Done for you',
    desc: 'You run your business. We run your systems. No training manuals, no config spreadsheets. We set it up, you benefit.',
  },
  {
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
      {/* Header */}
      <section className="pt-32 pb-20" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overline mb-6">About AIGA</div>
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
                Built for the businesses
                <br />
                <span className="grad-gold-text">that keep Australia running</span>
              </h1>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '1.05rem',
                color: 'var(--muted2)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}>
                AIGA was founded with one observation: the technology that makes large companies highly efficient is completely inaccessible to most small businesses.
                Not because the tools do not exist, but because no one builds, integrates, and maintains them at a price that makes sense.
              </p>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: 'var(--muted)',
                lineHeight: 1.8,
              }}>
                We fix that. AIGA brings enterprise-grade automation to restaurants, salons, clinics, trades, and retailers across Australia.
                Affordable, done-for-you, and built to actually work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                  alt="Data center infrastructure"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover opacity-70"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#090806]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder / Origin story — no portrait, abstract visual */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80"
                  alt="Abstract technology"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090806]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '1.35rem',
                    color: 'var(--text)',
                  }}>
                    Yose
                  </div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                    letterSpacing: '0.1em',
                  }}>
                    Founder, AIGA
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="overline mb-6">The founder</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: 'var(--text)',
              }}>
                From frustration to{' '}
                <span className="grad-gold-text" style={{ fontStyle: 'italic' }}>automation</span>
              </h2>
              <div className="space-y-4">
                {[
                  'AIGA started after watching small business owners struggle with the same problems: missed calls, manual bookings, no follow-up system, and websites built in 2015.',
                  'The tools to fix these problems existed. Vapi, n8n, Cal.com, HubSpot — powerful platforms used by tech companies to operate at scale. But no one was packaging them in a way that a restaurant owner or salon manager could actually use without hiring a full-time tech person.',
                  'That is the gap AIGA fills. We are not a software company. We are the team that builds, connects, and maintains the systems that keep your business running smoothly, so you can focus on what you actually do well.',
                ].map((text, i) => (
                  <p key={i} style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.95rem',
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                  }}>
                    {text}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 24px',
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
                  Book a call with us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}>
              How we operate
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  {/* Gold accent */}
                  <div style={{ height: '1px', background: 'rgba(201,169,110,0.3)', marginBottom: '1.25rem' }} />
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                  }}>
                    {v.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Tools we build with
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 300,
              color: 'var(--muted)',
              maxWidth: '36rem',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              We use best-in-class, battle-tested platforms. No experiments on your business.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {techPartners.map((tech) => (
                <span
                  key={tech}
                  className="stat-number"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    color: 'var(--muted)',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    letterSpacing: '0.05em',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                    cursor: 'default',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Automations deployed' },
              { value: '98%', label: 'Client retention' },
              { value: '2 weeks', label: 'Average go-live time' },
              { value: '100%', label: 'Australian businesses served' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.value} delay={i * 0.1} className="text-center">
                <div
                  className="stat-number grad-gold-text mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  color: 'var(--muted)',
                }}>
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Want to work with us?
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 300,
              color: 'var(--muted)',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}>
              Start with a free strategy call. No sales pressure, just an honest conversation about what would actually help your business.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '999px',
                background: 'var(--gold)',
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: '0.75rem',
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
