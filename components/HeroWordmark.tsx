'use client';

type HeroWordmarkProps = {
  className?: string;
};

export default function HeroWordmark({ className = '' }: HeroWordmarkProps) {
  return (
    <svg
      className={`hero-wordmark ${className}`.trim()}
      viewBox="0 0 1600 900"
      role="img"
      aria-label="TO BE SEEN"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="heroWordmarkFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.985)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.965)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.92)" />
        </linearGradient>
        <linearGradient id="heroWordmarkStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.34)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
        <filter id="heroWordmarkShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="rgba(0,0,0,0.38)" />
        </filter>
      </defs>

      <g filter="url(#heroWordmarkShadow)">
        <text
          x="50%"
          y="360"
          textAnchor="middle"
          className="hero-wordmark-line hero-wordmark-line-top"
          fill="url(#heroWordmarkFill)"
          stroke="url(#heroWordmarkStroke)"
          strokeWidth="10"
          paintOrder="stroke fill"
          lengthAdjust="spacingAndGlyphs"
          textLength="1090"
        >
          TO BE
        </text>
        <text
          x="52.2%"
          y="690"
          textAnchor="middle"
          className="hero-wordmark-line hero-wordmark-line-bottom"
          fill="url(#heroWordmarkFill)"
          stroke="url(#heroWordmarkStroke)"
          strokeWidth="7"
          paintOrder="stroke fill"
          lengthAdjust="spacingAndGlyphs"
          textLength="1240"
        >
          SEEN
        </text>
      </g>
    </svg>
  );
}
