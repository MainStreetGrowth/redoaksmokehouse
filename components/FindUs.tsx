"use client";
import { IcoClock, IcoMapPin, IcoPhone, IcoMail, IcoInstagram, IcoFacebook, IcoGoogle } from "./Icons";

const HOURS = [
  { day: "Monday",    time: "Closed",       open: false },
  { day: "Tue – Thu", time: "11am – 8pm",   open: true },
  { day: "Friday",    time: "11am – 9pm",   open: true },
  { day: "Saturday",  time: "10am – 9pm",   open: true },
  { day: "Sunday",    time: "11am – 7pm",   open: true },
];

export default function FindUs() {
  return (
    <section id="find-us" className="section-pad" style={{ background: "var(--pit)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>

          {/* Hours */}
          <div style={{ background: "var(--smoke)", border: "1px solid var(--border)", padding: "44px 36px" }}>
            <div style={{ color: "var(--fire)", marginBottom: 20 }}>
              <IcoClock size={32} />
            </div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>Hours</p>
            <div>
              {HOURS.map(({ day, time, open }) => (
                <div key={day} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "10px 0", borderBottom: "1px solid var(--border)",
                }}>
                  <span className="font-condensed" style={{
                    fontSize: 15, fontWeight: 600, letterSpacing: "0.04em", color: "var(--cream)",
                  }}>
                    {day}
                  </span>
                  <span className="font-condensed" style={{
                    fontSize: 14, fontWeight: 600,
                    color: open ? "var(--fire)" : "var(--stone)",
                  }}>
                    {time}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "var(--stone)", marginTop: 18, lineHeight: 1.6 }}>
              We often sell out on weekdays. Call ahead to reserve brisket and ribs.
            </p>
          </div>

          {/* Location */}
          <div style={{ background: "var(--smoke)", border: "1px solid var(--border)", padding: "44px 36px" }}>
            <div style={{ color: "var(--fire)", marginBottom: 20 }}>
              <IcoMapPin size={32} />
            </div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>Find Us</p>
            <p className="font-condensed" style={{
              fontSize: 19, fontWeight: 600, lineHeight: 1.5, color: "var(--cream)", marginBottom: 6,
            }}>
              412 Commerce Street
            </p>
            <p style={{ fontSize: 15, color: "var(--stone)", marginBottom: 28 }}>
              Hernando, Mississippi 38632
            </p>

            {/* Map placeholder */}
            <div style={{
              aspectRatio: "4/3",
              background: "var(--ash)", border: "1px solid var(--border)", borderRadius: 3,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 12,
              position: "relative", overflow: "hidden",
            }}>
              {/* Grid lines */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }} viewBox="0 0 300 225" preserveAspectRatio="none">
                {Array.from({ length: 9 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 28} x2="300" y2={i * 28} stroke="white" strokeWidth="1" />)}
                {Array.from({ length: 11 }).map((_, i) => <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="225" stroke="white" strokeWidth="1" />)}
              </svg>
              <IcoMapPin size={32} style={{ color: "var(--fire)", position: "relative" }} />
              <span className="font-condensed" style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "var(--bone)", position: "relative",
              }}>
                Hernando, MS
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed"
                style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "var(--fire)",
                  position: "absolute", bottom: 12,
                  display: "flex", alignItems: "center", gap: 4,
                }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div style={{ background: "var(--smoke)", border: "1px solid var(--border)", padding: "44px 36px" }}>
            <div style={{ color: "var(--fire)", marginBottom: 20 }}>
              <IcoPhone size={32} />
            </div>
            <p className="eyebrow" style={{ marginBottom: 24 }}>Get in Touch</p>

            <a
              href="tel:+16625551847"
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.5vw,36px)", color: "#fff", display: "block",
                marginBottom: 10, letterSpacing: "0.02em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fire)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            >
              (662) 555-1847
            </a>
            <p style={{ fontSize: 14, color: "var(--stone)", marginBottom: 32, lineHeight: 1.65 }}>
              We answer from 9am – close. Best way to reach us — leave a message and we&apos;ll call back same day.
            </p>

            {/* Email */}
            <a
              href="mailto:info@redoaksmokehouse.com"
              style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 28,
                color: "var(--bone)", transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fire)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--bone)"; }}
            >
              <IcoMail size={16} />
              <span className="font-condensed" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.06em" }}>
                info@redoaksmokehouse.com
              </span>
            </a>

            <div style={{ height: 1, background: "var(--border)", marginBottom: 28 }} />

            {/* Social */}
            <p className="font-condensed" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "var(--stone)", marginBottom: 16,
            }}>
              Follow Along
            </p>
            <div style={{ display: "flex", gap: 10 }}>
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
                    width: 40, height: 40,
                    background: "var(--ash)", border: "1px solid var(--border-lt)",
                    borderRadius: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--bone)",
                    transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(232,67,10,0.1)";
                    el.style.borderColor = "rgba(232,67,10,0.3)";
                    el.style.color = "var(--fire)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--ash)";
                    el.style.borderColor = "var(--border-lt)";
                    el.style.color = "var(--bone)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
