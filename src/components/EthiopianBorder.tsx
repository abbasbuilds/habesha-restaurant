/**
 * EthiopianBorder — tibeb-style SVG divider strip.
 * Repeating nested-diamond motif in Ethiopian flag colors (red / gold / green).
 */
export function EthiopianBorder({
  id = "tb",
  flip = false,
  height = 32,
}: {
  id?: string;
  flip?: boolean;
  height?: number;
}) {
  return (
    <svg
      width="100%"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="48"
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="48" height="3" fill="#DA291C" />
          <rect x="0" y="3" width="48" height="2" fill="#FCDD09" />
          <rect x="0" y="5" width="48" height={height - 10} fill="#0D0A07" />
          <polygon
            points={`0,${height / 2} 24,5 48,${height / 2} 24,${height - 5}`}
            fill="#D4A820"
          />
          <polygon
            points={`5,${height / 2} 24,9 43,${height / 2} 24,${height - 9}`}
            fill="#0D0A07"
          />
          <polygon
            points={`9,${height / 2} 24,11 39,${height / 2} 24,${height - 11}`}
            fill="#DA291C"
          />
          <polygon
            points={`14,${height / 2} 24,13 34,${height / 2} 24,${height - 13}`}
            fill="#FCDD09"
          />
          <circle cx="24" cy={height / 2} r="2.4" fill="#078930" />
          <rect x="0" y={height - 5} width="48" height="2" fill="#FCDD09" />
          <rect x="0" y={height - 3} width="48" height="3" fill="#078930" />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${id})`} />
    </svg>
  );
}
