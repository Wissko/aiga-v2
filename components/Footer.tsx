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

const tickerItems = Array(12).fill('Let\'s work together');

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black)' }}>

      {/* Ticker */}
      <div className="ticker-wrap" style={{ overflow: 'hidden' }}>
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            gap: '0',
            '--marquee-speed': '25s',
          } as React.CSSProperties}
        >
          {tickerItems.concat(tickerItems).map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--white)',
                paddingRight: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>✦</span>
              {item}
              <span style={{ color: 'var(--accent)', marginLeft: '0.5rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer body */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 900,
              fontSize: '2rem',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              marginBottom: '1rem',
            }}>
              AIGA
            </div>
            <p style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--muted-dark)',
              lineHeight: 1.75,
              maxWidth: '320px',
              marginBottom: '1.5rem',
            }}>
              Artificial Intelligence Growth Agency. Making AI automation accessible for Australian small businesses.
            </p>
            <Link href="/contact" className="cta-btn">
              Book a free strategy call →
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <h3 style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--muted-dark)',
                marginBottom: '1.25rem',
              }}>
                {category}
              </h3>
              <ul style={{ listStyle: 'none' }}>
                {items.map((item) => (
                  <li key={item.href} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      href={item.href}
                      style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--muted-dark)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted-dark)'; }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-dark)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.3)',
          }}>
            2024 AIGA. All rights reserved. Brisbane, Australia.
          </p>
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.3)',
          }}>
            Powered by caffeine ☕ and n8n
          </p>
          <p style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.3)',
          }}>
            hello@aiga.au
          </p>
        </div>
      </div>
    </footer>
  );
}
