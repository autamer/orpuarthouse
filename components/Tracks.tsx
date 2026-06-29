"use client";

import { useRef, useState } from "react";
import { IG_DM_URL } from "@/lib/payments";

type Track = {
  label: string;
  title: string;
  description: string;
  videoSrc: string;
  poster: string;
};

const TRACKS: Track[] = [
  {
    label: "Track 01",
    title: "Fashion Croquis & Figure Sketching",
    description:
      "Master the fashion figure in graphite. Proportions, poses, and the gesture that makes a croquis feel alive.",
    videoSrc: "/media/croquis-sketching-process.mp4",
    poster: "/media/croquis-sketching-process-poster.jpg",
  },
  {
    label: "Track 02",
    title: "Garment Rendering",
    description:
      "Colored pencil techniques for drape, sheen, texture, and silhouette. This is the work that makes you stop scrolling.",
    videoSrc: "/media/grey-gown-process-full.mp4",
    poster: "/media/grey-gown-process-full-poster.jpg",
  },
  {
    label: "Track 03",
    title: "Ethnic & Indian-Wear Illustration",
    description:
      "Dupattas, embroidery detail, traditional silhouettes — the subject most illustration teachers skip.",
    videoSrc: "/media/ethnic-yellow-process-01.mp4",
    poster: "/media/ethnic-yellow-process-01-poster.jpg",
  },
  {
    label: "Track 04",
    title: "Color & Texture Techniques",
    description:
      "How to layer colored pencil for fabric sheen, skin tone, and realistic texture — the finishing skills that separate a sketch from a render.",
    videoSrc: "/media/texture-coloring-process.mp4",
    poster: "/media/texture-coloring-process-poster.jpg",
  },
];

function TrackCard({ track, index }: { track: Track; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    setActive(true);
    videoRef.current?.play();
  };
  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    setActive(false);
    const v = videoRef.current;
    if (v) { v.pause(); v.currentTime = 0; }
  };
  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (active) { v.pause(); v.currentTime = 0; setActive(false); }
    else { v.play(); setActive(true); }
  };

  return (
    <div
      className={`reveal reveal-delay-${index + 1}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* Video thumbnail */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3/4",
          overflow: "hidden",
          borderRadius: "2px",
          background: "var(--color-surface)",
          marginBottom: "1.5rem",
        }}
      >
        <video
          ref={videoRef}
          src={track.videoSrc}
          poster={track.poster}
          muted
          playsInline
          loop
          preload="none"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: active ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.8s var(--ease-out-expo)",
          }}
        />
        {/* Subtle gradient at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, rgba(20,14,12,0.5), transparent)",
          }}
        />
      </div>

      {/* Text */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.375rem",
          fontWeight: 400,
          marginBottom: "0.625rem",
          color: "var(--color-ink)",
        }}
      >
        {track.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          color: "var(--color-ink-muted)",
          lineHeight: 1.7,
          marginBottom: "1.25rem",
        }}
      >
        {track.description}
      </p>
      <a
        href={IG_DM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "0.9375rem",
          color: "var(--color-accent)",
        }}
      >
        Ask about this track →

      </a>
    </div>
  );
}

export default function Tracks() {
  return (
    <section style={{ background: "var(--color-surface)" }}>
      <div className="section" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="reveal" style={{ marginBottom: "4rem", maxWidth: 560 }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 400,
              marginBottom: "1rem",
            }}
          >
            Four tracks. Choose what you want to learn.
          </h2>
          {/* PLACEHOLDER — offer/topics/pricing TBD */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "var(--color-ink-muted)",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            Topics, format, pricing &amp; schedule coming soon — message on Instagram to register interest.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
          }}
        >
          {TRACKS.map((track, i) => (
            <TrackCard key={track.label} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
