"use client";

import { useEffect, useState } from "react";
import { IG_DM_URL } from "@/lib/payments";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(250,250,248,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      {/* Wordmark — absolutely centered so it's optically centred regardless of CTA width */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
          gap: "0.25em",
          color: scrolled ? "var(--color-ink)" : "#ffffff",
          textShadow: scrolled ? "none" : "0 0 32px rgba(255,255,255,0.25), 0 1px 10px rgba(0,0,0,0.4)",
          transition: "color 0.4s ease, text-shadow 0.4s ease",
        }}
      >
        <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: "1.9rem", letterSpacing: "0.01em" }}>
          Orpu
        </span>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.65rem", letterSpacing: "0.24em", textTransform: "uppercase", opacity: scrolled ? 0.7 : 0.9 }}>
          Art House
        </span>
      </span>

      <a
        href={IG_DM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          fontFamily: "var(--font-sans)",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: scrolled ? "var(--color-accent)" : "#ffffff",
          textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.45)",
          border: `1px solid ${scrolled ? "rgba(170,53,54,0.35)" : "rgba(255,255,255,0.6)"}`,
          padding: "0.45rem 0.9rem",
          borderRadius: "2px",
          transition: "all 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        <span className="header-cta-full">Message on Instagram</span>
        <span className="header-cta-short">Instagram</span>
      </a>

      <style>{`
        .header-cta-short { display: none; }
        @media (max-width: 480px) {
          .header-cta-full { display: none; }
          .header-cta-short { display: inline; }
        }
      `}</style>
    </header>
  );
}
