"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

// ─── Lightbox ────────────────────────────────────────────────────────────────

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
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} style={navBtnStyle("left")} aria-label="Previous">‹</button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "min(90vw, 800px)", maxHeight: "90dvh", width: "100%", aspectRatio: "3/4" }}
      >
        <Image src={item.src} alt={item.alt} fill sizes="90vw" style={{ objectFit: "contain" }} priority />
        <p style={{ position: "absolute", bottom: "0.75rem", left: 0, right: 0, textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}>
          {item.alt}
        </p>
      </div>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} style={navBtnStyle("right")} aria-label="Next">›</button>

      <button
        onClick={onClose}
        style={{ position: "fixed", top: "1.25rem", right: "1.25rem", background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: "1.75rem", cursor: "pointer", lineHeight: 1, padding: "0.25rem 0.5rem" }}
        aria-label="Close"
      >×</button>

      <style>{`@keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}

function navBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "fixed", top: "50%", [side]: "0.5rem", transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.2)",
    color: "rgba(255,255,255,0.9)", fontSize: "1.5rem", width: 44, height: 44,
    borderRadius: "2px", cursor: "pointer", display: "flex", alignItems: "center",
    justifyContent: "center", lineHeight: 1, zIndex: 1001,
  };
}

// ─── Desktop gallery card ─────────────────────────────────────────────────────

function GalleryCard({ item, localIndex, onOpen }: { item: GalleryItem; globalIndex: number; localIndex: number; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);
  const delay = (localIndex % 4) + 1;

  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      style={{ position: "relative", overflow: "hidden", borderRadius: "2px", background: "var(--color-surface)", cursor: "pointer", aspectRatio: "3/4" }}
    >
      <Image
        src={item.src} alt={item.alt} fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.8s var(--ease-out-expo)" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(28,28,26,0.45)", display: "flex", alignItems: "flex-end", padding: "1rem", opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease", pointerEvents: "none" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "rgba(255,255,255,0.85)", letterSpacing: "0.04em", transform: hovered ? "translateY(0)" : "translateY(6px)", transition: "transform 0.35s var(--ease-out-expo)" }}>
          {item.alt}
        </span>
      </div>
    </div>
  );
}

// ─── 3D Coverflow carousel (mobile) ──────────────────────────────────────────

function CoverflowCarousel({ items, groupStartIndex, onOpen }: { items: GalleryItem[]; groupStartIndex: number; onOpen: (i: number) => void }) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);

  const goTo = useCallback((index: number) => {
    setActive(Math.max(0, Math.min(items.length - 1, index)));
  }, [items.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    dragDelta.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    dragDelta.current = e.touches[0].clientX - touchStartX.current;
  };

  const onTouchEnd = () => {
    if (Math.abs(dragDelta.current) > 40) {
      goTo(dragDelta.current < 0 ? active + 1 : active - 1);
    }
    touchStartX.current = null;
    dragDelta.current = 0;
  };

  return (
    <div
      style={{ position: "relative", height: "68vw", perspective: "900px", overflow: "hidden" }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {items.map((item, i) => {
        const offset = i - active;
        const absOffset = Math.abs(offset);

        // only render cards within 2 slots of active for perf
        if (absOffset > 2) return null;

        const rotateY = offset * 38;
        const translateX = offset * 52; // % of card width
        const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.78 : 0.58;
        const zIndex = 10 - absOffset;
        const opacity = absOffset > 1 ? 0.4 : 1;
        const brightness = absOffset === 0 ? 1 : absOffset === 1 ? 0.65 : 0.4;

        return (
          <div
            key={item.src}
            onClick={() => {
              if (absOffset === 0) onOpen(groupStartIndex + i);
              else goTo(i);
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "52vw",
              aspectRatio: "3/4",
              borderRadius: "4px",
              overflow: "hidden",
              cursor: "pointer",
              zIndex,
              opacity,
              transform: `translate(-50%, -50%) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
              transition: "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s ease",
              transformStyle: "preserve-3d",
              filter: `brightness(${brightness})`,
              willChange: "transform",
              boxShadow: absOffset === 0 ? "0 24px 60px rgba(0,0,0,0.45)" : "0 8px 24px rgba(0,0,0,0.25)",
            }}
          >
            <Image src={item.src} alt={item.alt} fill sizes="52vw" style={{ objectFit: "cover" }} />
          </div>
        );
      })}

      {/* Dot indicators */}
      <div style={{ position: "absolute", bottom: "-1.5rem", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "6px" }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to ${items[i].alt}`}
            style={{
              width: i === active ? 18 : 6,
              height: 6,
              borderRadius: 3,
              border: "none",
              padding: 0,
              background: i === active ? "var(--color-ink)" : "rgba(0,0,0,0.2)",
              transition: "width 0.3s ease, background 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main Gallery ─────────────────────────────────────────────────────────────

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i - 1 + ALL_ITEMS.length) % ALL_ITEMS.length)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i + 1) % ALL_ITEMS.length)), []);

  return (
    <section style={{ background: "var(--color-bg)" }}>
      <div className="section" style={{ paddingTop: "5rem" }}>
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 400 }}>
            The work.
          </h2>
        </div>

        {GROUPS.map((group) => {
          const groupStartIndex = ALL_ITEMS.indexOf(group.items[0]);
          return (
            <div key={group.label} style={{ marginBottom: "5rem" }}>
              <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "baseline", gap: "1rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-ink-muted)", letterSpacing: "0.04em" }}>{group.label}</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", fontWeight: 400, fontStyle: "italic", color: "var(--color-ink-muted)" }}>
                  {group.title}
                </h3>
              </div>

              {/* Desktop grid */}
              <div
                className="gallery-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}
              >
                {group.items.map((item, localIndex) => (
                  <GalleryCard
                    key={item.src}
                    item={item}
                    globalIndex={groupStartIndex + localIndex}
                    localIndex={localIndex}
                    onOpen={() => setLightboxIndex(groupStartIndex + localIndex)}
                  />
                ))}
              </div>

              {/* Mobile 3D coverflow */}
              <div className="gallery-coverflow" style={{ display: "none", paddingBottom: "2.5rem" }}>
                <CoverflowCarousel
                  items={group.items}
                  groupStartIndex={groupStartIndex}
                  onOpen={(i) => setLightboxIndex(i)}
                />
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 639px) {
          .gallery-grid { display: none !important; }
          .gallery-coverflow { display: block !important; }
        }
      `}</style>

      {lightboxIndex !== null && (
        <Lightbox item={ALL_ITEMS[lightboxIndex]} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
