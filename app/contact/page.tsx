'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-[#0d0d1a] border border-white/10 text-white placeholder-[#555566] text-sm focus:outline-none focus:border-[#4f46e5]/60 transition-colors';

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-[#888899] mb-6">
              Contact
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-6xl mb-6 leading-tight">
              Start with a
              <br />
              <span className="grad-text">free strategy call</span>
            </h1>
            <p className="text-[#888899] text-lg leading-relaxed">
              30 minutes. No sales pitch. We will map out which automations would have the biggest impact on your business and give you an honest assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection direction="left">
              {status === 'sent' ? (
                <div className="p-8 rounded-2xl bg-[#0d0d1a] border border-white/5 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'var(--grad)' }}
                  >
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M2 9l7 7L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="font-syne font-bold text-2xl text-white mb-3">Message sent</h2>
                  <p className="text-[#888899]">
                    We will get back to you within 24 hours to schedule your strategy call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#888899] mb-1.5">Your name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Sarah Mitchell"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#888899] mb-1.5">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="sarah@yourbusiness.com.au"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#888899] mb-1.5">Business name</label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      required
                      placeholder="Your Business Name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#888899] mb-1.5">Service you are interested in</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      <option value="websites">Website Creation</option>
                      <option value="phone-ai">Phone AI Automation</option>
                      <option value="bookings">Automated Bookings</option>
                      <option value="crm">Client Follow-up CRM</option>
                      <option value="bundle">Full Digitalisation Bundle</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#888899] mb-1.5">
                      Tell us about your business
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="What kind of business do you run? What is your biggest challenge right now?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white grad-bg hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending...' : 'Book my free strategy call'}
                  </button>

                  <p className="text-xs text-[#555566] text-center">
                    We typically respond within a few hours during business days.
                  </p>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-semibold text-2xl text-white mb-4">
                    What to expect
                  </h2>
                  <div className="space-y-4">
                    {[
                      { step: '1', title: 'We review your submission', desc: 'Within a few hours, we will look at your business and prepare relevant questions and ideas.' },
                      { step: '2', title: 'Schedule your call', desc: 'We will send a booking link so you can choose a time that works for you.' },
                      { step: '3', title: '30-minute strategy session', desc: 'An honest, no-pressure conversation about where AI automation fits your business.' },
                      { step: '4', title: 'Receive a clear plan', desc: 'After the call, we will send a written summary of what we recommend and how much it costs.' },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5"
                          style={{ background: 'var(--grad)' }}
                        >
                          {item.step}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                          <div className="text-xs text-[#888899] leading-relaxed">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0d0d1a] border border-white/5">
                  <h3 className="font-medium text-white mb-3">Who we work with</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Restaurants', 'Cafes', 'Hair salons', 'Beauty clinics', 'Physios', 'Dentists', 'Retail shops', 'Trades', 'Gyms', 'Yoga studios'].map((type) => (
                      <span key={type} className="px-2.5 py-1 rounded-lg text-xs text-[#888899] bg-white/5">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0d0d1a] border border-white/5">
                  <h3 className="font-medium text-white mb-2">Based in Australia</h3>
                  <p className="text-sm text-[#888899]">
                    We work with businesses across Sydney, Melbourne, Brisbane, Perth, Adelaide, and everywhere in between.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
