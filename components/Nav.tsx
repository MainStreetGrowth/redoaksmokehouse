"use client";
import { useState, useEffect } from "react";
import { IcoPhone } from "./Icons";

const LINKS = [
  { label: "Menu",      href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Catering",  href: "#catering" },
  { label: "Find Us",   href: "#find-us" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          height: 68,
          transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          background: scrolled ? "rgba(14,14,14,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div
          className="container"
          style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}
        >
          {/* Logo */}
          <a href="#" style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
            <span
              className="font-display"
              style={{
                fontSize: "1.25rem",
                letterSpacing: "0.06em",
                color: "#fff",
              }}
            >
              RED OAK
            </span>
            <span
              className="font-condensed"
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--fire)",
              }}
            >
              Smokehouse · Hernando, MS
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: "none", gap: 2, listStyle: "none" }} className="md:flex">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-condensed"
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "8px 14px",
                    borderRadius: 3,
                    display: "block",
                    color: "var(--bone)",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="tel:+16625551847"
              className="hidden md:flex font-condensed"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--bone)",
                alignItems: "center",
                gap: 6,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--bone)"; }}
            >
              <IcoPhone size={14} />
              (662) 555-1847
            </a>
            <a href="tel:+16625551847" className="btn btn-fire hidden md:inline-flex" style={{ padding: "10px 24px", fontSize: "14px" }}>
              Order Now
            </a>

            {/* Hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{ display: "flex", flexDirection: "column", gap: 5, padding: 8, background: "none", border: "none" }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: "block", width: 22, height: 2, borderRadius: 2,
                  background: "#fff",
                  transition: "transform 0.25s ease, opacity 0.25s ease",
                  transform: open && i === 0 ? "rotate(45deg) translate(5px,5px)" : open && i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div style={{
        position: "fixed", inset: "68px 0 0 0", zIndex: 49,
        background: "var(--pit)",
        borderTop: "1px solid var(--border)",
        padding: "28px clamp(20px,5vw,40px)",
        display: "flex", flexDirection: "column", gap: 4,
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
        overflowY: "auto",
      }}>
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href} onClick={close}
            className="font-condensed"
            style={{
              fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--cream)", padding: "16px 0",
              borderBottom: "1px solid var(--border)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
            {label}
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </a>
        ))}
        <a href="tel:+16625551847" onClick={close}
          style={{ marginTop: 24, textAlign: "center", padding: 16, background: "var(--fire)", color: "#fff", borderRadius: 3, fontSize: "1rem", fontWeight: 700, letterSpacing: "0.08em" }}
          className="font-condensed"
        >
          Call to Order — (662) 555-1847
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="flex md:hidden" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 40,
        background: "var(--pit)", borderTop: "1px solid var(--border)",
        padding: "10px 16px", gap: 10, boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
      }}>
        <a href="tel:+16625551847" className="btn btn-ghost" style={{ flex: 1, justifyContent: "center", padding: "13px" }}>
          <IcoPhone size={15} /> Call Us
        </a>
        <a href="#menu" className="btn btn-fire" style={{ flex: 1, justifyContent: "center", padding: "13px" }}>
          View Menu
        </a>
      </div>
    </>
  );
}
