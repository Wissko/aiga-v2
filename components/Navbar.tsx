'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href: string) => {
    close();
    router.push(href);
  };

  return (
    <>
      {/* Trigger pill — top left */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{
          position: 'fixed',
          top: '1.25rem',
          left: '1.25rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '7px 16px',
          background: 'rgba(4,4,10,0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '999px',
          border: '1px solid rgba(79,70,229,0.35)',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.7)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.35)'; }}
      >
        {/* AIGA dot indicator */}
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          flexShrink: 0,
        }} />
        <span style={{
          width: '1px',
          height: '10px',
          background: 'rgba(255,255,255,0.12)',
          flexShrink: 0,
        }} />
        <span style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(241,245,249,0.65)',
          userSelect: 'none',
        }}>
          Menu
        </span>
      </motion.button>

      {/* Top-right CTA — always visible */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ position: 'fixed', top: '1.1rem', right: '1.25rem', zIndex: 50 }}
      >
        <Link
          href="/contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px 18px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#fff',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
        >
          Book a free call
        </Link>
      </motion.div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.75, ease: EASE }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: '#04040a',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close navigation"
              style={{
                position: 'absolute',
                top: 'clamp(1.5rem, 3vw, 2rem)',
                right: 'clamp(1.5rem, 5vw, 3.5rem)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                opacity: 0.5,
                lineHeight: 0,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.5'; }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <line x1="4" y1="4" x2="24" y2="24" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="24" y1="4" x2="4" y2="24" stroke="#f1f5f9" strokeWidth="1" />
              </svg>
            </button>

            {/* AIGA logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              style={{
                position: 'absolute',
                top: 'clamp(1.5rem, 3vw, 2rem)',
                left: 'clamp(1.5rem, 5vw, 3.5rem)',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '4px',
                background: 'linear-gradient(135deg, #818cf8, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AIGA
            </motion.div>

            {/* Nav links */}
            <nav
              aria-label="Main navigation"
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 8vw, 8rem)',
              }}
            >
              {links.map((link, i) => (
                <div
                  key={link.href}
                  style={{
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <motion.div
                    initial={{ y: '105%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '105%', opacity: 0 }}
                    transition={{ duration: 0.85, delay: i * 0.06, ease: EASE }}
                  >
                    <NavLink
                      label={link.label}
                      href={link.href}
                      active={pathname === link.href}
                      onClick={handleNav}
                    />
                  </motion.div>
                </div>
              ))}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
              style={{
                padding: 'clamp(1.25rem, 2.5vw, 2rem) clamp(1.5rem, 8vw, 8rem)',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <p style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(241,245,249,0.25)',
                fontWeight: 400,
              }}>
                AI Automation · Brisbane, Australia
              </p>
              <p style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                color: 'rgba(79,70,229,0.5)',
                fontWeight: 400,
              }}>
                hello@aiga.au
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick: (href: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: 'clamp(0.75rem, 1.8vw, 1.2rem) 0',
        textAlign: 'left',
        gap: '1rem',
      }}
    >
      {active && (
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          flexShrink: 0,
        }} />
      )}
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 'clamp(2rem, 5vw, 4.25rem)',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        color: active
          ? 'transparent'
          : hovered
          ? 'transparent'
          : '#f1f5f9',
        background: (active || hovered)
          ? 'linear-gradient(135deg, #818cf8, #22d3ee)'
          : 'none',
        WebkitBackgroundClip: (active || hovered) ? 'text' : 'unset',
        WebkitTextFillColor: (active || hovered) ? 'transparent' : 'unset',
        transition: 'all 0.3s ease',
      }}>
        {label}
      </span>
    </button>
  );
}
