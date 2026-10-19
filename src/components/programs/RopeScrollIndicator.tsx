import { useRopeScroll } from "@/hooks/useRopeScroll";

export default function RopeScrollIndicator() {
  const { scrollProgress, sway } = useRopeScroll();

  return (
    <>
      {/* Desktop rope */}
      <div className="fixed left-6 top-0 h-full w-4 z-40 hidden lg:block pointer-events-none">
        <svg width="16" height="100%" viewBox="0 0 16 800" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="ropePattern" x="0" y="0" width="16" height="20" patternUnits="userSpaceOnUse">
              <rect width="16" height="20" fill="#2a1a0a" />
              <path d="M0,0 Q8,5 16,10 Q8,15 0,20" stroke="#8B4513" strokeWidth="2" fill="none" />
              <path d="M0,10 Q8,15 16,20" stroke="#5C2E00" strokeWidth="1.5" fill="none" />
            </pattern>
            <filter id="knotGlow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="16" height="800" fill="url(#ropePattern)" />

          {[0.2, 0.4, 0.6, 0.8].map((pos, i) => {
            const active = scrollProgress >= pos;
            return (
              <circle
                key={i}
                cx="8"
                cy={pos * 800}
                r="6"
                fill={active ? "#E8000E" : "#5C2E00"}
                filter={active ? "url(#knotGlow)" : undefined}
                className="transition-colors duration-500"
              />
            );
          })}

          <g transform={`translate(${sway}, ${scrollProgress * 800})`}>
            <circle cx="8" cy="0" r="8" fill="#E8000E" />
            <line x1="4" y1="-4" x2="12" y2="4" stroke="white" strokeWidth="1.5" />
            <line x1="12" y1="-4" x2="4" y2="4" stroke="white" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      {/* Mobile progress line */}
      <div className="fixed left-0 top-0 h-full w-[3px] z-40 lg:hidden pointer-events-none bg-red-950/40">
        <div className="w-full bg-[#E8000E] origin-top" style={{ height: `${scrollProgress * 100}%` }} />
      </div>
    </>
  );
}

