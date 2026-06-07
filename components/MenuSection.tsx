"use client";
import { useState, useEffect, useRef } from "react";

type Tag = "bestseller" | "new" | "weekend" | null;
interface MenuItem { name: string; desc: string; price: string; tag: Tag; img?: string; }
interface Category { label: string; items: MenuItem[]; }

const CATEGORIES: Category[] = [
  {
    label: "Smoked Meats",
    items: [
      { name: "Texas Brisket",      price: "$18", tag: "bestseller", img: "photo-1623174025518-b49000fb653d", desc: "14-hour oak-smoked brisket, hand-sliced to order. Point or flat — your choice. Bark crust and smoke ring guaranteed." },
      { name: "St. Louis Ribs",     price: "$24", tag: "bestseller", img: "photo-1565299524732-d2149c7eabf5", desc: "Full rack smoked 6 hours, finished with our house glaze. Fall-off-the-bone with a slight tug." },
      { name: "Pulled Pork",        price: "$14", tag: "bestseller", img: "photo-1544025162-d76694265947", desc: "Whole Boston butt smoked 12 hours, pulled by hand. Sauced or dry — your call." },
      { name: "Smoked Chicken",     price: "$12", tag: null,         img: "photo-1567932847833-ecb7e227c2a3", desc: "Half bird, brined overnight and smoked until the skin crisps golden. Whole bird available weekends." },
      { name: "Smoked Sausage",     price: "$10", tag: null,         img: "photo-1586058584825-c1e87ed735b4", desc: "House-blend pork and beef links smoked in-house. Snappy casing, served with jalapeños and onion." },
      { name: "Whole Hog",          price: "Market", tag: "weekend", img: "photo-1558030137-a56c1b004fa3", desc: "Ordered 48 hrs in advance only. Serves 30–50 people. The crown jewel of any event." },
    ],
  },
  {
    label: "Plates & Combos",
    items: [
      { name: "2-Meat Plate",       price: "$21", tag: null,         img: "photo-1529193591184-b1d58069ecdd", desc: "Any two meats with two sides and white bread. The reliable Saturday lunch." },
      { name: "Pitmaster Plate",    price: "$32", tag: "new",        img: "photo-1723437395525-77b08e41e53c", desc: "Brisket, ribs, pulled pork, two sides, and pickles. Built for serious hunger." },
      { name: "Brisket Sandwich",   price: "$13", tag: "bestseller", img: "photo-1624384453081-d6cabc69cab9", desc: "Sliced brisket on a toasted bun with slaw and house sauce. Simple and perfect." },
      { name: "Pulled Pork Sandwich",price:"$11", tag: null,         img: "photo-1558030137-d464dd688b00", desc: "Generous pile of pulled pork with house slaw. The most ordered item at the counter." },
      { name: "Kids Plate",         price: "$8",  tag: null,         img: "photo-1611354574034-9655b5b72d59", desc: "Pulled pork or chicken, one side, and a drink. For the littles who know good BBQ." },
      { name: "Family Pack",        price: "$64", tag: null,         img: "photo-1569352304334-6e422cd70ecd", desc: "Feeds 4–5. Two meats, four sides, cornbread. Great for taking home." },
    ],
  },
  {
    label: "Sides",
    items: [
      { name: "Pit Beans",          price: "$4",  tag: "bestseller", desc: "Slow-cooked in the smoker with brisket drippings. Smoky, sweet, and thick." },
      { name: "Coleslaw",           price: "$3",  tag: null,         desc: "House-made daily. Creamy with a little vinegar kick. Goes on everything." },
      { name: "Mac & Cheese",       price: "$4",  tag: "bestseller", desc: "Baked in the oven, not scooped from a pot. Crispy top, creamy inside." },
      { name: "Potato Salad",       price: "$3",  tag: null,         desc: "Old-school Southern-style. No frills, just flavor." },
      { name: "Cornbread",          price: "$2",  tag: null,         desc: "Cast-iron baked, served warm. One piece or a whole skillet." },
      { name: "Pickles & Onions",   price: "$1",  tag: null,         desc: "House-pickled. The right accompaniment to great brisket." },
    ],
  },
  {
    label: "Drinks",
    items: [
      { name: "Sweet Tea",          price: "$3",  tag: "bestseller", desc: "Mississippi-style. If you have to ask how sweet, you're not from around here." },
      { name: "Unsweet Tea",        price: "$3",  tag: null,         desc: "For the folks watching their sugar. We don't judge." },
      { name: "Lemonade",           price: "$3",  tag: null,         desc: "Fresh-squeezed daily. Pairs well with everything on the menu." },
      { name: "Fountain Drinks",    price: "$2",  tag: null,         desc: "Coke, Diet Coke, Sprite, Dr Pepper." },
      { name: "Bottled Water",      price: "$1",  tag: null,         desc: "Ice cold." },
      { name: "Locally Brewed Floats",price: "$5",tag: "new",        desc: "Root beer float made with locally brewed craft root beer. Weekend only." },
    ],
  },
];

const TAG_STYLES: Record<NonNullable<Tag>, { bg: string; color: string; label: string }> = {
  bestseller: { bg: "rgba(232,67,10,0.12)", color: "var(--fire)",  label: "Best Seller" },
  new:        { bg: "rgba(212,168,67,0.12)", color: "var(--gold)", label: "New" },
  weekend:    { bg: "rgba(255,255,255,0.06)", color: "var(--bone)", label: "Weekend Only" },
};

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = CATEGORIES[active].items;

  return (
    <section id="menu" ref={ref} className="section-pad grain" style={{ background: "var(--coal)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <p className="eyebrow reveal" style={{ marginBottom: 14 }}>The Menu</p>
          <h2 className="font-display reveal reveal-delay-1" style={{
            fontSize: "clamp(44px,6.5vw,80px)", lineHeight: 0.9,
            letterSpacing: "0.02em", color: "#fff",
          }}>
            SMOKED, SLICED<br />&amp; SERVED HOT
          </h2>
          <p className="reveal reveal-delay-2" style={{
            fontSize: 17, color: "var(--bone)",
            maxWidth: 440, margin: "18px auto 0",
            lineHeight: 1.65,
          }}>
            Everything cooked fresh daily. When it&apos;s gone, it&apos;s gone — call ahead for brisket and ribs.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal reveal-delay-2" style={{
          display: "flex", justifyContent: "center", marginTop: 48, marginBottom: 52,
        }}>
          <div style={{
            display: "inline-flex", gap: 3, padding: 5,
            background: "var(--smoke)", border: "1px solid var(--border)", borderRadius: 5,
          }}>
            {CATEGORIES.map(({ label }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className="font-condensed"
                style={{
                  fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  padding: "10px 22px", borderRadius: 3,
                  background: active === i ? "var(--fire)" : "transparent",
                  color: active === i ? "#fff" : "var(--bone)",
                  border: "none",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
          {items.map(({ name, desc, price, tag, img }) => (
            <div
              key={name}
              className="reveal"
              style={{
                background: "var(--smoke)", border: "1px solid var(--border)",
                transition: "background 0.2s ease, border-color 0.2s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#252525";
                el.style.borderColor = "rgba(232,67,10,0.22)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--smoke)";
                el.style.borderColor = "var(--border)";
              }}
            >
              {/* Food photo */}
              {img && (
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <img
                    src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=600&q=75`}
                    alt={name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)",
                  }} />
                </div>
              )}
              <div style={{ padding: "24px 28px 22px" }}>
              <div className="font-condensed" style={{
                fontSize: 18, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                color: "#fff", marginBottom: 8,
              }}>
                {name}
              </div>
              <p style={{ fontSize: 13, color: "var(--stone)", lineHeight: 1.65, marginBottom: 20 }}>
                {desc}
              </p>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: 16, borderTop: "1px solid var(--border)",
              }}>
                <span className="font-display" style={{ fontSize: 26, color: "var(--fire)" }}>
                  {price}
                </span>
                {tag && (
                  <span className="font-condensed" style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
                    padding: "4px 10px", borderRadius: 2,
                    background: TAG_STYLES[tag].bg,
                    color: TAG_STYLES[tag].color,
                    border: `1px solid ${TAG_STYLES[tag].color}40`,
                  }}>
                    {TAG_STYLES[tag].label}
                  </span>
                )}
              </div>
              </div>{/* end inner padding div */}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="tel:+16625551847" className="btn btn-ghost">
            Call Ahead for Large Orders
          </a>
        </div>
      </div>
    </section>
  );
}
