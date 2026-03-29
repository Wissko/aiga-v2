import Link from 'next/link';

const footerLinks = {
  Services: [
    { label: 'Website Creation', href: '/services#websites' },
    { label: 'Phone AI', href: '/services#phone-ai' },
    { label: 'Automated Bookings', href: '/services#bookings' },
    { label: 'Client Follow-up', href: '/services#crm' },
    { label: 'Full Digitalisation', href: '/services#bundle' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Results', href: '/results' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04040a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="font-syne font-bold text-xl mb-3">
              <span className="grad-text">AIGA</span>
            </div>
            <p className="text-[#888899] text-sm max-w-xs leading-relaxed">
              Artificial Intelligence Growth Agency. Making AI automation accessible for Australian small businesses.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white grad-bg hover:opacity-90 transition-opacity"
              >
                Book a free strategy call
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[#888899] uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#888899] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888899] text-xs">
            2024 AIGA. All rights reserved. Based in Australia.
          </p>
          <p className="text-[#888899] text-xs">
            Prices in AUD. GST may apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
