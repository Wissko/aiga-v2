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
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'var(--indigo)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'var(--cyan)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
              AI automation for Australian businesses
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-syne font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tight"
          >
            Your business,
            <br />
            <span className="grad-text">running on autopilot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-[#888899] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
            >
              Book a free strategy call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-[#888899] border border-white/10 hover:border-white/20 hover:text-white transition-all"
            >
              See all services
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#04040a] via-transparent to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Business analytics dashboard"
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
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.value} delay={i * 0.1} className="text-center">
                <div className="font-syne font-bold text-4xl md:text-5xl grad-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#888899]">{stat.label}</div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-6">
                The reality for most small businesses
              </div>
              <h2 className="font-syne font-bold text-4xl md:text-5xl leading-tight mb-6">
                A 3-hour response to a lead is
                <span className="grad-text"> lost business</span>
              </h2>
              <p className="text-[#888899] leading-relaxed mb-6">
                Most Australian small businesses still rely on missed calls, manual bookings, and sporadic follow-ups.
                While you sleep, your competitors are capturing every lead automatically.
              </p>
              <p className="text-[#888899] leading-relaxed">
                AIGA changes that. We build systems that respond instantly, book automatically, and follow up persistently.
                No extra staff needed.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
                >
                  Fix this for my business
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Business owner on phone"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#04040a]/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-6">
              What we build
            </div>
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-4">
              Everything your business needs,
              <br />
              <span className="grad-text">done for you</span>
            </h2>
            <p className="text-[#888899] max-w-xl mx-auto">
              From your first Google review to a fully automated operation. We handle the tech so you handle the growth.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.08}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 hover:border-white/10 transition-all duration-300 h-full"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg mb-4 opacity-80"
                    style={{ background: 'var(--grad)' }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-syne font-semibold text-lg text-white mb-2 group-hover:grad-text transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#888899] leading-relaxed mb-4">{service.desc}</p>
                  <div className="text-sm font-medium" style={{ color: 'var(--cyan)' }}>
                    From {service.from}
                  </div>
                </Link>
              </AnimatedSection>
            ))}

            {/* CTA card */}
            <AnimatedSection delay={services.length * 0.08}>
              <Link
                href="/pricing"
                className="group block p-6 rounded-2xl border border-white/10 hover:border-[#4f46e5]/50 transition-all duration-300 h-full relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(6,182,212,0.1))' }}
              >
                <div className="relative z-10">
                  <h3 className="font-syne font-semibold text-xl text-white mb-2">
                    See all pricing
                  </h3>
                  <p className="text-sm text-[#888899] leading-relaxed mb-4">
                    Transparent pricing with monthly and one-time options. No lock-in surprises.
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
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
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-4">
              Up and running in
              <span className="grad-text"> 2 weeks</span>
            </h2>
            <p className="text-[#888899] max-w-lg mx-auto">
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
                <div className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 h-full">
                  <div className="font-syne font-bold text-4xl grad-text mb-4 opacity-60">{item.step}</div>
                  <h3 className="font-syne font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#888899] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-4">
              What our clients say
            </h2>
            <p className="text-[#888899]">Real businesses, real results.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 h-full flex flex-col">
                  <blockquote className="text-[#c8c8d8] text-sm leading-relaxed flex-1 mb-6">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: 'var(--grad)' }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{t.name}</div>
                      <div className="text-xs text-[#888899]">{t.title}</div>
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
            <div className="p-12 rounded-3xl border border-white/10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.08))' }}>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'var(--grad)' }}
              />
              <h2 className="font-syne font-bold text-4xl text-white mb-4 relative z-10">
                Ready to automate your business?
              </h2>
              <p className="text-[#888899] mb-8 relative z-10">
                Book a free 30-minute strategy call. We'll map out exactly what automation can do for your specific business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white grad-bg hover:opacity-90 transition-opacity relative z-10"
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
