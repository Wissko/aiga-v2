'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import Marquee from '@/components/Marquee';

const services = [
  {
    num: '01.',
    title: 'WEBSITE CREATION',
    desc: 'Your website is often the first impression a customer gets. We build fast, modern, conversion-focused sites tailored to your business.',
    tag: '[WEB DESIGN]',
    href: '/services#websites',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    imageAlt: 'Web interface on dark screen',
  },
  {
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    desc: 'Your AI receptionist answers calls 24/7, books appointments, handles enquiries, and never takes a sick day.',
    tag: '[AI VOICE]',
    href: '/services#phone-ai',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    imageAlt: 'Circuit board technology abstract',
  },
  {
    num: '03.',
    title: 'AUTOMATED BOOKINGS',
    desc: 'Let clients book online around the clock. Syncs with your existing calendar. No-shows reduced automatically.',
    tag: '[SCHEDULING]',
    href: '/services#bookings',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    imageAlt: 'Technology interface abstract',
  },
  {
    num: '04.',
    title: 'CLIENT FOLLOW-UP CRM',
    desc: 'Personalised sequences that re-engage past clients, remind upcoming appointments, and drive repeat business.',
    tag: '[CRM]',
    href: '/services#crm',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    imageAlt: 'Analytics dashboard',
  },
  {
    num: '05.',
    title: 'SEO & PERFORMANCE INSIGHTS',
    desc: 'Technical SEO, conversion tracking, and monthly reporting that help the right clients find you.',
    tag: '[SEO]',
    href: '/services#seo-performance',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    imageAlt: 'Search and performance analytics',
  },
  {
    num: '06.',
    title: 'FULL DIGITALISATION BUNDLE',
    desc: 'From zero to fully operational online. Everything built, integrated, and running as one cohesive system.',
    tag: '[BUNDLE]',
    href: '/services#bundle',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    imageAlt: 'City lights at night',
  },
];

const featuredProjects = [
  {
    num: '01.',
    title: 'WEBSITE CREATION',
    summary: 'Fast, modern websites designed to turn first impressions into enquiries.',
    href: '/services#websites',
  },
  {
    num: '02.',
    title: 'PHONE AI AUTOMATION',
    summary: 'AI call handling systems that answer, qualify, and book around the clock.',
    href: '/services#phone-ai',
  },
  {
    num: '03.',
    title: 'FULL DIGITALISATION BUNDLE',
    summary: 'Connected websites, bookings, follow-up, and operations built as one system.',
    href: '/services#bundle',
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
    q: 'What if I already have systems in place?',
    a: "We work with what you have. Our tools integrate with most booking platforms, calendars, CRMs, and phone systems. If a replacement would genuinely serve you better, we'll tell you why and make the transition smooth.",
  },
  {
    num: '03.',
    q: 'I found a cheaper option online.',
    a: "You can absolutely find a cheaper tool. What usually costs more is the time lost setting it up badly, stitching it into your business, and fixing what never quite works. We build the whole system properly, make it fit how you operate, and stay involved so it actually delivers results.",
  },
  {
    num: '04.',
    q: 'How long does implementation take?',
    a: 'Most clients are live within two weeks. Complex setups with full integration across multiple systems can take up to four weeks. We set clear timelines upfront and stick to them.',
  },
  {
    num: '05.',
    q: 'Will you support us after launch?',
    a: "Yes. Monthly plans include ongoing support, updates, and monitoring. We don't disappear after go-live. You'll have a real contact who knows your setup and responds within hours.",
  },
];

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

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
          <motion.div
            className="hero-swallow-veil"
            aria-hidden="true"
            style={{
              opacity: heroVeilOpacity,
              y: heroVeilY,
            }}
          />

          <motion.div
            className="hero-content-lockup"
            style={{
              opacity: heroOpacity,
              filter: heroFilter,
              clipPath: heroClipPath,
              WebkitMaskImage: heroMaskImage,
              maskImage: heroMaskImage,
            }}
          >
            <div className="hero-stack">
              <h1 className="hero-title" aria-label="TO BE SEEN">
                <span className="hero-title-line hero-title-line-top">TO BE</span>
                <span className="hero-title-line hero-title-line-bottom">SEEN</span>
              </h1>
            </div>

            <div className="hero-copy">
              <div className="hero-actions">
                <Link href="/contact" className="cta-btn hero-btn-primary">
                  BOOK A FREE STRATEGY CALL →
                </Link>
                <Link href="/services" className="hero-btn-secondary">
                  OUR SERVICES
                </Link>
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
        <Marquee text="AI AUTOMATION" separator="·" dark={true} size="md" speed={20} />

        <section
          className="section-light hero-reveal-section"
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
              We’re To Be Seen. We build the brand presence your business deserves.
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
                We're an AI automation agency built for Australian small businesses across every industry. We understand that you’re juggling a lot and don’t have time for solutions that don’t deliver. That's why we take the time to understand your business first, so what we build is practical, tested, and ready to make a difference from day one.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--muted-light)' }}>
                We’re not just here to sell a service, we’re here to grow with you. Real systems, real results and a team that is just as invested in the growth of your business as you are.
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
      </div>

      <section
        className="section-dark"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
        }}
      >
        <AnimatedSection>
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '680px' }}>
            <p className="label" style={{ color: 'var(--muted-dark)', marginBottom: '1rem' }}>
              Projects we've made.
            </p>
            <h2 style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 52px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              color: 'var(--white)',
            }}>
              A few of the systems we build for Australian businesses.
            </h2>
          </div>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '2rem',
        }}>
          {featuredProjects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <Link href={project.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div style={{
                  height: '100%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, background 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(200, 240, 0, 0.45)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}>
                  <span style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '13px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}>
                    {project.num}
                  </span>

                  <div>
                    <h3 style={{
                      fontFamily: 'Satoshi, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(22px, 3vw, 34px)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.05,
                      color: 'var(--white)',
                      marginBottom: '0.75rem',
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: 'var(--muted-dark)',
                      maxWidth: '28ch',
                    }}>
                      {project.summary}
                    </p>
                  </div>

                  <span style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted-dark)',
                  }}>
                    View service →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section
        className="section-light"
        style={{ padding: '0 0 clamp(4rem, 8vw, 8rem)', overflow: 'hidden' }}
      >
        <Marquee text="Our Services" separator="·" dark={false} size="md" speed={25} />

        <div style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem) 0' }}>
          <AnimatedSection>
            <div style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)' }}>
              <p style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--muted-light)',
                marginBottom: '2rem',
              }}>
                What we build
              </p>
              <h2 style={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(48px, 8vw, 120px)',
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'var(--black)',
              }}>
                Everything
                <br />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'clamp(12px, 2vw, 24px)' }}>
                  your business
                </span>
                <br />
                <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(0,0,0,0.25)' }}>
                  needs.
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div>
            {services.map((svc, i) => (
              <AnimatedSection key={svc.num} delay={i * 0.06}>
                <Link href={svc.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div
                    className="service-item-v2"
                    style={{
                      borderTop: i === 0 ? '1px solid var(--border-light)' : 'none',
                      borderBottom: '1px solid var(--border-light)',
                      padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr auto',
                      alignItems: 'center',
                      gap: 'clamp(1rem, 3vw, 3rem)',
                      cursor: 'pointer',
                      transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.paddingLeft = 'clamp(1rem, 2vw, 2rem)';
                      el.style.background = 'rgba(200, 240, 0, 0.04)';
                      const num = el.querySelector('.svc-num') as HTMLElement;
                      if (num) num.style.color = 'var(--accent)';
                      const arrow = el.querySelector('.svc-arrow') as HTMLElement;
                      if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'translateX(0)'; }
                      const title = el.querySelector('.svc-title') as HTMLElement;
                      if (title) title.style.letterSpacing = '0.02em';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.paddingLeft = '0';
                      el.style.background = 'transparent';
                      const num = el.querySelector('.svc-num') as HTMLElement;
                      if (num) num.style.color = 'var(--muted-light)';
                      const arrow = el.querySelector('.svc-arrow') as HTMLElement;
                      if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'translateX(-8px)'; }
                      const title = el.querySelector('.svc-title') as HTMLElement;
                      if (title) title.style.letterSpacing = '-0.02em';
                    }}
                  >
                    <span
                      className="svc-num"
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 300,
                        fontSize: '14px',
                        letterSpacing: '0.1em',
                        color: 'var(--muted-light)',
                        transition: 'color 0.4s ease',
                        minWidth: '40px',
                      }}
                    >
                      {svc.num}
                    </span>

                    <div>
                      <h3
                        className="svc-title"
                        style={{
                          fontFamily: 'Satoshi, sans-serif',
                          fontWeight: 700,
                          fontSize: 'clamp(20px, 3.5vw, 42px)',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                          color: 'var(--black)',
                          transition: 'letter-spacing 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: 'var(--muted-light)',
                        marginTop: '0.5rem',
                        maxWidth: '480px',
                        lineHeight: 1.6,
                      }}>
                        {svc.desc}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 400,
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        opacity: 0.6,
                      }}>
                        {svc.tag.replace('[', '').replace(']', '')}
                      </span>
                      <span
                        className="svc-arrow"
                        style={{
                          fontSize: '20px',
                          color: 'var(--accent)',
                          opacity: 0,
                          transform: 'translateX(-8px)',
                          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      >
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div style={{ marginTop: 'clamp(2.5rem, 4vw, 4rem)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link href="/services" className="cta-btn-light">
                View all services &rarr;
              </Link>
              <span style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '13px',
                color: 'var(--muted-light)',
                letterSpacing: '0.05em',
              }}>
                6 core solutions
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
              We handle the digital backbone of your business.<br />You focus on what you do best.
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
              In every city, every street, every industry, there are businesses doing exceptional work in relative obscurity. Not from lack of quality. Not from lack of ambition. From lack of visibility. TO BE SEEN exists to close that gap.
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

      <section
        className="section-dark"
        style={{
          padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 6vw, 5rem)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}>
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=70"
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
