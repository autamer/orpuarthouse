import Image from "next/image";
import { IG_DM_URL } from "@/lib/payments";

export default function About() {
  return (
    <section style={{ background: "var(--color-surface)" }}>
      <div
        className="section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Portrait */}
        <div
          className="reveal"
          style={{
            position: "relative",
            maxWidth: 420,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
              borderRadius: "2px",
            }}
          >
            <Image
              src="/media/portrait-sunglasses.jpg"
              alt="Poojitha — fashion illustrator"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              style={{ objectFit: "cover" }}
              priority={false}
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <div className="reveal" style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                fontWeight: 400,
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}
            >
              A working illustrator opening up her process.
            </h2>
          </div>

          {/* ⚠️ PLACEHOLDER — confirm bio with Poojitha before launch */}
          <div className="reveal reveal-delay-1">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--color-ink-muted)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              I&rsquo;m Poojitha, a fashion illustrator working under Orpu Art House. I
              work in graphite and colored pencil — croquis, garment rendering, and
              ethnic-wear illustration.
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "var(--color-ink-muted)",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              I&rsquo;m drawn to drape, silhouette, and the detail that makes traditional
              wear feel modern on paper. Now I&rsquo;m teaching others to do the same —
              step by step, beginner-friendly.
            </p>
            {/* PLACEHOLDER — confirm bio with Poojitha before launch */}
          </div>

          <div className="reveal reveal-delay-2">
            <a
              href={IG_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                borderBottom: "1px solid var(--color-accent)",
                paddingBottom: "0.15rem",
              }}
            >
              Follow @orpuarthouse on Instagram →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
