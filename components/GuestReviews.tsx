"use client";
import { useEffect, useRef } from "react";
import { IcoStar, IcoGoogle } from "./Icons";

const REVIEWS = [
  {
    initials: "DW",
    name: "Dale W.",
    location: "Hernando, MS",
    text: "Best brisket I've had outside of Texas. The smoke ring alone tells you this place knows what they're doing. Been coming every Friday for two years.",
    stars: 5,
  },
  {
    initials: "ST",
    name: "Sheila T.",
    location: "Horn Lake, MS",
    text: "Ordered a full catering spread for my daughter's graduation. Bobby Earl and his crew showed up on time, the food was incredible, and everyone left with leftovers. Already booked them again.",
    stars: 5,
  },
  {
    initials: "MJ",
    name: "Marcus J.",
    location: "Memphis, TN",
    text: "The pulled pork sandwich is something else. They pile it high, the slaw is house-made, and the sauce has a kick that sneaks up on you. Drove 45 minutes and I'd do it again tomorrow.",
    stars: 5,
  },
  {
    initials: "KR",
    name: "Kim R.",
    location: "Southaven, MS",
    text: "I've tried most BBQ spots in north Mississippi. Red Oak is in a different league. The ribs have the perfect bite — not falling off the bone, not too tough. Just right.",
    stars: 5,
  },
  {
    initials: "TH",
    name: "Tommy H.",
    location: "Hernando, MS",
    text: "The pit beans alone are worth the trip. Smoked with brisket drippings — you can taste the difference. Haven't ordered anywhere else since I found this place.",
    stars: 5,
  },
  {
    initials: "AL",
    name: "Angela L.",
    location: "Olive Branch, MS",
    text: "Took my parents here for Father's Day. Dad said it was the best BBQ he's had in 30 years. High praise from a man who grew up in the Delta. We'll be back.",
    stars: 5,
  },
];

export default function GuestReviews() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref} className="section-pad grain" style={{ background: "var(--coal)" }}>
      <div className="container">
        {/* Header row */}
        <div className="reveal" style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24, marginBottom: 52,
        }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 14 }}>What People Say</p>
            <h2 className="font-display" style={{
              fontSize: "clamp(40px,5.5vw,68px)", lineHeight: 0.92,
              letterSpacing: "0.02em", color: "#fff",
            }}>
              THE TOWN<br />AGREES
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ display: "flex", gap: 3, justifyContent: "flex-end", marginBottom: 6 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IcoStar key={i} size={22} style={{ color: "var(--gold)", fill: "var(--gold)", stroke: "none" }} />
              ))}
            </div>
            <p className="font-condensed" style={{
              fontSize: 13, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--stone)",
            }}>
              4.9 / 5 on Google · 340+ Reviews
            </p>
          </div>
        </div>

        {/* Review grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
          {REVIEWS.map(({ initials, name, location, text, stars }, i) => (
            <div
              key={name}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "var(--smoke)", border: "1px solid var(--border)",
                padding: "32px 28px",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 2, marginBottom: 18 }}>
                {Array.from({ length: stars }).map((_, j) => (
                  <IcoStar key={j} size={14} style={{ color: "var(--gold)", fill: "var(--gold)", stroke: "none" }} />
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontSize: 15, color: "var(--bone)", lineHeight: 1.75,
                marginBottom: 24, fontStyle: "italic",
              }}>
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                  background: "rgba(232,67,10,0.1)", border: "1px solid rgba(232,67,10,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--fire)",
                }}>
                  <span className="font-condensed" style={{ fontSize: 13, fontWeight: 700 }}>{initials}</span>
                </div>
                <div>
                  <div className="font-condensed" style={{
                    fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", color: "#fff",
                  }}>
                    {name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                    <IcoGoogle size={11} />
                    <span style={{ fontSize: 12, color: "var(--stone)" }}>{location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a
            href="#"
            className="font-condensed"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--fire)", borderBottom: "1px solid rgba(232,67,10,0.35)", paddingBottom: 2,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ember)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fire)"; }}
          >
            <IcoGoogle size={14} /> Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
