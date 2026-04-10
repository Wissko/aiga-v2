'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const featuredSystems = [
  {
    number: '01',
    title: 'AI Reception & Call Capture',
    summary: 'Answers enquiries, qualifies intent, and books the next step without leaving callers in voicemail.',
    details: 'Best for service businesses losing work after hours or during peak times.',
    href: '/services#phone-ai',
  },
  {
    number: '02',
    title: 'Booking Flows That Remove Friction',
    summary: 'Online scheduling designed to reduce back-and-forth, no-shows, and admin drag.',
    details: 'Built to feel simple for clients and dependable for your team.',
    href: '/services#bookings',
  },
  {
    number: '03',
    title: 'Follow-Up Systems That Bring People Back',
    summary: 'CRM journeys that re-engage past clients, request reviews, and keep revenue active.',
    details: 'Ideal when growth is already in your database but nothing is prompting action.',
    href: '/services#crm',
  },
];

const services = [
  {
    num: '01.',
    title: 'WEBSITE CREATION',
    desc: 'Fast, premium websites built to create trust and move visitors toward a clear enquiry.',
    tag: 'Web design',
    href: '/services#websites',
  },
  {
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    desc: 'An always-on call layer that answers, qualifies, and books without losing tone or clarity.',
    tag: 'AI voice',
    href: '/services#phone-ai',
  },
  {
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    desc: 'A cleaner scheduling experience across your site, search listings, and existing calendar.',
    tag: 'Scheduling',
    href: '/services#bookings',
  },
  {
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    desc: 'Structured messages and reminders that turn one-time clients into repeat business.',
    tag: 'CRM',
    href: '/services#crm',
  },
  {
    num: '05.',
    title: 'SEO & PERFORMANCE INSIGHTS',
    desc: 'Technical foundations, search visibility, and reporting that make decisions easier.',
    tag: 'SEO',
    href: '/services#seo-performance',
  },
  {
    num: '06.',
    title: 'FULL DIGITALISATION BUNDLE',
    desc: 'A complete operating layer where website, calls, bookings, and follow-up work as one system.',
    tag: 'Bundle',
    href: '/services#bundle',
  },
];

const faqs = [
  {
    num: '01.',
    q: 'How do we know which service to start with?',
    a: 'We start with the commercial bottleneck. For some businesses that is missed calls. For others it is weak follow-up, poor booking flow, or a website that does not build trust. The strategy call is used to prioritise what will move revenue first.',
  },
  {
    num: '02.',
    q: 'Can this work with our current systems?',
    a: 'Usually yes. We prefer integrating into the tools you already rely on where that makes sense. If something needs replacing, we explain why and keep the transition simple.',
  },
  {
    num: '03.',
    q: 'Is this suitable for smaller businesses?',
    a: 'Yes. The whole point is to give smaller operators access to systems that usually feel reserved for larger companies. The setup is tailored to your stage rather than overloaded with unnecessary complexity.',
  },
];

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.62, 0.82, 1], [1, 1, 0.84, 0.12]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.68, 1], ['0px', '0px', '12px']);
  const heroMaskStop = useTransform(scrollYProgress, [0, 0.56, 0.78, 1], ['100%', '100%', '42%', '6%']);
  const heroClipBottom = useTransform(scrollYProgress, [0, 0.56, 0.8, 1], ['0%', '4%', '48%', '96%']);
  const heroVeilOpacity = useTransform(scrollYProgress, [0.5, 0.72, 1], [0, 0.38, 0.96]);
  const heroVeilY = useTransform(scrollYProgress, [0.5, 1], ['16%', '-6%']);
  const heroFilter = useMotionTemplate`blur(${heroBlur})`;
  const heroMaskImage = useMotionTemplate`linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) ${heroMaskStop}, rgba(0,0,0,0.72) calc(${heroMaskStop} + 10%), rgba(0,0,0,0) 100%)`;
  const heroClipPath = useMotionTemplate`inset(0 0 ${heroClipBottom} 0)`;

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-sticky-shell">
        <div className="hero-stage">
          <motion.div className="hero-swallow-veil" aria-hidden="true" style={{ opacity: heroVeilOpacity, y: heroVeilY }} />
          <motion.div className="hero-content-lockup" style={{ opacity: heroOpacity, filter: heroFilter, clipPath: heroClipPath, WebkitMaskImage: heroMaskImage, maskImage: heroMaskImage }}>
            <div className="hero-stack">
              <h1 className="hero-title" aria-label="TO BE SEEN">
                <span className="hero-title-line hero-title-line-top">TO BE</span>
                <span className="hero-title-line hero-title-line-bottom">SEEN</span>
              </h1>
            </div>
            <div className="hero-copy">
              <div className="hero-actions">
                <Link href="/contact" className="cta-btn hero-btn-primary">Book a free strategy call</Link>
                <Link href="/services" className="hero-btn-secondary">Explore services</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="hero-overlay-stack">
        <Marquee text="AI Automation for Australian Businesses" separator="·" dark={true} size="md" speed={20} />

        <section className="section-light hero-reveal-section" style={{ padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)' }}>
          <div className="editorial-shell premium-grid-2" style={{ alignItems: 'end' }}>
            <AnimatedSection>
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Positioning with substance</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(42px, 7vw, 104px)', color: 'var(--black)', marginBottom: '1.5rem' }}>
                  We build the operating layer behind a business that looks established.
                </h2>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div style={{ maxWidth: '36rem', justifySelf: 'end' }}>
                <p style={{ fontSize: '16px', color: 'var(--muted-light)', marginBottom: '1rem' }}>
                  Websites, call handling, bookings, and follow-up should not feel like disconnected tools. We design them as one coherent system so your business is easier to trust, easier to contact, and easier to choose.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--muted-light)', marginBottom: '1.75rem' }}>
                  The result is a cleaner experience for your clients and a calmer operation for your team.
                </p>
                <Link href="/about" className="link-arrow">About the studio</Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell">
          <AnimatedSection>
            <div className="selected-systems-intro">
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Selected systems</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 72px)', color: 'var(--white)', maxWidth: '12ch' }}>
                  A few of the systems we build for Australian businesses.
                </h2>
              </div>
              <p style={{ maxWidth: '34rem', justifySelf: 'end', color: 'var(--muted-dark)', fontSize: '16px', lineHeight: 1.7 }}>
                Reworked specifically for phone readability: tighter copy, stronger separation between number, title and detail, and a card rhythm that feels deliberate instead of stacked by default.
              </p>
            </div>
          </AnimatedSection>

          <div className="premium-grid-3">
            {featuredSystems.map((system, index) => (
              <AnimatedSection key={system.title} delay={index * 0.08}>
                <Link href={system.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <article className="premium-card premium-card-dark selected-system-card">
                    <div className="selected-system-meta">
                      <span className="premium-number">{system.number}</span>
                      <span className="premium-kicker" style={{ color: 'var(--muted-dark)' }}>View service</span>
                    </div>
                    <h3 className="heading-card" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--white)', marginBottom: '0.15rem', maxWidth: '12ch' }}>{system.title}</h3>
                    <p className="selected-system-summary">{system.summary}</p>
                    <p className="selected-system-detail">{system.details}</p>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" style={{ padding: '0 0 clamp(4rem, 8vw, 8rem)', overflow: 'hidden' }}>
        <Marquee text="Services" separator="·" dark={false} size="md" speed={24} />
        <div className="editorial-shell" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem) 0' }}>
          <AnimatedSection>
            <div className="premium-grid-2" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)', alignItems: 'end' }}>
              <div>
                <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Core offers</p>
                <h2 className="heading-section" style={{ fontSize: 'clamp(40px, 7vw, 110px)', color: 'var(--black)' }}>
                  Built to feel coherent from first click to repeat booking.
                </h2>
              </div>
              <p style={{ color: 'var(--muted-light)', maxWidth: '36rem', justifySelf: 'end' }}>
                Every service is framed around one business outcome: stronger visibility, faster response, smoother scheduling, better follow-up, or a fully connected client journey.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {services.map((service, index) => (
              <AnimatedSection key={service.num} delay={index * 0.05}>
                <Link href={service.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="premium-card premium-card-light service-row-card">
                    <span className="premium-number">{service.num}</span>
                    <div>
                      <h3 className="heading-card" style={{ fontSize: 'clamp(24px, 4vw, 42px)', color: 'var(--black)', marginBottom: '0.25rem' }}>{service.title}</h3>
                      <p style={{ color: 'var(--muted-light)', fontSize: '15px', lineHeight: 1.7 }}>{service.desc}</p>
                    </div>
                    <span className="premium-kicker" style={{ color: 'var(--accent)' }}>{service.tag}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-grid-2" style={{ alignItems: 'start' }}>
          <div>
            <AnimatedSection>
              <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Why it works</p>
              <h2 className="heading-section" style={{ fontSize: 'clamp(34px, 5vw, 72px)', color: 'var(--white)', marginBottom: '1.25rem' }}>
                We remove the digital weak points that quietly cost businesses revenue.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <p style={{ color: 'var(--muted-dark)', maxWidth: '38rem' }}>
                Missed calls, old websites, manual booking loops, and absent follow-up all create leakage. We tighten those points so your business feels more responsive, more credible, and easier to buy from.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.15}>
            <div className="premium-grid-3">
              {['Better first impression', 'Faster response time', 'Less admin drag'].map((item) => (
                <div key={item} className="metric-card">
                  <div className="metric-value">01</div>
                  <div className="stat-label" style={{ marginTop: '0.75rem' }}>{item}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-light" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell" style={{ maxWidth: '860px' }}>
          <AnimatedSection>
            <h2 className="heading-section" style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: 'var(--black)', marginBottom: '2rem' }}>Questions.</h2>
          </AnimatedSection>
          {faqs.map((faq, i) => <FAQItem key={faq.q} {...faq} delay={i * 0.05} />)}
        </div>
      </section>

      <section className="section-dark" style={{ padding: 'clamp(5rem, 9vw, 8rem) clamp(1.5rem, 6vw, 5rem)' }}>
        <div className="editorial-shell premium-card premium-card-dark" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          <AnimatedSection>
            <p className="premium-eyebrow" style={{ marginBottom: '1rem' }}>Next step</p>
            <h2 className="heading-section" style={{ fontSize: 'clamp(40px, 7vw, 110px)', color: 'var(--white)', marginBottom: '1rem' }}>Ready to grow with more structure?</h2>
            <p style={{ color: 'var(--muted-dark)', maxWidth: '36rem', marginBottom: '2rem' }}>
              Start with a strategy call. We will assess the gaps in your current setup and recommend the most commercially useful next move.
            </p>
            <Link href="/contact" className="cta-btn">Book a free strategy call</Link>
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
        <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
          <span className="faq-q-num">{num}</span>
          <span className="faq-q-text">{q}</span>
          <span className={`faq-icon${open ? ' open' : ''}`}>+</span>
        </button>
        <div className="faq-answer" ref={contentRef} style={{ maxHeight: open ? `${contentRef.current?.scrollHeight || 300}px` : '0' }}>
          <div className="faq-answer-inner">{a}</div>
        </div>
      </div>
    </AnimatedSection>
  );
}
