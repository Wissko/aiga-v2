'use client';

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
    <footer style={{ borderTop: '1px solid rgba(201,169,110,0.18)', background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div
              className="mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '1.35rem',
                letterSpacing: '0.04em',
                background: 'var(--grad)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AIGA
            </div>
            <p
              className="max-w-xs leading-relaxed"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '0.875rem',
                fontWeight: 300,
                color: 'var(--muted)',
                lineHeight: '1.8',
              }}
            >
              Artificial Intelligence Growth Agency. Making AI automation accessible for Australian small businesses.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 20px',
                  borderRadius: '999px',
                  background: 'var(--grad)',
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                Book a free strategy call
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '0.58rem',
                  fontWeight: 500,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: '0.875rem',
                        fontWeight: 300,
                        color: 'var(--muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'; }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.75rem',
              fontWeight: 300,
              color: 'var(--muted)',
            }}
          >
            2024 AIGA. All rights reserved. Based in Australia.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.75rem',
              fontWeight: 300,
              color: 'var(--muted)',
            }}
          >
            Prices in AUD. GST may apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
