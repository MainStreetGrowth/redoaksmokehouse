"use client";
import { useEffect, useRef } from "react";

const PHOTOS = [
  { id: "photo-1605494708467-59cc8ebbe337", alt: "Pitmaster hand-slicing smoked brisket",      span: "wide" },
  { id: "photo-1679711246825-1f2bd51b16d0", alt: "Rack of ribs on the pit",                    span: "tall" },
  { id: "photo-1770306924163-bae5a2d28c6d", alt: "Red oak logs burning in the fire pit",       span: "sq"   },
  { id: "photo-1763686810851-2d3f46f23e9d", alt: "Crew working a large outdoor grill",         span: "sq"   },
  { id: "photo-1544025162-d76694265947",    alt: "Smoked ribs with tomatoes and potatoes",     span: "sq"   },
  { id: "photo-1529193591184-b1d58069ecdd", alt: "Board of grilled meats",                     span: "wide" },
  { id: "photo-1767025981895-612849f47558", alt: "Red oak wood burning with blue smoke",       span: "sq"   },
  { id: "photo-1763027471381-ed28484b2950", alt: "Flames dancing in a rustic fire pit",        span: "sq"   },
];

export default function PhotoGallery() {
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
    <section ref={ref} style={{ background: "var(--coal)", paddingTop: "clamp(64px,8vw,96px)", paddingBottom: "clamp(64px,8vw,96px)" }}>
      <div className="container">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Life at the Pit</p>
          <h2 className="font-display" style={{
            fontSize: "clamp(40px,5.5vw,68px)", lineHeight: 0.92,
            letterSpacing: "0.02em", color: "#fff",
          }}>
            SMOKE, FIRE<br />&amp; GOOD FOOD
          </h2>
        </div>

        {/* Mosaic grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
          gap: 3,
        }}>
          {PHOTOS.map(({ id, alt, span }, i) => (
            <div
              key={id}
              className={`reveal reveal-delay-${(i % 4) + 1}`}
              style={{
                gridColumn: span === "wide" ? "span 2" : "span 1",
                gridRow:    span === "tall" ? "span 2" : "span 1",
                aspectRatio: span === "tall" ? "auto" : span === "wide" ? "16/7" : "1/1",
                minHeight: span === "tall" ? 420 : "auto",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${span === "wide" ? "1000" : "600"}&q=80`}
                alt={alt}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              />
              {/* Subtle dark vignette */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 60%)",
              }} />
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="reveal font-condensed" style={{
          textAlign: "center", marginTop: 28,
          fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--stone)",
        }}>
          Hernando, Mississippi · Open Tue–Sun
        </p>
      </div>
    </section>
  );
}
