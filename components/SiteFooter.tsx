"use client";
import { IcoFacebook, IcoInstagram, IcoGoogle, IcoPhone, IcoMapPin } from "./Icons";

const NAV_COLS = [
  {
    title: "Visit",
    links: [
      { label: "Full Menu",        href: "#menu" },
      { label: "Our Story",        href: "#story" },
      { label: "Hours & Location", href: "#find-us" },
      { label: "Catering",         href: "#catering" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "(662) 555-1847",            href: "tel:+16625551847" },
      { label: "info@redoaksmokehouse.com", href: "mailto:info@redoaksmokehouse.com" },
      { label: "412 Commerce St, Hernando", href: "https://maps.google.com" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid var(--border)" }}>
      <div className="container" style={{ padding: "clamp(48px,7vw,72px) clamp(20px,5vw,56px) 32px" }}>

        {/* Top row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          flexWrap: "wrap", gap: 48,
          paddingBottom: 48, borderBottom: "1px solid var(--border)",
          marginBottom: 32,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div style={{ marginBottom: 16 }}>
              <span className="font-display" style={{ fontSize: "1.3rem", letterSpacing: "0.06em", color: "#fff" }}>
                RED OAK
              </span>
              <br />
              <span className="font-condensed" style={{
                fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "var(--fire)",
              }}>
                Smokehouse · Est. 1994
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.7 }}>
              Real pit BBQ smoked over red oak wood in Hernando, Mississippi.
              Family owned and operated for over 30 years.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {[
                { icon: IcoFacebook, label: "Facebook" },
                { icon: IcoInstagram, label: "Instagram" },
                { icon: IcoGoogle, label: "Google" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    width: 36, height: 36,
                    background: "var(--smoke)", border: "1px solid var(--border)",
                    borderRadius: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--stone)",
                    transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--fire)";
                    el.style.borderColor = "rgba(232,67,10,0.3)";
                    el.style.background = "rgba(232,67,10,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--stone)";
                    el.style.borderColor = "var(--border)";
                    el.style.background = "var(--smoke)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          <div style={{ display: "flex", gap: "clamp(40px,7vw,80px)", flexWrap: "wrap" }}>
            {NAV_COLS.map(({ title, links }) => (
              <div key={title}>
                <p className="font-condensed" style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
                  textTransform: "uppercase", color: "var(--fire)", marginBottom: 20,
                }}>
                  {title}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="font-condensed"
                      style={{
                        fontSize: 14, fontWeight: 500, color: "var(--stone)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--cream)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--stone)"; }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div style={{ minWidth: 200 }}>
            <p className="font-condensed" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--fire)", marginBottom: 20,
            }}>
              Quick Links
            </p>
            <a href="tel:+16625551847" className="btn btn-fire" style={{ marginBottom: 10, justifyContent: "center", width: "100%", padding: "12px 20px", fontSize: 14 }}>
              <IcoPhone size={14} /> Call Now
            </a>
            <a href="#find-us" className="btn btn-ghost" style={{ justifyContent: "center", width: "100%", padding: "11px 20px", fontSize: 14 }}>
              <IcoMapPin size={14} /> Directions
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "var(--stone)" }}>
            &copy; 2024 Red Oak Smokehouse · Website by{" "}
            <a href="#" style={{ color: "var(--fire)", transition: "opacity 0.2s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              Main Street Growth
            </a>
          </p>
          <p className="font-condensed" style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", color: "var(--stone)",
          }}>
            Low &amp; Slow · <span style={{ color: "var(--fire)" }}>Always</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
