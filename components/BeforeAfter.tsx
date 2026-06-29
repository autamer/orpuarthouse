"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Pair = {
  label: string;
  beforeSrc: string;
  beforePoster: string;
  beforeIsVideo: boolean;
  afterSrc: string;
  afterAlt: string;
};

const PAIRS: Pair[] = [
  {
    label: "Ethnic kurta",
    beforeSrc: "/media/ethnic-yellow-process-01-poster.jpg",
    beforePoster: "/media/ethnic-yellow-process-01-poster.jpg",
    beforeIsVideo: false,
    afterSrc: "/media/ethnic-yellow-kurta-final.jpg",
    afterAlt: "Finished ethnic yellow kurta illustration",
  },
  {
    label: "Red cape",
    beforeSrc: "/media/red-cape-process-01-poster.jpg",
    beforePoster: "/media/red-cape-process-01-poster.jpg",
    beforeIsVideo: false,
    afterSrc: "/media/render-red-cape-01.jpg",
    afterAlt: "Finished red cape render",
  },
  {
    label: "Grey gown",
    beforeSrc: "/media/grey-gown-process-full-poster.jpg",
    beforePoster: "/media/grey-gown-process-full-poster.jpg",
    beforeIsVideo: false,
    afterSrc: "/media/render-grey-gown-wip.jpg",
    afterAlt: "Finished grey gown render",
  },
];

function PairCard({ pair }: { pair: Pair }) {
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isTouch = useRef(false);

  return (
    <div ref={cardRef} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <p style={{ marginBottom: "0.75rem", textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.9375rem", color: "var(--color-ink-muted)" }}>
        {pair.label}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          position: "relative",
        }}
      >
        {/* Before */}
        <div
          style={{
            position: "relative",
            aspectRatio: "3/4",
            overflow: "hidden",
            borderRadius: "2px",
            background: "var(--color-surface)",
          }}
        >
          <Image
            src={pair.beforeSrc}
            alt={`${pair.label} — sketch / process`}
            fill
            sizes="(max-width: 768px) 45vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* After — reveals on hover/tap */}
        <div
          style={{
            position: "relative",
            aspectRatio: "3/4",
            overflow: "hidden",
            borderRadius: "2px",
            background: "var(--color-surface)",
            cursor: "pointer",
          }}
          onPointerEnter={(e) => { if (e.pointerType === "mouse") setRevealed(true); }}
          onPointerLeave={(e) => { if (e.pointerType === "mouse") setRevealed(false); }}
          onClick={() => setRevealed((r) => !r)}
        >
          {/* Blur veil that fades out on reveal */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              backdropFilter: revealed ? "blur(0px)" : "blur(8px)",
              background: revealed ? "transparent" : "rgba(250,250,248,0.35)",
              transition: "backdrop-filter 0.6s var(--ease-out-expo), background 0.6s var(--ease-out-expo)",
            }}
          />
          <Image
            src={pair.afterSrc}
            alt={pair.afterAlt}
            fill
            sizes="(max-width: 768px) 45vw, 33vw"
            style={{
              objectFit: "cover",
              transform: revealed ? "scale(1)" : "scale(1.04)",
              transition: "transform 0.7s var(--ease-out-expo)",
            }}
          />
          {/* tap-to-reveal hint — fades once revealed */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: revealed ? 0 : 1,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
            }}
          >
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "0.875rem", color: "rgba(255,255,255,0.8)" }}>
              tap
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div className="section" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="reveal" style={{ marginBottom: "3.5rem", maxWidth: 520 }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Every finished piece starts from nothing.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--color-ink-muted)",
              lineHeight: 1.7,
            }}
          >
            Tap each finished piece to reveal where it started.
            This is the transformation you&rsquo;ll learn.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "4rem",
          }}
        >
          {PAIRS.map((pair, i) => (
            <div
              key={pair.label}
              className={`reveal reveal-delay-${i + 1}`}
            >
              <PairCard pair={pair} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
