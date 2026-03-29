'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const caseStudies = [
  {
    id: 'mitchell-hair',
    business: 'Mitchell Hair Studio',
    location: 'Melbourne, VIC',
    type: 'Hair salon',
    services: ['Phone AI', 'Automated Bookings', 'Client Follow-up CRM'],
    challenge:
      'Missing 40% of after-hours calls. Manual booking via phone was creating double-bookings and wasting 2 hours per day of staff time. No follow-up system meant clients would drift to competitors.',
    solution:
      'Deployed an AI phone agent that answers 24/7 and books directly into their calendar. Added automated SMS reminders and a follow-up sequence that re-engages clients after 6 weeks of inactivity.',
    results: [
      { metric: '+40%', label: 'Revenue in 4 months' },
      { metric: '100%', label: 'Calls answered' },
      { metric: '-65%', label: 'No-show rate' },
      { metric: '2h', label: 'Staff time saved daily' },
    ],
    quote:
      'We went from missing half our after-hours calls to capturing every single enquiry. Revenue is up 40% in four months. The AI sounds more professional than I do on a bad day.',
    author: 'Sarah Mitchell, Owner',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
  },
  {
    id: 'tran-kitchen',
    business: 'Tran Kitchen',
    location: 'Sydney, NSW',
    type: 'Restaurant',
    services: ['Phone AI', 'Automated Bookings'],
    challenge:
      'Busy kitchen meant calls were constantly missed during service. Reservation system was a paper book. Managing bookings, enquiries, and walk-ins simultaneously during dinner service was causing errors and stress.',
    solution:
      'Built a phone AI that handles reservation calls and answers common questions about opening hours, menu, and dietary requirements. Integrated with an online booking system with real-time availability.',
    results: [
      { metric: '0', label: 'Missed reservation calls' },
      { metric: '+25%', label: 'Table bookings per week' },
      { metric: '4.2 to 4.8', label: 'Google rating improvement' },
      { metric: '3h/wk', label: 'Time saved on admin' },
    ],
    quote:
      'The AI phone bot handles our reservation line better than a part-time staff member. Our team can focus on the floor instead of running to answer the phone every five minutes.',
    author: 'James Tran, Head Chef and Owner',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
  {
    id: 'sharma-health',
    business: 'Sharma Allied Health',
    location: 'Brisbane, QLD',
    type: 'Allied health clinic',
    services: ['Website Creation', 'Automated Bookings', 'Client Follow-up CRM'],
    challenge:
      'Outdated website was not ranking on Google and had no online booking. Reception was spending 30 minutes per day on rebooking reminders. No system to re-engage patients who had not returned in 3 months.',
    solution:
      'Complete website rebuild optimised for local SEO and conversion. Integrated online booking with automated reminders via SMS. Built a CRM flow that prompts patients to rebook at appropriate intervals and requests Google reviews after positive visits.',
    results: [
      { metric: '+60%', label: 'Reduction in no-shows' },
      { metric: '3.8 to 4.7', label: 'Google rating improvement' },
      { metric: '+35%', label: 'New patient enquiries from Google' },
      { metric: '30min', label: 'Daily admin time saved' },
    ],
    quote:
      "AIGA built our booking system and CRM in two weeks. We've reduced no-shows by 60% and our Google rating went from 3.8 to 4.7. The ROI was clear within the first month.",
    author: 'Priya Sharma, Practice Manager',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
  },
];

const globalStats = [
  { value: '500+', label: 'Automations deployed' },
  { value: '98%', label: 'Client retention rate' },
  { value: '2 weeks', label: 'Average go-live time' },
  { value: '3.4x', label: 'Average ROI in first year' },
];

export default function ResultsPage() {
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
              Client results
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-6xl mb-6 leading-tight">
              Real businesses,
              <br />
              <span className="grad-text">real numbers</span>
            </h1>
            <p className="text-[#888899] text-lg leading-relaxed">
              Not case studies designed to impress investors. Results from Australian small businesses that were missing calls, losing clients, and drowning in admin before we helped.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((stat, i) => (
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

      {/* Case studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.id}>
              <div className="rounded-3xl bg-[#0d0d1a] border border-white/5 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <Image
                      src={cs.image}
                      alt={cs.business}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a] to-transparent md:bg-gradient-to-r" />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#04040a]/80 border border-white/10 text-[#888899]">
                        {cs.type}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <div className="mb-6">
                      <h2 className="font-syne font-bold text-2xl text-white">{cs.business}</h2>
                      <div className="text-sm text-[#888899] mt-1">{cs.location}</div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {cs.services.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 rounded-lg text-xs text-[#888899] bg-white/5 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {cs.results.map((r) => (
                        <div key={r.label} className="p-3 rounded-xl bg-[#04040a] border border-white/5">
                          <div className="font-syne font-bold text-xl grad-text">{r.metric}</div>
                          <div className="text-xs text-[#888899] mt-0.5">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="border-l-2 border-[#4f46e5]/40 pl-4 mb-4">
                      <p className="text-sm text-[#c8c8d8] leading-relaxed italic">
                        "{cs.quote}"
                      </p>
                      <cite className="text-xs text-[#888899] mt-2 block not-italic">{cs.author}</cite>
                    </blockquote>

                    <div className="mt-6 space-y-3">
                      <details className="group">
                        <summary className="text-xs font-medium text-[#888899] cursor-pointer hover:text-white transition-colors list-none flex items-center gap-1.5">
                          <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
                          The challenge
                        </summary>
                        <p className="text-xs text-[#888899] leading-relaxed mt-2 pl-4">{cs.challenge}</p>
                      </details>
                      <details className="group">
                        <summary className="text-xs font-medium text-[#888899] cursor-pointer hover:text-white transition-colors list-none flex items-center gap-1.5">
                          <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
                          What we built
                        </summary>
                        <p className="text-xs text-[#888899] leading-relaxed mt-2 pl-4">{cs.solution}</p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lead-in */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="font-syne font-bold text-4xl mb-4">
                Your business could be
                <span className="grad-text"> next</span>
              </h2>
              <p className="text-[#888899] leading-relaxed mb-6">
                Every business in these case studies started with the same thing: a 30-minute conversation about what was actually costing them money.
                Not a proposal. Not a quote. Just an honest assessment.
              </p>
              <p className="text-[#888899] leading-relaxed">
                If you are missing calls, spending hours on admin, or watching clients not come back, there is a fix.
                And it usually pays for itself within the first month.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div
                className="p-8 rounded-2xl border border-white/10 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(6,182,212,0.08))' }}
              >
                <h3 className="font-syne font-bold text-2xl text-white mb-6">
                  Start with a free audit
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'We review your current setup',
                    'Identify your top 3 revenue leaks',
                    'Show exactly what automation would fix them',
                    'Give you a clear price and timeline',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#c8c8d8]">
                      <span
                        className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ background: 'var(--grad)' }}
                      >
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
                >
                  Book your free strategy call
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
