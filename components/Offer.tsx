import { IG_DM_URL } from "@/lib/payments";

// PLACEHOLDER — fill in topics, format, level, and pricing when confirmed with Poojitha.
// Phase 2: replace this section with the topic-picker + region-based checkout (see phase2-architecture.md).

const TOPIC_SLOTS = [
  { id: "topic-a", label: "Topic A" },
  { id: "topic-b", label: "Topic B" },
  { id: "topic-c", label: "Topic C" },
];

export default function Offer() {
  return (
    <section style={{ background: "var(--color-ink)" }}>
      <div className="section">
        <div className="reveal" style={{ marginBottom: "3.5rem", maxWidth: 560 }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 400,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Classes — coming soon.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
            }}
          >
            The full offer — topics, schedule, format, and pricing — is being finalised.
            Message on Instagram to register your interest and get notified first.
          </p>
        </div>

        {/* Topic placeholders */}
        <div
          className="reveal reveal-delay-1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {TOPIC_SLOTS.map((slot) => (
            <div
              key={slot.id}
              style={{
                border: "1px dashed rgba(255,255,255,0.18)",
                borderRadius: "2px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span className="label" style={{ color: "rgba(255,255,255,0.28)" }}>
                {/* TODO: fill topic name */}
                {slot.label} — TBD
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.35)",
                  fontStyle: "italic",
                }}
              >
                Topic, format &amp; price TBD
              </span>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-2">
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
              padding: "0.9rem 2rem",
              borderRadius: "2px",
            }}
          >
            Message me "CLASSES" on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
