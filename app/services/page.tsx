'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import type { Metadata } from 'next';

const services = [
  {
    id: 'websites',
    title: 'Website Creation',
    tagline: 'Your digital shopfront, built to convert',
    desc: `Your website is often the first impression a potential customer gets. Most small business websites are slow, outdated, and built on templates that look like every other competitor. AIGA builds modern, fast, and conversion-focused websites tailored to your business.`,
    bullets: [
      'Custom design aligned to your brand',
      'Mobile-first, Google-optimised (Core Web Vitals)',
      'Integrated booking and enquiry forms',
      'E-commerce ready with payment processing',
      'Ongoing hosting and updates included on monthly plans',
    ],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    tech: ['Next.js', 'Webflow', 'WordPress', 'Stripe'],
    from: '$299/mo',
  },
  {
    id: 'phone-ai',
    title: 'Phone AI Automation',
    tagline: 'Never miss a call. Never hire a receptionist.',
    desc: `Most small businesses lose revenue from missed calls. After hours, during peak service times, when you're with a customer. Our AI voice agent answers every call, qualifies the enquiry, books appointments, and escalates emergencies to you.`,
    bullets: [
      '24/7 call answering, 365 days per year',
      'Books appointments directly into your calendar',
      'Handles common FAQs and pricing enquiries',
      'Transfers to you for urgent or complex calls',
      'Full call transcripts and analytics delivered daily',
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80',
    tech: ['Vapi.ai', 'Bland AI', 'ElevenLabs', 'Twilio'],
    from: '$199/mo',
  },
  {
    id: 'bookings',
    title: 'Automated Bookings',
    tagline: 'Let clients book around the clock',
    desc: `Manual booking systems waste time and lose clients. Our automated booking solution lets customers schedule online at 2am if they want to, syncs with your calendar, sends reminders to reduce no-shows, and handles rescheduling automatically.`,
    bullets: [
      'Online booking from your website, Google, and social',
      'Automated SMS and email reminders',
      'No-show reduction: typically 50 to 70%',
      'Syncs with Google Calendar, iCal, and more',
      'Waitlist management and auto-fill cancellations',
    ],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80',
    tech: ['Cal.com', 'Calendly', 'n8n', 'Make'],
    from: '$99/mo',
  },
  {
    id: 'crm',
    title: 'Client Follow-up CRM',
    tagline: 'Keep clients coming back, automatically',
    desc: `Most businesses spend all their energy acquiring new customers and neglect the gold mine sitting in their existing client list. AIGA builds personalised automated sequences that re-engage past clients, request reviews, offer seasonal promotions, and keep your business top of mind.`,
    bullets: [
      'Automated post-visit follow-up sequences',
      'AI-personalised re-engagement messages',
      'Review generation campaigns (Google, Facebook)',
      'Birthday and anniversary automations',
      'Dashboard showing revenue attributed to follow-ups',
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    tech: ['HubSpot', 'Airtable', 'Notion', 'n8n', 'Make'],
    from: '$149/mo',
  },
  {
    id: 'bundle',
    title: 'Full Digitalisation Bundle',
    tagline: 'From zero to fully operational online',
    desc: `For businesses that want everything done right, in one go, by one team. We take you from wherever you are today and build a complete, integrated digital operation. Website, phone AI, bookings, CRM, and ongoing optimisation. One team, one plan, one price.`,
    bullets: [
      'Everything in all individual services',
      'Dedicated account manager',
      'Priority support with 4-hour response time',
      'Monthly strategy review calls',
      'Full integration across all systems',
      'Proactive optimisation and A/B testing',
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    tech: ['Full stack', 'All integrations', 'Custom built'],
    from: '$599/mo',
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-6">
              Services
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-6xl mb-6 leading-tight">
              AI-powered tools for
              <br />
              <span className="grad-text">Australian businesses</span>
            </h1>
            <p className="text-[#888899] text-lg leading-relaxed">
              Five core services that work independently or as a complete system.
              Pick what you need now and expand as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={service.id}
              className="py-20 border-b border-white/5 last:border-0"
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'}>
                  {service.featured && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white mb-4 grad-bg">
                      Most popular
                    </div>
                  )}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-4">
                    From {service.from}
                  </div>
                  <h2 className="font-syne font-bold text-4xl text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-[#888899] mb-4">{service.tagline}</p>
                  <p className="text-sm text-[#888899] leading-relaxed mb-6">{service.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[#c8c8d8]">
                        <span
                          className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                          style={{ background: 'var(--grad)' }}
                        >
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
                    >
                      Get started
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-sm text-[#888899] hover:text-white transition-colors"
                    >
                      View pricing →
                    </Link>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs text-[#888899] bg-white/5 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>

                <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'} delay={0.2}>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-80 object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#04040a]/60 to-transparent" />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-syne font-bold text-4xl mb-4">
              Not sure where to start?
            </h2>
            <p className="text-[#888899] mb-8">
              Book a free strategy call. We'll assess your current setup and tell you exactly which service will have the biggest impact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
            >
              Book a free strategy call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
