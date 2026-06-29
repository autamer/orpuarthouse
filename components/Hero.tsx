"use client";

import { useEffect, useRef, useState } from "react";
import { IG_DM_URL } from "@/lib/payments";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => setLoaded(true);
    v.addEventListener("canplaythrough", onLoaded);
    return () => v.removeEventListener("canplaythrough", onLoaded);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        minHeight: 600,
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Poster fallback */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url('/media/grey-gown-process-full-poster.jpg') center 25%/cover no-repeat`,
        }}
      />

      {/* Process footage — sunlit hand + gown, looped silently */}
      <video
        ref={videoRef}
        src="/media/grey-gown-process-full.mp4"
        poster="/media/grey-gown-process-full-poster.jpg"
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 25%",
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      />

      {/* Layered veils: top bar for header, bottom for CTA, left column for text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: [
            /* top-down: grounds the header wordmark */
            "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, transparent 22%)",
            /* left-to-right: scrim behind the text column */
            "linear-gradient(to right, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.22) 50%, transparent 75%)",
            /* bottom-up: keeps CTA area readable */
            "linear-gradient(to top, rgba(10,6,4,0.72) 0%, rgba(10,6,4,0.10) 40%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 1.5rem 4.5rem",
          maxWidth: 640,
          animation: "heroFadeUp 1.1s cubic-bezier(0.16,1,0.3,1) 0.3s both",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.08,
            marginBottom: "1.75rem",
            textShadow: "0 1px 12px rgba(0,0,0,0.25)",
          }}
        >
          Bring fashion
          <br />
          to life on paper.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.92)",
            maxWidth: 400,
            lineHeight: 1.7,
            marginBottom: "2.25rem",
          }}
        >
          Online illustration classes by Poojitha — croquis, garment rendering,
          and ethnic-wear illustration. Beginner-friendly.
        </p>
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
            borderRadius: "1px",
            transition: "background 0.25s ease",
            maxWidth: "100%",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.background = "var(--color-accent-dim)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.background = "var(--color-accent)")
          }
        >
          Message me &ldquo;CLASSES&rdquo; on Instagram
        </a>
      </div>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
