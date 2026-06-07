import { IcoPhone, IcoUsers, IcoCalendar, IcoTrophy } from "./Icons";

const PERKS = [
  { icon: IcoUsers,    label: "10 to 500+ guests" },
  { icon: IcoCalendar, label: "Book 1 week ahead" },
  { icon: IcoTrophy,   label: "Weddings, reunions, corporate" },
  { icon: IcoPhone,    label: "One call, we handle the rest" },
];

export default function Catering() {
  return (
    <section id="catering" style={{ background: "var(--fire)", position: "relative", overflow: "hidden" }}>
      {/* Diagonal stripe overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(-50deg, transparent, transparent 22px, rgba(0,0,0,0.07) 22px, rgba(0,0,0,0.07) 44px)",
      }} />

      <div className="container" style={{ position: "relative", padding: "clamp(64px,9vw,104px) clamp(20px,5vw,56px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,7vw,80px)", alignItems: "center" }}>

          {/* Left */}
          <div>
            <p className="font-condensed" style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 14,
            }}>
              Feed the Crowd
            </p>
            <h2 className="font-display" style={{
              fontSize: "clamp(52px,7vw,88px)", lineHeight: 0.9,
              letterSpacing: "0.02em", color: "#fff", marginBottom: 20,
            }}>
              WE DO<br />CATERING
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.82)", lineHeight: 1.65, maxWidth: 420 }}>
              Reunions, weddings, tailgates, corporate spreads — if you&apos;ve got a crowd,
              we&apos;ve got the pit. Call us a week out and we&apos;ll handle everything.
            </p>
          </div>

          {/* Right */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
              {PERKS.map(({ icon: Icon, label }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 16px",
                  background: "rgba(0,0,0,0.12)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 3,
                }}>
                  <Icon size={17} style={{ color: "#fff", flexShrink: 0 }} />
                  <span className="font-condensed" style={{
                    fontSize: 14, fontWeight: 600, letterSpacing: "0.05em",
                    textTransform: "uppercase", color: "#fff",
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <a href="tel:+16625551847" className="btn btn-white">
              <IcoPhone size={16} /> Call to Book Catering
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
