"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  tall?: boolean;
};

type GalleryGroup = {
  label: string;
  title: string;
  items: GalleryItem[];
};

const GROUPS: GalleryGroup[] = [
  {
    label: "Renders",
    title: "Finished illustrations",
    items: [
      { src: "/media/render-offshoulder-gown.jpg", alt: "Off-shoulder gown", tall: true },
      { src: "/media/render-red-cape-01.jpg", alt: "Red cape" },
      { src: "/media/render-red-cape-02.jpg", alt: "Red cape 02" },
      { src: "/media/render-red-cape-03.jpg", alt: "Red cape 03" },
      { src: "/media/ethnic-yellow-kurta-final.jpg", alt: "Ethnic yellow kurta" },
      { src: "/media/render-black-jumpsuit.jpg", alt: "Black jumpsuit" },
      { src: "/media/render-black-outfit-01.jpg", alt: "Black outfit" },
      { src: "/media/render-cream-gown.jpg", alt: "Cream gown", tall: true },
      { src: "/media/render-grey-gown-wip.jpg", alt: "Grey gown" },
    ],
  },
  {
    label: "Croquis",
    title: "Figure sketches",
    items: [
      { src: "/media/croquis-lineup-01.jpg", alt: "Figure lineup", tall: true },
      { src: "/media/croquis-lineup-02.jpg", alt: "Figure lineup 02" },
      { src: "/media/croquis-pose-studies.jpg", alt: "Pose studies" },
      { src: "/media/croquis-gown-pair.jpg", alt: "Gown pair" },
      { src: "/media/croquis-flowing-skirt.jpg", alt: "Flowing skirt" },
      { src: "/media/croquis-couple.jpg", alt: "Couple figures" },
      { src: "/media/croquis-menswear-pair.jpg", alt: "Menswear pair" },
      { src: "/media/croquis-coat-figure.jpg", alt: "Coat figure" },
      { src: "/media/croquis-trench-dress.jpg", alt: "Trench dress" },
      { src: "/media/croquis-draped-dress.jpg", alt: "Draped dress" },
      { src: "/media/croquis-draped-figure.jpg", alt: "Draped figure" },
      { src: "/media/croquis-silhouette.jpg", alt: "Silhouette" },
      { src: "/media/croquis-cape-skirt.jpg", alt: "Cape skirt" },
      { src: "/media/croquis-peplum-figure.jpg", alt: "Peplum figure" },
      { src: "/media/croquis-jumpsuit-figure.jpg", alt: "Jumpsuit figure" },
      { src: "/media/croquis-figure-01.jpg", alt: "Figure study" },
      { src: "/media/croquis-trousers-figure.jpg", alt: "Trousers figure" },
      { src: "/media/croquis-figure-notes.jpg", alt: "Figure notes" },
    ],
  },
  {
    label: "Studio",
    title: "At the desk",
    items: [
      { src: "/media/croquis-sketches-desk.jpg", alt: "Sketches at the desk", tall: true },
      { src: "/media/stilllife-lamp-02.jpg", alt: "Studio still life" },
    ],
  },
];

const ALL_ITEMS = GROUPS.flatMap((g) => g.items);

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10,6,4,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "lbFadeIn 0.25s ease both",
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={navBtnStyle("left")}
        aria-label="Previous"
      >
        ‹
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "min(90vw, 800px)",
          maxHeight: "90dvh",
          width: "100%",
          aspectRatio: "3/4",
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
          priority
        />
        <p
          style={{
            position: "absolute",
            bottom: "0.75rem",
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.06em",
          }}
        >
          {item.alt}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={navBtnStyle("right")}
        aria-label="Next"
      >
        ›
      </button>

      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: "1.25rem",
          right: "1.25rem",
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.7)",
          fontSize: "1.75rem",
          cursor: "pointer",
          lineHeight: 1,
          padding: "0.25rem 0.5rem",
        }}
        aria-label="Close"
      >
        ×
      </button>

      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </div>
  );
}

function navBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "fixed",
    top: "50%",
    [side]: "0.5rem",
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "rgba(255,255,255,0.9)",
    fontSize: "1.5rem",
    width: 44,
    height: 44,
    borderRadius: "2px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    zIndex: 1001,
  };
}

function GalleryCard({
  item,
  globalIndex,
  localIndex,
  onOpen,
}: {
  item: GalleryItem;
  globalIndex: number;
  localIndex: number;
  onOpen: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = (localIndex % 4) + 1;

  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "2px",
        background: "var(--color-surface)",
        cursor: "pointer",
        aspectRatio: "3/4",
      }}
    >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.8s var(--ease-out-expo)",
            transformOrigin: "center center",
          }}
        />

      {/* Caption — hover on desktop, always visible on touch */}
      <div
        className="gallery-card-caption"
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(28,28,26,0.45)",
          display: "flex",
          alignItems: "flex-end",
          padding: "1rem",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.04em",
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "transform 0.35s var(--ease-out-expo)",
          }}
        >
          {item.alt}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + ALL_ITEMS.length) % ALL_ITEMS.length)), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % ALL_ITEMS.length)), []);

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div className="section" style={{ paddingTop: "5rem" }}>
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 400,
            }}
          >
            The work.
          </h2>
        </div>

        {GROUPS.map((group) => {
          const groupStartIndex = ALL_ITEMS.indexOf(group.items[0]);
          return (
            <div key={group.label} style={{ marginBottom: "4rem" }}>
              <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "1rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-ink-muted)", letterSpacing: "0.04em" }}>{group.label}</p>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.375rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--color-ink-muted)",
                  }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Desktop: grid */}
              <div
                className="gallery-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {group.items.map((item, localIndex) => {
                  const globalIndex = groupStartIndex + localIndex;
                  return (
                    <GalleryCard
                      key={item.src}
                      item={item}
                      globalIndex={globalIndex}
                      localIndex={localIndex}
                      onOpen={() => setLightboxIndex(globalIndex)}
                    />
                  );
                })}
              </div>

              {/* Mobile: horizontal swipe carousel */}
              <div
                className="gallery-carousel"
                style={{
                  display: "none",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
                  scrollSnapType: "x mandatory",
                  gap: "0.625rem",
                  paddingBottom: "0.5rem",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                } as React.CSSProperties}
              >
                {group.items.map((item, localIndex) => {
                  const globalIndex = groupStartIndex + localIndex;
                  return (
                    <div
                      key={item.src}
                      style={{
                        flex: "0 0 72vw",
                        scrollSnapAlign: "start",
                        aspectRatio: "3/4",
                        position: "relative",
                        borderRadius: "2px",
                        overflow: "hidden",
                        background: "var(--color-surface)",
                        cursor: "pointer",
                      }}
                      onClick={() => setLightboxIndex(globalIndex)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="72vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  );
                })}
              </div>

              <style>{`
                @media (max-width: 639px) {
                  .gallery-grid { display: none !important; }
                  .gallery-carousel { display: flex !important; }
                  .gallery-carousel::-webkit-scrollbar { display: none; }
                }
              `}</style>
            </div>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          item={ALL_ITEMS[lightboxIndex]}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
