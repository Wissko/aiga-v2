'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedBackground from '@/components/AnimatedBackground';
import CountUp from '@/components/CountUp';
import TechMarquee from '@/components/TechMarquee';
import {
  WebsiteIcon,
  PhoneAIIcon,
  BookingsIcon,
  CRMIcon,
  BundleIcon,
} from '@/components/ServiceIcon';

const C = "'Cormorant Garamond', Georgia, serif";
const J = "'Plus Jakarta Sans', system-ui, sans-serif";

const stats = [
  { value: '500+', label: 'Automations deployed' },
  { value: '98%', label: 'Client retention rate' },
  { value: '0s', label: 'AI response time to new leads' },
  { value: '3x', label: 'Average revenue growth in 12 months' },
];

const services = [
  {
    id: 'websites',
    icon: <WebsiteIcon />,
    title: 'Website Creation',
    desc: 'Professional shopfronts, e-commerce stores, and booking-enabled sites that convert visitors into customers.',
    from: '$299/mo',
  },
  {
    id: 'phone-ai',
    icon: <PhoneAIIcon />,
    title: 'Phone AI Automation',
    desc: 'Your AI receptionist answers calls 24/7, books appointments, handles enquiries, and never takes a sick day.',
    from: '$199/mo',
  },
  {
    id: 'bookings',
    icon: <BookingsIcon />,
    title: 'Automated Bookings',
    desc: 'Let clients book online around the clock. Syncs with your existing calendar. No-shows reduced automatically.',
    from: '$99/mo',
  },
  {
    id: 'crm',
    icon: <CRMIcon />,
    title: 'Client Follow-up CRM',
    desc: 'Personalised sequences that re-engage past clients, remind upcoming appointments, and drive repeat business.',
    from: '$149/mo',
  },
  {
    id: 'bundle',
    icon: <BundleIcon />,
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
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />

        {/* AIGA watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <span style={{
            fontFamily: C,
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(9rem, 30vw, 32rem)',
            letterSpacing: '-0.03em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(200,169,110,0.05)',
            userSelect: 'none',
            lineHeight: 1,
          }}>
            AIGA
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10"
              style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}
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
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: C,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              color: 'var(--text)',
            }}
          >
            Grow smarter.
            <br />
            <span className="grad-gold-text">Automate everything.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{
              fontFamily: J,
              fontWeight: 300,
              fontSize: '1.05rem',
              color: 'var(--muted2)',
              maxWidth: '36rem',
              margin: '0 auto 3rem',
              lineHeight: 1.85,
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
                padding: '14px 32px',
                borderRadius: '999px',
                background: 'var(--gold)',
                fontFamily: J,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#090806',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
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
                padding: '14px 32px',
                borderRadius: '999px',
                fontFamily: J,
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--muted2)',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border2)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted2)';
              }}
            >
              See all services
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-24 relative mx-auto max-w-5xl"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#090806] via-transparent to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Analytics dashboard"
                width={1200}
                height={600}
                className="w-full h-auto object-cover opacity-50"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.value} delay={i * 0.1} className="text-center">
                <div
                  className="grad-gold-text mb-2"
                  style={{
                    fontFamily: C,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: 1,
                  }}
                >
                  <CountUp value={stat.value} duration={1500} />
                </div>
                <div
                  style={{
                    fontFamily: J,
                    fontSize: '0.78rem',
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

      {/* ── Tech marquee ── */}
      <TechMarquee />

      {/* ── The problem ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="overline mb-6">The reality for most small businesses</div>
              <h2 style={{
                fontFamily: C,
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                marginBottom: '1.5rem',
                color: 'var(--text)',
              }}>
                A 3-hour response to a lead is{' '}
                <span className="grad-gold-text">lost business</span>
              </h2>
              <p style={{ fontFamily: J, fontWeight: 300, fontSize: '0.95rem', color: 'var(--muted2)', lineHeight: 1.85, marginBottom: '1rem' }}>
                Most Australian small businesses still rely on missed calls, manual bookings, and sporadic follow-ups.
                While you sleep, your competitors are capturing every lead automatically.
              </p>
              <p style={{ fontFamily: J, fontWeight: 300, fontSize: '0.95rem', color: 'var(--muted2)', lineHeight: 1.85 }}>
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
                    padding: '12px 28px',
                    borderRadius: '999px',
                    background: 'var(--gold)',
                    fontFamily: J,
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#090806',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
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
                  className="w-full h-auto object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#090806]/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Services overview ── */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <div className="overline mb-6">What we build</div>
            <h2 style={{
              fontFamily: C,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Everything your business needs,
              <br />
              <span className="grad-gold-text">done for you</span>
            </h2>
            <p style={{
              fontFamily: J,
              fontWeight: 300,
              fontSize: '0.95rem',
              color: 'var(--muted)',
              maxWidth: '36rem',
              margin: '0 auto',
              lineHeight: 1.85,
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
                    padding: '1.75rem',
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
                  {/* Animated icon */}
                  <div
                    className="mb-5 flex items-center justify-center"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '12px',
                      background: 'rgba(200,169,110,0.06)',
                      border: '1px solid rgba(200,169,110,0.12)',
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontFamily: C,
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontFamily: J,
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.75,
                    marginBottom: '1.25rem',
                  }}>
                    {service.desc}
                  </p>
                  <div style={{
                    fontFamily: J,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--gold)',
                    letterSpacing: '0.05em',
                  }}>
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
                  padding: '1.75rem',
                  borderRadius: '1rem',
                  background: 'rgba(200,169,110,0.04)',
                  border: '1px solid var(--border2)',
                  textDecoration: 'none',
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,169,110,0.07)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(200,169,110,0.04)'; }}
              >
                <h3 style={{ fontFamily: C, fontWeight: 600, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                  See all pricing
                </h3>
                <p style={{ fontFamily: J, fontWeight: 300, fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  Transparent pricing with monthly and one-time options. No lock-in surprises.
                </p>
                <div
                  className="inline-flex items-center gap-1.5"
                  style={{
                    fontFamily: J,
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                  }}
                >
                  View pricing
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{
              fontFamily: C,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              Up and running in <span className="grad-gold-text">2 weeks</span>
            </h2>
            <p style={{ fontFamily: J, fontWeight: 300, fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.85 }}>
              No lengthy onboarding. No technical skills required on your end. We handle the entire setup.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Strategy call', desc: 'We understand your business, goals, and the biggest bottlenecks. Free, no obligation.' },
              { step: '02', title: 'Build and integrate', desc: 'Our team builds your systems and connects everything. You stay focused on your business.' },
              { step: '03', title: 'Launch and grow', desc: 'Go live with full support. Your systems improve over time with ongoing optimisation.' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="p-7 rounded-2xl h-full" style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                  <div
                    className="grad-gold-text mb-4"
                    style={{ fontFamily: C, fontStyle: 'italic', fontWeight: 300, fontSize: '2.75rem', opacity: 0.5, lineHeight: 1 }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{ fontFamily: C, fontWeight: 600, fontSize: '1.15rem', color: 'var(--text)', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: J, fontWeight: 300, fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 style={{
              fontFamily: C,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '1rem',
              color: 'var(--text)',
            }}>
              What our clients say
            </h2>
            <p style={{ fontFamily: J, fontWeight: 300, color: 'var(--muted)' }}>
              Real businesses, real results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl h-full flex flex-col"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  <div style={{ height: '1px', background: 'rgba(200,169,110,0.25)', marginBottom: '1.5rem' }} />
                  <blockquote
                    className="flex-1 mb-6"
                    style={{
                      fontFamily: C,
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '1.05rem',
                      color: 'var(--muted2)',
                      lineHeight: 1.75,
                    }}
                  >
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: 'rgba(200,169,110,0.15)',
                        border: '1px solid var(--border2)',
                        fontFamily: J,
                        fontSize: '0.55rem',
                        letterSpacing: '0.05em',
                        color: 'var(--gold)',
                        fontWeight: 600,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{ fontFamily: J, fontSize: '0.875rem', fontWeight: 500, color: 'var(--text)' }}>
                        {t.name}
                      </div>
                      <div style={{ fontFamily: J, fontSize: '0.75rem', fontWeight: 300, color: 'var(--muted)' }}>
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

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div
              className="p-14 rounded-3xl relative overflow-hidden"
              style={{
                border: '1px solid var(--border2)',
                background: 'rgba(200,169,110,0.04)',
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-28 blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'var(--gold)' }}
              />
              <h2
                className="relative z-10 mb-4"
                style={{
                  fontFamily: C,
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)',
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                }}
              >
                Ready to automate your business?
              </h2>
              <p
                className="relative z-10 mb-8"
                style={{ fontFamily: J, fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, maxWidth: '32rem', margin: '0 auto 2rem' }}
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
                  padding: '14px 36px',
                  borderRadius: '999px',
                  background: 'var(--gold)',
                  fontFamily: J,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#090806',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
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
