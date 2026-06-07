const ITEMS = [
  "Brisket Fresh Off The Pit Daily",
  "Friday Night Rib Special",
  "Whole Hog Every Saturday",
  "Catering Available — Call for Pricing",
  "Smoked Wings Every Weekend",
];

export default function SpecialsTicker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div style={{ background: "var(--fire)", overflow: "hidden", padding: "13px 0", position: "relative" }}>
      <div style={{
        display: "flex",
        whiteSpace: "nowrap",
        animation: "ticker 28s linear infinite",
      }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-condensed" style={{
            fontSize: 13, fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: "#fff",
            padding: "0 48px",
            display: "inline-flex", alignItems: "center", gap: 48,
          }}>
            {item}
            {i < doubled.length - 1 && (
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 8 }}>◆</span>
            )}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
