import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("franchise-form")?.scrollIntoView({ behavior: "smooth" });
};

type CityStatus = "taken" | "available" | "open";

interface City {
  name: string;
  status: CityStatus;
  x: number;
  y: number;
}

const cities: City[] = [
  // Taken
  { name: "Jaipur (Malviya Nagar)", status: "taken", x: 200, y: 220 },
  { name: "Jaipur (Mansarovar)", status: "taken", x: 210, y: 230 },
  { name: "Jaipur (Vasant Vihar)", status: "taken", x: 195, y: 215 },
  { name: "Piprali Road", status: "taken", x: 215, y: 195 },
  { name: "Rani Sati Road", status: "taken", x: 225, y: 200 },
  // Available
  { name: "Delhi", status: "available", x: 230, y: 180 },
  { name: "Mumbai", status: "available", x: 155, y: 320 },
  { name: "Bangalore", status: "available", x: 195, y: 420 },
  { name: "Hyderabad", status: "available", x: 215, y: 370 },
  { name: "Pune", status: "available", x: 170, y: 330 },
  { name: "Ahmedabad", status: "available", x: 145, y: 260 },
  { name: "Surat", status: "available", x: 140, y: 290 },
  { name: "Lucknow", status: "available", x: 270, y: 200 },
  { name: "Chandigarh", status: "available", x: 215, y: 150 },
  { name: "Sikar", status: "available", x: 205, y: 205 },
  { name: "Jodhpur", status: "available", x: 160, y: 230 },
  // Open
  { name: "Kolkata", status: "open", x: 340, y: 260 },
  { name: "Chennai", status: "open", x: 230, y: 430 },
  { name: "Patna", status: "open", x: 310, y: 215 },
  { name: "Bhopal", status: "open", x: 220, y: 280 },
  { name: "Nagpur", status: "open", x: 220, y: 310 },
  { name: "Indore", status: "open", x: 185, y: 275 },
];

const statusColor: Record<CityStatus, string> = {
  taken: "#22C55E",
  available: "#E8000E",
  open: "#FFFFFF",
};

const TerritoryMap = () => {
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number; status: CityStatus } | null>(null);

  return (
    <section className="section-dark py-20 md:py-28" style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}>
      <div className="section-container">
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

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {[
            { color: "#22C55E", label: "Already Taken" },
            { color: "#E8000E", label: "Available — High Demand" },
            { color: "#FFFFFF", label: "Open Territories" },
          ].map((l, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color, opacity: l.color === "#FFFFFF" ? 0.5 : 1 }} />
              <span className="font-body text-xs text-dark-muted">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="relative max-w-lg mx-auto mb-10">
          <svg viewBox="0 0 450 550" className="w-full opacity-90">
            {/* Simplified India outline */}
            <path
              d="M200,60 C180,80 160,100 150,130 C140,160 130,180 120,210 C110,240 100,270 110,300 C115,320 130,340 140,360 C150,380 160,400 170,420 C180,440 200,470 220,490 C230,480 240,460 250,440 C260,420 270,400 280,380 C290,360 300,340 310,320 C320,300 330,280 340,260 C350,240 340,220 330,200 C320,180 310,160 300,140 C290,120 280,100 260,80 C240,65 220,55 200,60Z"
              fill="none"
              stroke="hsl(355, 78%, 56%)"
              strokeWidth="1"
              opacity="0.3"
            />

            {/* City dots */}
            {cities.map((city, i) => (
              <g
                key={i}
                onMouseEnter={() => setTooltip({ name: city.name, x: city.x, y: city.y, status: city.status })}
                onMouseLeave={() => setTooltip(null)}
                className="cursor-pointer"
              >
                {city.status === "available" && (
                  <circle cx={city.x} cy={city.y} r="10" fill={statusColor[city.status]} opacity="0.15">
                    <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.05;0.2" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  cx={city.x}
                  cy={city.y}
                  r="4"
                  fill={statusColor[city.status]}
                  opacity={city.status === "open" ? 0.4 : 0.9}
                />
              </g>
            ))}
          </svg>

          {/* Tooltip */}
          {tooltip && (
            <div
              className="absolute pointer-events-none px-3 py-2 rounded-lg border border-dark-foreground/10 z-20"
              style={{
                backgroundColor: "#111111",
                left: `${(tooltip.x / 450) * 100}%`,
                top: `${(tooltip.y / 550) * 100}%`,
                transform: "translate(-50%, -120%)",
              }}
            >
              <p className="font-body text-xs text-dark-foreground whitespace-nowrap flex items-center gap-1">
                {tooltip.status === "taken" && <Lock className="w-3 h-3 text-green-500" />}
                {tooltip.name}
              </p>
              <p className="font-body text-[10px] text-primary">
                {tooltip.status === "taken" ? "Territory Taken" : tooltip.status === "available" ? "Territory Available · Be the first PowerFit here" : "Open Territory"}
              </p>
            </div>
          )}
        </div>

        <div className="text-center space-y-3">
          <button onClick={scrollToForm} className="font-body text-sm text-primary hover:underline">
            Don't see your city? Apply anyway — we're expanding everywhere. →
          </button>
          <p className="font-body text-xs text-dark-muted">
            ⚡ 12 cities have active enquiries this month. Territories are exclusive — first approved applicant wins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TerritoryMap;
