'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const stats = [
  { value: '500+', label: 'Automations deployed' },
  { value: '98%', label: 'Client retention rate' },
  { value: '0s', label: 'AI response time to new leads' },
  { value: '3x', label: 'Average revenue growth in 12 months' },
];

const services = [
  {
    id: 'websites',
    icon: '◈',
    title: 'Website Creation',
    desc: 'Professional shopfronts, e-commerce stores, and booking-enabled sites that convert visitors into customers.',
    from: '$299/mo',
  },
  {
    id: 'phone-ai',
    icon: '◎',
    title: 'Phone AI Automation',
    desc: 'Your AI receptionist answers calls 24/7, books appointments, handles enquiries, and never takes a sick day.',
    from: '$199/mo',
  },
  {
    id: 'bookings',
    icon: '◆',
    title: 'Automated Bookings',
    desc: 'Let clients book online around the clock. Syncs with your existing calendar. No-shows reduced automatically.',
    from: '$99/mo',
  },
  {
    id: 'crm',
    icon: '◉',
    title: 'Client Follow-up CRM',
    desc: 'Personalised sequences that re-engage past clients, remind upcoming appointments, and drive repeat business.',
    from: '$149/mo',
  },
  {
    id: 'bundle',
    icon: '◈',
    title: 'Full Digitalisation',
    desc: 'From zero to fully operational online. Everything built, integrated, and running as one cohesive system.',
    from: '$599/mo',
  },
];

const testimonials = [
  {
    quote:
      'We went from missing half our after-hours calls to capturing every single enquiry. Revenue is up 40% in four months.',
    name: 'Sarah Mitchell',
    title: 'Owner, Mitchell Hair Studio, Melbourne',
    avatar: 'SM',
  },
  {
    quote:
      'The AI phone bot handles our reservation line better than a part-time staff member. Our team can focus on the floor instead.',
    name: 'James Tran',
    title: 'Head Chef and Owner, Tran Kitchen, Sydney',
    avatar: 'JT',
  },
  {
    quote:
      "AIGA built our booking system and CRM in two weeks. We've reduced no-shows by 60% and our Google rating went from 3.8 to 4.7.",
    name: 'Priya Sharma',
    title: 'Practice Manager, Sharma Allied Health, Brisbane',
    avatar: 'PS',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: 'var(--accent)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-8 blur-3xl pointer-events-none"
          style={{ background: 'var(--accent2)' }}
        />

        {/* AIGA watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <span style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(8rem, 28vw, 28rem)',
            letterSpacing: '-0.03em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(99,102,241,0.07)',
            userSelect: 'none',
            lineHeight: 1,
          }}>
            AIGA
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
              style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: 'var(--gold)' }}
              />
              <span className="overline-muted" style={{ fontSize: '0.6rem' }}>
                AI automation for Australian businesses
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              color: 'var(--text)',
            }}
          >
            Your business,
            <br />
            <span className="grad-gold-text">running on autopilot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--muted2)',
              maxWidth: '36rem',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
            }}
          >
            AIGA builds AI-powered systems that handle your phones, bookings, website, and client follow-up.
            Professional automation without the enterprise price tag.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '999px',
                background: 'var(--grad)',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#fff',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
            >
              Book a free strategy call
            </Link>
            <Link
              href="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 28px',
                borderRadius: '999px',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--muted2)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                transition: 'all 0.2s ease',
              }}
            >
              See all services
            </Link>
          </motion.div>

          {/* Hero image — analytics dashboard, no people */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Analytics dashboard"
                width={1200}
                height={600}
                className="w-full h-auto object-cover opacity-60"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.value} delay={i * 0.1} className="text-center">
                <div
                  className="stat-number grad-text mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    color: 'var(--muted)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="overline mb-6">The reality for most small businesses</div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
                color: 'var(--text)',
              }}>
                A 3-hour response to a lead is{' '}
                <span className="grad-gold-text" style={{ fontStyle: 'italic' }}>lost business</span>
              </h2>
              <p style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: 'var(--muted2)',
                lineHeight: 1.8,
                marginBottom: '1rem',
              }}>
                Most Australian small businesses still rely on missed calls, manual bookings, and sporadic follow-ups.
                While you sleep, your competitors are capturing every lead automatically.
              </p>
              <p style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: 'var(--muted2)',
                lineHeight: 1.8,
              }}>
                AIGA changes that. We build systems that respond instantly, book automatically, and follow up persistently.
                No extra staff needed.
              </p>
              <div className="mt-8">
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
                  Fix this for my business
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                  alt="Data center infrastructure"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#060608]/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="overline mb-6">What we build</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Everything your business needs,
              <br />
              <span className="grad-text" style={{ fontStyle: 'italic' }}>done for you</span>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--muted)',
              maxWidth: '36rem',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              From your first Google review to a fully automated operation. We handle the tech so you handle the growth.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border2)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg mb-4"
                    style={{ background: 'var(--grad)', opacity: 0.9 }}
                  >
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                  }}>
                    {service.desc}
                  </p>
                  <div className="stat-number" style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>
                    From {service.from}
                  </div>
                </Link>
              </AnimatedSection>
            ))}

            {/* CTA card */}
            <AnimatedSection delay={services.length * 0.08}>
              <Link
                href="/pricing"
                className="group block h-full"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.06))',
                  border: '1px solid var(--border2)',
                  textDecoration: 'none',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div className="relative z-10">
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}>
                    See all pricing
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    marginBottom: '1rem',
                  }}>
                    Transparent pricing with monthly and one-time options. No lock-in surprises.
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5"
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--text)',
                    }}
                  >
                    View pricing
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Up and running in{' '}
              <span className="grad-gold-text">2 weeks</span>
            </h2>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--muted)',
              maxWidth: '32rem',
              margin: '0 auto',
              lineHeight: 1.8,
            }}>
              No lengthy onboarding. No technical skills required on your end. We handle the entire setup.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Strategy call',
                desc: 'We understand your business, goals, and the biggest bottlenecks. Free, no obligation.',
              },
              {
                step: '02',
                title: 'Build and integrate',
                desc: 'Our team builds your systems and connects everything. You stay focused on your business.',
              },
              {
                step: '03',
                title: 'Launch and grow',
                desc: 'Go live with full support. Your systems improve over time with ongoing optimisation.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div
                  className="p-6 rounded-2xl h-full"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="stat-number grad-text mb-4"
                    style={{ fontSize: '2.5rem', opacity: 0.55 }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              What our clients say
            </h2>
            <p style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 300,
              color: 'var(--muted)',
            }}>
              Real businesses, real results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div
                  className="p-6 rounded-2xl h-full flex flex-col"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  {/* Gold accent line */}
                  <div style={{ height: '1px', background: 'rgba(201,169,110,0.3)', marginBottom: '1.5rem' }} />
                  <blockquote
                    className="flex-1 mb-6"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontStyle: 'italic',
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      color: 'var(--muted2)',
                      lineHeight: 1.75,
                    }}
                  >
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{
                        background: 'var(--grad)',
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.6rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--text)',
                      }}>
                        {t.name}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: '0.75rem',
                        fontWeight: 300,
                        color: 'var(--muted)',
                      }}>
                        {t.title}
                      </div>
                    </div>
                  </div>
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
            <div
              className="p-12 rounded-3xl relative overflow-hidden"
              style={{
                border: '1px solid var(--border2)',
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(167,139,250,0.06))',
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-15 pointer-events-none"
                style={{ background: 'var(--grad)' }}
              />
              <h2
                className="relative z-10 mb-4"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                }}
              >
                Ready to automate your business?
              </h2>
              <p
                className="relative z-10 mb-8"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontWeight: 300,
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                }}
              >
                Book a free 30-minute strategy call. We'll map out exactly what automation can do for your specific business.
              </p>
              <Link
                href="/contact"
                className="relative z-10"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 32px',
                  borderRadius: '999px',
                  background: 'var(--grad)',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Book a free strategy call
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
