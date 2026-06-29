import Image from "next/image";

const ITEMS = [
  { src: "/media/portrait-sunglasses.jpg", alt: "Portrait — sunglasses" },
  { src: "/media/stilllife-lamp-01.jpg", alt: "Still life — lamp" },
];

export default function BeyondFashion() {
  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div className="section">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <p className="label" style={{ marginBottom: "0.75rem" }}>Beyond fashion</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--color-ink)",
            }}
          >
            A broader eye.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            maxWidth: 640,
          }}
        >
          {ITEMS.map((item, i) => (
            <div
              key={item.src}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                borderRadius: "2px",
                background: "var(--color-surface)",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
