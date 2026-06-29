type WaveDividerProps = {
  /** Background color of the section ABOVE the wave */
  above: string;
  /** Fill color = background of section BELOW (the wave shape itself) */
  below: string;
  /** Flip the wave vertically for variety */
  flip?: boolean;
  /** Wave amplitude — default 48px */
  amplitude?: number;
};

export default function WaveDivider({
  above,
  below,
  flip = false,
  amplitude = 48,
}: WaveDividerProps) {
  const h = amplitude * 2;
  const mid = h / 2;

  // Gentle single-period sine wave
  const path = `M0,${mid} C360,${mid + amplitude} 1080,${mid - amplitude} 1440,${mid} L1440,${h} L0,${h} Z`;

  return (
    <div
      style={{
        background: above,
        lineHeight: 0,
        display: "block",
        transform: flip ? "scaleY(-1)" : "none",
        marginBottom: flip ? `-${h}px` : 0,
        marginTop: flip ? 0 : `-${h}px`,
        position: "relative",
        zIndex: 1,
      }}
    >
      <svg
        viewBox={`0 0 1440 ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: "100%", height: h, display: "block" }}
        aria-hidden="true"
      >
        <path d={path} fill={below} />
      </svg>
    </div>
  );
}
