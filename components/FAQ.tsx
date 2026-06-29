"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to know how to draw before starting?",
    a: "No. The classes are designed for beginners — you'll build from absolute basics. If you can hold a pencil, you can start.",
  },
  {
    q: "What materials do I need?",
    a: "Graphite pencils and colored pencils are all you need to start. A specific materials list will be shared when classes open.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "Format is being finalised. Message on Instagram to share your preference — it helps shape how the classes are structured.",
  },
  {
    q: "How much time does each class take?",
    a: "Session length and pace are TBD. Message on Instagram and we'll loop you in when the schedule is set.",
  },
  {
    q: "Are classes available outside India?",
    a: "Yes — the plan is to offer classes internationally. Pricing by region will be available at launch. Message to register interest.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.25rem 0",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          padding: 0,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.125rem",
            fontWeight: 400,
            color: "var(--color-ink)",
            lineHeight: 1.35,
          }}
        >
          {q}
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.2rem",
            color: "var(--color-ink-muted)",
            flexShrink: 0,
            marginTop: "0.1rem",
            transform: open ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.3s var(--ease-out-expo)",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>

      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 400 : 0,
          opacity: open ? 1 : 0,
          transition:
            "max-height 0.45s var(--ease-out-expo), opacity 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            color: "var(--color-ink-muted)",
            lineHeight: 1.75,
            paddingTop: "0.75rem",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div className="section" style={{ maxWidth: 720 }}>
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 2.75rem)",
              fontWeight: 400,
            }}
          >
            Asked before you asked.
          </h2>
        </div>

        <div className="reveal reveal-delay-1">
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
