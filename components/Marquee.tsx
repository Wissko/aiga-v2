'use client';

interface MarqueeProps {
  text: string;
  separator?: string;
  speed?: number; // seconds
  dark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Marquee({
  text,
  separator = '·',
  speed = 30,
  dark = true,
  size = 'md',
}: MarqueeProps) {
  const items = Array(12).fill(text);
  const sizeMap = {
    sm: 'clamp(20px, 3vw, 36px)',
    md: 'clamp(26px, 4.5vw, 58px)',
    lg: 'clamp(34px, 6vw, 72px)',
  };

  const bg = dark ? 'var(--black)' : 'var(--off-white)';
  const textColor = dark ? 'var(--white)' : 'var(--black)';

  return (
    <div
      className="marquee-wrap"
      style={{
        background: bg,
        overflow: 'hidden',
        padding: '1.25rem 0',
        maxWidth: '100vw',
        borderTop: dark ? '1px solid var(--border-dark)' : '1px solid var(--border-light)',
        borderBottom: dark ? '1px solid var(--border-dark)' : '1px solid var(--border-light)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          whiteSpace: 'nowrap',
          paddingLeft: 'max(1.25rem, 4vw)',
          '--marquee-speed': `${speed}s`,
        } as React.CSSProperties}
      >
        {items.concat(items).map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: sizeMap[size],
              fontWeight: 700,
              textTransform: 'uppercase',
              color: textColor,
              paddingRight: 'clamp(1.25rem, 4vw, 2.5rem)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)' }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
