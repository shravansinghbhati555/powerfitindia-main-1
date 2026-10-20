import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("franchise-form")?.scrollIntoView({
    behavior: "smooth",
  });
};

type CityStatus = "taken" | "available" | "open";

interface City {
  name: string;
  status: CityStatus;
  x: number;
  y: number;
}

const cities: City[] = [
  // Rajasthan
  { name: "Jaipur (Malviya Nagar)", status: "taken", x: 222, y: 359 },
  { name: "Jaipur (Mansarovar)", status: "taken", x: 218, y: 373 },
  { name: "Jaipur (Vasant Vihar)", status: "taken", x: 238, y: 373 },
  { name: "Piprali Road", status: "taken", x: 206, y: 435 },
  { name: "Rani Sati Road", status: "taken", x: 187, y: 418 },
  { name: "Sikar", status: "available", x: 204, y: 409 },
  { name: "Jodhpur", status: "available", x: 126, y: 405 },

  // Available cities
  { name: "Delhi", status: "available", x: 331, y: 251 },
  { name: "Chandigarh", status: "available", x: 261, y: 235 },
  { name: "Lucknow", status: "available", x: 456, y: 399 },
  { name: "Ahmedabad", status: "available", x: 113, y: 524 },
  { name: "Surat", status: "available", x: 95, y: 552 },
  { name: "Mumbai", status: "available", x: 177, y: 706 },
  { name: "Pune", status: "available", x: 374, y: 886 },
  { name: "Hyderabad", status: "available", x: 376, y: 716 },
  { name: "Bangalore", status: "available", x: 277, y: 841 },

  // Open cities
  { name: "Kolkata", status: "open", x: 687, y: 542 },
  { name: "Patna", status: "open", x: 595, y: 424 },
  { name: "Bhopal", status: "open", x: 312, y: 525 },
  { name: "Indore", status: "open", x: 413, y: 533 },
  { name: "Nagpur", status: "open", x: 370, y: 612 },
  { name: "Chennai", status: "open", x: 394, y: 931 },
];

const statusColor: Record<CityStatus, string> = {
  taken: "#22C55E",
  available: "#E8000E",
  open: "#FFFFFF",
};

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 1111;

const TerritoryMap = () => {
  const [tooltip, setTooltip] = useState<City | null>(null);

  return (
    <section
      className="section-dark py-20 md:py-28"
      style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}
    >
      <div className="section-container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-4"
        >
          Claim <span className="text-primary">Your City</span>
        </motion.h2>
        <p className="font-body text-dark-muted text-center mb-4 max-w-lg mx-auto">
          Available Territories — Before Someone Else Takes Yours
        </p>

        {/* Map Legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
          {[
            { color: "#22C55E", label: "Already Taken" },
            { color: "#E8000E", label: "Available — High Demand" },
            { color: "#FFFFFF", label: "Open Territories" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{
                  backgroundColor: item.color,
                  opacity: item.color === "#FFFFFF" ? 0.6 : 1,
                }}
              />

              <span className="font-body text-xs text-dark-muted">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* India Map */}
        <div className="w-full max-w-lg mx-auto mb-10">
          <div className="relative w-full aspect-[1000/1111]">
            <img
              src="/india-states.png.webp"
              alt="India political map with state boundaries"
              className="absolute inset-0 w-full h-full object-fill select-none"
              draggable={false}
            />

            {/* City Markers */}
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
              role="group"
              aria-label="Franchise territories across India"
            >
              {cities.map((city) => (
                <g
                  key={city.name}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`${city.name}: ${city.status}`}
                  onMouseEnter={() => setTooltip(city)}
                  onMouseLeave={() => setTooltip(null)}
                  onFocus={() => setTooltip(city)}
                  onBlur={() => setTooltip(null)}
                  onClick={() =>
                    setTooltip((current) =>
                      current?.name === city.name ? null : city
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setTooltip(city);
                    }

                    if (event.key === "Escape") {
                      setTooltip(null);
                    }
                  }}
                >
                  {/* Larger clickable area */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="14"
                    fill="transparent"
                  />

                  {/* Pulse animation for available cities */}
                  {city.status === "available" && (
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="8"
                      fill={statusColor.available}
                      opacity="0.3"
                      pointerEvents="none"
                    >
                      <animate
                        attributeName="r"
                        values="8;19;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />

                      <animate
                        attributeName="opacity"
                        values="0.3;0.02;0.3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}

                  {/* City Dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="5"
                    fill={statusColor[city.status]}
                    opacity={city.status === "open" ? 0.75 : 1}
                    stroke="#111111"
                    strokeWidth="2"
                    pointerEvents="none"
                  />
                </g>
              ))}
            </svg>

            {/* City Tooltip */}
            {tooltip && (
              <div
                className="absolute z-20 pointer-events-none px-3 py-2 rounded-lg border border-white/10 shadow-xl"
                style={{
                  backgroundColor: "#111111",
                  left: `${(tooltip.x / MAP_WIDTH) * 100}%`,
                  top: `${(tooltip.y / MAP_HEIGHT) * 100}%`,
                  transform: "translate(-50%, -120%)",
                }}
              >
                <p className="font-body text-xs text-white whitespace-nowrap flex items-center gap-1">
                  {tooltip.status === "taken" && (
                    <Lock className="w-3 h-3 text-green-500" />
                  )}

                  {tooltip.name}
                </p>

                <p className="font-body text-[10px] text-primary whitespace-nowrap">
                  {tooltip.status === "taken"
                    ? "Territory Taken"
                    : tooltip.status === "available"
                      ? "Territory Available · Be the first PowerFit here"
                      : "Open Territory"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Apply CTA */}
        <div className="text-center space-y-3">
          <button
            type="button"
            onClick={scrollToForm}
            className="font-body text-sm text-primary hover:underline"
          >
            Don't see your city? Apply anyway — we're expanding everywhere. →
          </button>

          <p className="font-body text-xs text-dark-muted">
            ⚡ 12 cities have active enquiries this month. Territories are
            exclusive — first approved applicant wins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TerritoryMap;
