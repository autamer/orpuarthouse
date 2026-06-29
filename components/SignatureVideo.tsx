"use client";

import { useRef, useState } from "react";

export default function SignatureVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play();
      setPlaying(true);
    }
  };

  return (
    <section
      style={{
        background: "var(--color-ink)",
        padding: "0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(3rem, 7vw, 5rem) 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div style={{ maxWidth: 520 }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "#ffffff",
              marginBottom: "1.25rem",
              fontStyle: "italic",
            }}
          >
            From blank paper to finished gown.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.7,
            }}
          >
            Watch the full process — graphite sketch to colored-pencil render —
            in real time.
          </p>
        </div>

        {/* Video */}
        <div
          style={{
            position: "relative",
            borderRadius: "2px",
            overflow: "hidden",
            cursor: "pointer",
            aspectRatio: "9/16",
            maxWidth: 540,
            margin: "0 auto",
            width: "100%",
          }}
          onClick={toggle}
        >
          <video
            ref={videoRef}
            src="/media/red-gown-process-full.mp4"
            poster="/media/red-gown-process-full-poster.jpg"
            muted
            playsInline
            preload="none"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onEnded={() => setPlaying(false)}
          />

          {/* Play / pause overlay */}
          {!playing && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(10,6,4,0.35)",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.2s ease",
                }}
              >
                {/* Triangle */}
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M4 2l14 9-14 9V2z" fill="white" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
