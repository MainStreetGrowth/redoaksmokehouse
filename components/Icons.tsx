// All stroke icons use strokeWidth={1.75} for visual consistency.
// Pass className/style to control colour and size.

type IconProps = { size?: number; className?: string; style?: React.CSSProperties };

const base = (size: number, style?: React.CSSProperties) => ({
  width: size, height: size,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  style: { flexShrink: 0, ...style },
});

export const IcoFlame = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17h2a2.5 2.5 0 0 0 0-5l-1-.5A2.5 2.5 0 0 1 9 9c0-1.38.45-2.5 2-3 1.22-.39 2 .5 2 0C13 3.5 10.5 2 9 2 7.5 2 3 4.5 3 9.5c0 3.5 2.08 5.5 4 6.5" />
    <path d="M14.5 17.5c0 1.38-1.12 2.5-2.5 2.5S9.5 18.88 9.5 17.5c0-1.12 1.5-3 2.5-4 1 1 2.5 2.88 2.5 4z" />
  </svg>
);

export const IcoThermometer = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

export const IcoTimer = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <line x1="10" x2="14" y1="2" y2="2" />
    <line x1="12" x2="15" y1="14" y2="11" />
    <circle cx="12" cy="14" r="8" />
  </svg>
);

export const IcoSmoke = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M4 22c0-6 8-6 8-12" />
    <path d="M12 22c0-6 8-6 8-12" />
    <path d="M8 10c0-4 4-8 4-8" />
  </svg>
);

export const IcoMeat = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <circle cx="9" cy="12" r="6" />
    <path d="M15 12c0-3.31-2.69-6-6-6" strokeWidth={1.5} />
    <path d="M12.5 4.5 20 3l.5 7.5" />
    <path d="m20 3-5 6" />
  </svg>
);

export const IcoWood = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

export const IcoAward = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const IcoTrophy = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export const IcoStar = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth={1.5} />
  </svg>
);

export const IcoMapPin = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IcoPhone = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IcoMail = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const IcoClock = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IcoCalendar = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M8 2v4M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

export const IcoUsers = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IcoUtensils = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export const IcoCheck = ({ size = 16, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IcoArrow = ({ size = 16, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const IcoChevronRight = ({ size = 16, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const IcoParty = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className}>
    <path d="M5.8 11.3 2 22l10.7-3.79" />
    <path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
    <path d="M22 13c-1.3 0-2.48-.8-3-2" />
    <path d="M11 2C11 5.52 14.48 9 18 9" />
    <path d="M11 2c0 3.52 3.48 7 7 7" />
    <path d="m16 7 1-9 2 5 5-2-3.5 3.5" />
  </svg>
);

export const IcoInstagram = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className} fill="currentColor" stroke="none">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const IcoFacebook = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className} fill="currentColor" stroke="none">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const IcoGoogle = ({ size = 20, style, className }: IconProps) => (
  <svg {...base(size, style)} className={className} fill="currentColor" stroke="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);
