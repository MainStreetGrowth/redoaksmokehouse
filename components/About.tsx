"use client";
import { useEffect, useRef } from "react";
import { IcoFlame, IcoThermometer, IcoWood, IcoMapPin, IcoArrow } from "./Icons";

const FEATURES = [
  { icon: IcoWood,         title: "Red Oak Wood Only",  desc: "Sourced from local timber — no pellets, no propane, ever" },
  { icon: IcoThermometer,  title: "225°F — Always",     desc: "Low and slow at a consistent temp, every single cook" },
  { icon: IcoFlame,        title: "Fire-Managed",       desc: "Hand-tended overnight — no set-and-forget automation" },
  { icon: IcoMapPin,       title: "Hernando, MS",       desc: "Family owned, serving DeSoto County since 1994" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={ref} className="section-pad" style={{ background: "var(--pit)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(48px,8vw,96px)", alignItems: "center" }}>

          {/* Visual column */}
          <div className="reveal" style={{ position: "relative" }}>
            {/* Main frame */}
            <div style={{
              aspectRatio: "4/5",
              border: "1px solid var(--border)",
              borderRadius: 4,
              position: "relative",
              overflow: "hidden",
            }}>
              <img
                src="https://images.unsplash.com/photo-1763686810851-2d3f46f23e9d?auto=format&fit=crop&w=800&q=80"
                alt="Pitmasters cooking on a large outdoor smoker"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              {/* Bottom gradient overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.72) 100%)",
              }} />
              {/* Overlay label */}
              <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                <span className="font-condensed" style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
                }}>
                  Hernando, MS · Est. 1994
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              width: 116, height: 116,
              background: "var(--fire)", borderRadius: "50%",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              textAlign: "center",
              boxShadow: "0 0 40px rgba(232,67,10,0.3)",
            }}>
              <span className="font-display" style={{ fontSize: 38, lineHeight: 1, color: "#fff" }}>#1</span>
              <span className="font-condensed" style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.85)", lineHeight: 1.3,
              }}>BBQ in<br />DeSoto Co.</span>
            </div>
          </div>

          {/* Content column */}
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: 16 }}>Our Story</p>
            <h2 className="font-display reveal reveal-delay-1" style={{
              fontSize: "clamp(44px,6vw,76px)", lineHeight: 0.9,
              letterSpacing: "0.02em", color: "#fff", marginBottom: 28,
            }}>
              BUILT ON WOOD,<br />WATER &amp;<br />PATIENCE
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 17, color: "var(--bone)", lineHeight: 1.75, marginBottom: 18 }}>
              Red Oak Smokehouse started in Bobby Earl Puckett&apos;s backyard in 1994 — a
              welded offset smoker, a pile of red oak from down the road, and a determination
              to do BBQ the right way.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 17, color: "var(--bone)", lineHeight: 1.75, marginBottom: 40 }}>
              Thirty years later, the pit looks different but the method hasn&apos;t changed.
              We start before dawn every morning so your brisket has 14 hours of smoke behind
              it by lunchtime. Nothing here is rushed.
            </p>

            {/* Features grid */}
            <div className="reveal reveal-delay-4" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 44,
            }}>
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 36, height: 36, flexShrink: 0,
                    background: "rgba(232,67,10,0.1)",
                    border: "1px solid rgba(232,67,10,0.2)",
                    borderRadius: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--fire)",
                  }}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="font-condensed" style={{
                      fontSize: 15, fontWeight: 700, letterSpacing: "0.04em",
                      textTransform: "uppercase", color: "var(--cream)", lineHeight: 1.2,
                    }}>
                      {title}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--stone)", marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#menu" className="btn btn-fire reveal reveal-delay-5">
              See What&apos;s On The Pit <IcoArrow size={15} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
