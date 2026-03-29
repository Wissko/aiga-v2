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
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-6">
                About AIGA
              </div>
              <h1 className="font-syne font-bold text-5xl md:text-6xl leading-tight mb-6">
                Built for the businesses
                <br />
                <span className="grad-text">that keep Australia running</span>
              </h1>
              <p className="text-[#888899] text-lg leading-relaxed mb-6">
                AIGA was founded with one observation: the technology that makes large companies highly efficient is completely inaccessible to most small businesses.
                Not because the tools do not exist, but because no one builds, integrates, and maintains them at a price that makes sense.
              </p>
              <p className="text-[#888899] leading-relaxed">
                We fix that. AIGA brings enterprise-grade automation to restaurants, salons, clinics, trades, and retailers across Australia.
                Affordable, done-for-you, and built to actually work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80"
                  alt="Modern workspace"
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover opacity-70"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#04040a]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                  alt="Founder"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover object-top opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04040a]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-syne font-bold text-xl text-white">Yose</div>
                  <div className="text-sm text-[#888899]">Founder, AIGA</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-6">
                The founder
              </div>
              <h2 className="font-syne font-bold text-4xl mb-6">
                From frustration to
                <span className="grad-text"> automation</span>
              </h2>
              <div className="space-y-4 text-[#888899] leading-relaxed">
                <p>
                  AIGA started after watching small business owners struggle with the same problems: missed calls, manual bookings, no follow-up system, and websites built in 2015.
                </p>
                <p>
                  The tools to fix these problems existed. Vapi, n8n, Cal.com, HubSpot — powerful platforms used by tech companies to operate at scale. But no one was packaging them in a way that a restaurant owner or salon manager could actually use without hiring a full-time tech person.
                </p>
                <p>
                  That is the gap AIGA fills. We are not a software company. We are the team that builds, connects, and maintains the systems that keep your business running smoothly, so you can focus on what you actually do well.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
                >
                  Book a call with us
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl">
              How we operate
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-[#0d0d1a] border border-white/5 h-full">
                  <h3 className="font-syne font-semibold text-lg text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-[#888899] leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-syne font-bold text-4xl mb-4">
              Tools we build with
            </h2>
            <p className="text-[#888899] max-w-lg mx-auto">
              We use best-in-class, battle-tested platforms. No experiments on your business.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {techPartners.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm text-[#888899] bg-[#0d0d1a] border border-white/5 hover:border-white/10 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Automations deployed' },
              { value: '98%', label: 'Client retention' },
              { value: '2 weeks', label: 'Average go-live time' },
              { value: '100%', label: 'Australian businesses served' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.value} delay={i * 0.1} className="text-center">
                <div className="font-syne font-bold text-4xl grad-text mb-2">{stat.value}</div>
                <div className="text-sm text-[#888899]">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-syne font-bold text-4xl mb-4">
              Want to work with us?
            </h2>
            <p className="text-[#888899] mb-8">
              Start with a free strategy call. No sales pressure, just an honest conversation about what would actually help your business.
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
