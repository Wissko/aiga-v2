'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import CountUp from '@/components/CountUp';
import Marquee from '@/components/Marquee';
import LiquidBackground from '@/components/LiquidBackground';
import ParticleWaves from '@/components/ParticleWaves';

const services = [
  {
    num: '01.',
    title: 'WEBSITE CREATION',
    desc: 'Your website is often the first impression a customer gets. We build fast, modern, conversion-focused sites tailored to your business.',
    tag: '[WEB DESIGN]',
    href: '/services#websites',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    imageAlt: 'Web interface on dark screen',
  },
  {
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    desc: 'Your AI receptionist answers calls 24/7, books appointments, handles enquiries, and never takes a sick day.',
    tag: '[AI VOICE]',
    href: '/services#phone-ai',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imageAlt: 'Circuit board technology abstract',
  },
  {
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    desc: 'Let clients book online around the clock. Syncs with your existing calendar. No-shows reduced automatically.',
    tag: '[SCHEDULING]',
    href: '/services#bookings',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
    imageAlt: 'Technology interface abstract',
  },
  {
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    desc: 'Personalised sequences that re-engage past clients, remind upcoming appointments, and drive repeat business.',
    tag: '[CRM]',
    href: '/services#crm',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Analytics dashboard',
  },
  {
    num: '05.',
    title: 'FULL DIGITALISATION BUNDLE',
    desc: 'From zero to fully operational online. Everything built, integrated, and running as one cohesive system.',
    tag: '[BUNDLE]',
    href: '/services#bundle',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    imageAlt: 'City lights at night',
  },
];

const faqs = [
  {
    num: '01.',
    q: "I'm not sure I need AI automation yet.",
    a: "Most business owners feel the pain before they name it: missed calls, double bookings, clients that go quiet, too much admin. If any of that sounds familiar, you're already losing revenue that automation would capture. We offer a free strategy call to assess your situation honestly.",
  },
  {
    num: '02.',
    q: "How technical do I need to be?",
    a: "Not technical at all. We handle everything: setup, configuration, integration, testing, and training. You get a system that works. You don't need to understand how it works to benefit from it.",
  },
  {
    num: '03.',
    q: "What if I already have systems in place?",
    a: "We work with what you have. Our tools integrate with most booking platforms, calendars, CRMs, and phone systems. If a replacement would genuinely serve you better, we'll tell you why and make the transition smooth.",
  },
  {
    num: '04.',
    q: "I found a cheaper option online.",
    a: "There are plenty of DIY tools out there. What they don't include: setup, integration, customisation, support, and the knowledge of what actually works for Australian small businesses. We're not just software: we're implementation and results.",
  },
  {
    num: '05.',
    q: "How long does implementation take?",
    a: "Most clients are live within two weeks. Complex setups with full integration across multiple systems can take up to four weeks. We set clear timelines upfront and stick to them.",
  },
  {
    num: '06.',
    q: "Will you support us after launch?",
    a: "Yes. Monthly plans include ongoing support, updates, and monitoring. We don't disappear after go-live. You'll have a real contact who knows your setup and responds within hours.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section
        className="section-dark"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid texture */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }} />

        {/* Liquid WebGL background — base layer */}
        <LiquidBackground />
        {/* Particle waves — overlay layer */}
        <ParticleWaves />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* H1 — TO BE SEEN split typographique */}
          <h1 style={{ margin: '0 0 1.5rem', lineHeight: 1 }}>
            {/* "to be" — murmure */}
            <span style={{
              display: 'block',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(14px, 2.2vw, 26px)',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.38)',
              marginBottom: '0.2em',
            }}>
              to be
            </span>
            {/* "SEEN" — révélation */}
            <span style={{
              display: 'block',
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(90px, 18vw, 220px)',
              letterSpacing: '-0.04em',
              lineHeight: 0.82,
              color: 'var(--white)',
            }}>
              Seen.
            </span>
          </h1>

          {/* Bottom row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
          }}>
            {/* Left: subtitle + tagline */}
            <div>
              <p style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2vw, 20px)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--muted-dark)',
                lineHeight: 1.4,
                marginBottom: '1.5rem',
              }}>
                Digital Presence<br />for Australian Businesses
              </p>
              <p style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2.2vw, 22px)',
                color: 'var(--white)',
                lineHeight: 1.5,
                maxWidth: '460px',
                marginBottom: '2rem',
              }}>
                We build the kind of brand presence that converts interest into loyalty.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="cta-btn">
                  Book a free strategy call →
                </Link>
                <Link href="/services" className="cta-btn">
                  Our services
                </Link>
              </div>
            </div>

            {/* Right: meta */}
            <p className="label" style={{ color: 'var(--muted-dark)' }}>
              Brisbane, Australia
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Marquee ── */}
      <Marquee text="AI AUTOMATION" separator="·" dark={true} size="md" speed={20} />

      {/* ── Section 3: Statement editorial ── */}
      <section
        className="section-light"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <AnimatedSection>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(28px, 4vw, 52px)',
            letterSpacing: '-0.01em',
            lineHeight: 1.15,
            color: 'var(--black)',
            marginBottom: '3rem',
            maxWidth: '800px',
          }}>
            Hi. We're To Be Seen. We build the brand presence exceptional businesses deserve.
          </h2>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          maxWidth: '900px',
        }}>
          <AnimatedSection delay={0.1}>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--muted-light)' }}>
              We're an AI automation agency built for Australian small businesses: restaurants, salons, clinics, retail, and trades. We take the systems that large companies use to scale and make them accessible, affordable, and genuinely useful for the businesses that keep our communities running.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--muted-light)' }}>
              No jargon. No endless onboarding docs. No disappearing after launch. Just systems that work, measurable results, and a team that's invested in your growth as much as you are.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/services" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'var(--black)',
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '14px'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '8px'; }}
              >
                Our services <span style={{ color: 'var(--accent)', filter: 'brightness(0.7)' }}>✦</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 4: Stats ── */}
      <section
        className="section-dark"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {[
            { value: '500+', label: 'Automations deployed' },
            { value: '98%', label: 'Client retention rate' },
            { value: '3x', label: 'Average revenue growth' },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div>
                <div className="stat-number">
                  <CountUp value={stat.value} duration={1500} />
                </div>
                <p className="stat-label">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Section 5: Services ── */}
      <section
        className="section-light"
        style={{ padding: '0 0 clamp(4rem, 8vw, 8rem)' }}
      >
        <Marquee text="Our Services" separator="·" dark={false} size="md" speed={25} />

        <div style={{ padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 5rem) 0' }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 6vw, 80px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.0,
              color: 'var(--black)',
              marginBottom: '3rem',
            }}>
              Everything your<br />business needs.
            </h2>
          </AnimatedSection>

          <div style={{ borderTop: '1px solid var(--border-light)' }}>
            {services.map((svc, i) => (
              <AnimatedSection key={svc.num} delay={i * 0.07}>
                <div className="service-item">
                  <span className="service-number">{svc.num}</span>
                  <div className="service-content">
                    <h3><Link href={svc.href}>{svc.title}</Link></h3>
                    <p>{svc.desc}</p>
                    <Link href={svc.href} className="service-tag">{svc.tag}</Link>
                  </div>
                  <div className="service-image img-hover">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={svc.image} alt={svc.imageAlt} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link href="/services" className="cta-btn-light">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 6: Philosophy ── */}
      <section
        className="section-dark"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <AnimatedSection>
            <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1.5rem' }}>
              What success looks like.
            </p>
            <h2 style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 52px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              color: 'var(--white)',
              marginBottom: '2.5rem',
            }}>
              Fueled by automation obsession<br />and flat whites.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--muted-dark)',
              marginBottom: '1.25rem',
              maxWidth: '680px',
            }}>
              In every city, every street, every industry — there are businesses doing exceptional work in relative obscurity. Not from lack of quality. Not from lack of ambition. From lack of visibility. TO BE SEEN exists to close that gap.
            </p>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--muted-dark)',
              marginBottom: '3rem',
              maxWidth: '680px',
            }}>
              Our job is to change that. We build and maintain automation systems that take the repetitive, revenue-leaking tasks off your plate. You focus on delivery. We focus on everything that supports it. No outsourced teams, no generic playbooks. Just hands-on, results-first work with businesses we actually care about.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="cta-btn">
                Partner With Us
              </Link>
              <Link href="/contact" className="cta-btn">
                Book a call →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 7: FAQ ── */}
      <section
        className="section-light"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <AnimatedSection>
          <h2 style={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 80px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            color: 'var(--black)',
            marginBottom: '4rem',
          }}>
            Questions.
          </h2>
        </AnimatedSection>

        <div style={{ maxWidth: '860px' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} num={faq.num} q={faq.q} a={faq.a} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* ── Section 8: CTA Final ── */}
      <section
        className="section-dark"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=70"
            alt="Data center technology"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08 }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(48px, 8vw, 120px)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              color: 'var(--white)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              Ready<br />to grow?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: 'clamp(16px, 2vw, 22px)',
              color: 'var(--muted-dark)',
              marginBottom: '3rem',
              maxWidth: '480px',
              lineHeight: 1.6,
            }}>
              Whether you're starting from scratch or scaling fast, we'll build what your business actually needs.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Link href="/contact" className="cta-btn" style={{ fontSize: '15px', padding: '18px 40px' }}>
              LET'S GO →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

function FAQItem({ num, q, a, delay = 0 }: { num: string; q: string; a: string; delay?: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatedSection delay={delay}>
      <div className="faq-item">
        <button
          className="faq-question"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="faq-q-num">{num}</span>
          <span className="faq-q-text">{q}</span>
          <span className={`faq-icon${open ? ' open' : ''}`}>+</span>
        </button>
        <div
          className="faq-answer"
          ref={contentRef}
          style={{
            maxHeight: open ? `${contentRef.current?.scrollHeight || 300}px` : '0',
          }}
        >
          <div className="faq-answer-inner">{a}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}
