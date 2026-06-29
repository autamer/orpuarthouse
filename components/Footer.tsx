const IG_PROFILE_URL = "https://instagram.com/orpuarthouse";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "2.5rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.25rem",
      }}
    >
      {/* Wordmark — matches header */}
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
          gap: "0.25em",
          color: "var(--color-ink)",
        }}
      >
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "1.9rem", letterSpacing: "0.01em" }}>
          Orpu
        </span>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.24em", textTransform: "uppercase", opacity: 0.7 }}>
          Art House
        </span>
      </span>

      <a
        href={IG_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-ink-muted)",
          borderBottom: "1px solid var(--color-border)",
          paddingBottom: "0.15rem",
        }}
      >
        @orpuarthouse
      </a>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.6875rem",
          color: "var(--color-ink-muted)",
          letterSpacing: "0.05em",
        }}
      >
        © 2026 Orpu Art House. All rights reserved.
      </p>
    </footer>
  );
}
