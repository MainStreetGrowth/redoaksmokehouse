"use client";
import { useEffect, useRef } from "react";
import { IcoWood, IcoThermometer, IcoFlame, IcoUtensils } from "./Icons";

const STEPS = [
  {
    num: "01",
    icon: IcoWood,
    title: "Source the Wood",
    desc: "Red oak, cut and split locally. We split our own to control moisture — wet wood makes acrid smoke, dry wood makes clean smoke. No substitutions.",
  },
  {
    num: "02",
    icon: IcoThermometer,
    title: "Season & Rest",
    desc: "Salt, pepper, and patience. Our rub is simple by design — we want you to taste the smoke and the meat, not a spice rack full of shortcuts.",
  },
  {
    num: "03",
    icon: IcoFlame,
    title: "Smoke Low & Slow",
    desc: "225°F for 12–18 hours depending on the cut. We manage the fire by hand all night. No pellet grill, no timer — just a pitmaster and a wood fire.",
  },
  {
    num: "04",
    icon: IcoUtensils,
    title: "Slice to Order",
    desc: "We slice your brisket when you order it, not before. Hot, fresh, rested. That's the only way great BBQ should ever be served.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--pit)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: 580, marginBottom: "clamp(48px,7vw,80px)" }}>
          <p className="eyebrow reveal" style={{ marginBottom: 14 }}>How We Do It</p>
          <h2 className="font-display reveal reveal-delay-1" style={{
            fontSize: "clamp(40px,5.5vw,68px)", lineHeight: 0.92,
            letterSpacing: "0.02em", color: "#fff", marginBottom: 18,
          }}>
            THE PIT<br />PROCESS
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 17, color: "var(--bone)", lineHeight: 1.7 }}>
            Good BBQ doesn&apos;t happen by accident. Every step below has been dialed in
            over thirty years of daily cooking.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
          {STEPS.map(({ num, icon: Icon, title, desc }, i) => (
            <div
              key={num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--smoke)", border: "1px solid var(--border)",
                padding: "36px 28px", position: "relative", overflow: "hidden",
              }}
            >
              {/* Large background number */}
              <span className="font-display" style={{
                position: "absolute", top: 16, right: 16,
                fontSize: 80, lineHeight: 0.85, color: "rgba(232,67,10,0.07)",
                pointerEvents: "none", userSelect: "none",
              }}>
                {num}
              </span>

              {/* Icon */}
              <div style={{
                width: 44, height: 44,
                background: "rgba(232,67,10,0.1)", border: "1px solid rgba(232,67,10,0.2)",
                borderRadius: 3,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--fire)", marginBottom: 24,
              }}>
                <Icon size={20} />
              </div>

              <div className="font-condensed" style={{
                fontSize: 17, fontWeight: 700, letterSpacing: "0.05em",
                textTransform: "uppercase", color: "#fff", marginBottom: 12,
              }}>
                {title}
              </div>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.7 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
