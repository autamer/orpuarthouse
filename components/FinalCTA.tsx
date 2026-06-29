import { IG_DM_URL } from "@/lib/payments";

export default function FinalCTA() {
  return (
    <section
      style={{
        background: "var(--color-ink)",
        padding: "clamp(3rem, 7vw, 5rem) 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "2rem",
            fontStyle: "italic",
          }}
        >
          Message me &ldquo;CLASSES&rdquo;<br />on Instagram.
        </h2>
        <a
          href={IG_DM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "var(--color-accent)",
            color: "#ffffff",
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "1rem 2.25rem",
            borderRadius: "1px",
          }}
        >
          Open Instagram DM →
        </a>
      </div>
    </section>
  );
}
