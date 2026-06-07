"use client";
import { useEffect, useRef } from "react";
import { IcoArrow, IcoPhone } from "./Icons";

const STATS = [
  { num: "12–18", unit: "hr", label: "Smoke Time" },
  { num: "30",    unit: "+",  label: "Years Smokin'" },
  { num: "4.9",   unit: "★",  label: "Google Rating" },
  { num: "100",   unit: "%",  label: "Real Wood Fire" },
];

export default function Hero() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
      el.style.opacity = "1";
      el.style.transform = "none";
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="grain"
      style={{
        minHeight: "100vh",
        paddingTop: 68,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(https://images.unsplash.com/photo-1605494708467-59cc8ebbe337?auto=format&fit=crop&w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }} />
      {/* Dark overlay + fire gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 65% 55% at 55% 85%, rgba(232,67,10,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 40% 35% at 80% 95%, rgba(180,50,8,0.15) 0%, transparent 55%),
          linear-gradient(to bottom, rgba(8,8,8,0.85) 0%, rgba(10,10,10,0.78) 55%, rgba(8,8,8,0.92) 100%)
        `,
      }} />

      {/* Vertical rule accent */}
      <div style={{
        position: "absolute", left: "clamp(20px,5vw,56px)", top: "20%", bottom: "22%",
        width: 1, background: "linear-gradient(to bottom, transparent, var(--fire), transparent)", opacity: 0.35,
      }} />

      <div className="container" style={{ position: "relative", paddingBottom: "clamp(56px,8vw,96px)" }}>
        <div ref={headRef}>
          {/* Live badge */}
          <div className="font-condensed" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 14px",
            background: "rgba(232,67,10,0.12)",
            border: "1px solid rgba(232,67,10,0.28)",
            borderRadius: 3,
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--fire)",
            marginBottom: 32,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "var(--fire)",
              animation: "pulse 2s infinite",
            }} />
            Open Today · 11am – 9pm
          </div>

          {/* Headline */}
          <h1 className="font-display" style={{
            fontSize: "clamp(72px, 13vw, 152px)",
            lineHeight: 0.87,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 32,
          }}>
            LOW<br />
            &amp;&nbsp;<span style={{ color: "var(--fire)" }}>SLOW</span><br />
            SINCE&nbsp;&#x27;94
          </h1>

          <p className="font-condensed" style={{
            fontSize: "clamp(17px, 2.2vw, 22px)",
            fontWeight: 400,
            color: "var(--bone)",
            maxWidth: 500,
            lineHeight: 1.55,
            marginBottom: 44,
          }}>
            Real pit BBQ smoked over red oak wood for 12–18 hours. No gas,
            no shortcuts — just fire, wood, and time.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 72 }}>
            <a href="#menu" className="btn btn-fire">
              See the Menu <IcoArrow size={15} />
            </a>
            <a href="tel:+16625551847" className="btn btn-ghost">
              <IcoPhone size={15} /> Call to Order
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "clamp(28px,5vw,60px)",
            flexWrap: "wrap",
            paddingTop: 44,
            borderTop: "1px solid var(--border)",
          }}>
            {STATS.map(({ num, unit, label }) => (
              <div key={label}>
                <div className="font-display" style={{ fontSize: "clamp(36px,4.5vw,52px)", lineHeight: 1, color: "#fff" }}>
                  {num}<span style={{ color: "var(--fire)" }}>{unit}</span>
                </div>
                <div className="font-condensed" style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: "var(--stone)", marginTop: 6,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}
