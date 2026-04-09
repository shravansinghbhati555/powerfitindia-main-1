import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const MotionLink = motion(Link);

/* ── Counter helper ─────────────────────────────────────────── */
const AnimatedStat = ({ text, inView }: { text: string; inView: boolean }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.4, delay: 0.6 }}
    className="font-display text-primary text-sm tracking-wider"
  >
    {text}
  </motion.span>
);

/* ── Card data ──────────────────────────────────────────────── */
const visionCards = [
  {
    icon: (hovering: boolean) => (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
        <circle cx="32" cy="32" r="28" className={hovering ? "animate-[spin_2s_linear_infinite]" : "animate-[spin_8s_linear_infinite]"} style={{ transformOrigin: "center" }} />
        <ellipse cx="32" cy="32" rx="12" ry="28" className={hovering ? "animate-[spin_2s_linear_infinite]" : "animate-[spin_8s_linear_infinite]"} style={{ transformOrigin: "center" }} />
        <line x1="4" y1="32" x2="60" y2="32" />
        <line x1="10" y1="18" x2="54" y2="18" />
        <line x1="10" y1="46" x2="54" y2="46" />
      </svg>
    ),
    title: "Global Franchise Network",
    stat: "500+ Cities Targeted",
    body: "Empowering entrepreneurs to own a PowerFit in every major city in India and beyond — UAE, UK, Southeast Asia in pipeline.",
  },
  {
    icon: (hovering: boolean) => (
      <svg viewBox="0 0 64 64" className={`w-10 h-10 ${hovering ? "animate-[red-pulse_1s_ease-in-out_infinite]" : ""}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
        <rect x="8" y="20" width="48" height="32" rx="4" />
        <polygon points="32,8 44,20 20,20" />
        <line x1="20" y1="36" x2="44" y2="36" />
        <line x1="24" y1="44" x2="40" y2="44" />
      </svg>
    ),
    title: "India's #1 Gym Setup Service",
    stat: "₹50K to Premium Builds",
    body: "From compact home gyms to full society fitness centers — we design, supply, and maintain. Rajasthan's fastest growing setup brand.",
  },
  {
    icon: (hovering: boolean) => (
      <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" stroke="hsl(var(--primary))" strokeWidth="2">
        <circle cx="32" cy="16" r="8" />
        <line x1="32" y1="24" x2="32" y2="44" />
        <line x1="32" y1="44" x2="22" y2="58" />
        <line x1="32" y1="44" x2="42" y2="58" />
        <motion.g animate={hovering ? { y: [0, -6, 0] } : {}} transition={{ duration: 0.6 }}>
          <line x1="18" y1="38" x2="32" y2="30" />
          <line x1="46" y1="38" x2="32" y2="30" />
          <rect x="10" y="34" width="8" height="4" rx="1" />
          <rect x="46" y="34" width="8" height="4" rx="1" />
        </motion.g>
      </svg>
    ),
    title: "20+ Specialized Programs",
    stat: "Every Goal. Every Age.",
    body: "Yoga to CrossFit, Weight Loss to Senior Fitness — structured programs delivered by certified trainers in-studio and online.",
  },
];

const statPills = [
  { label: "500+ Cities", delay: 0.3 },
  { label: "3 Continents", delay: 0.45 },
  { label: "By 2030", delay: 0.6 },
];

const marqueeText =
  "GLOBAL EXPANSION 2026–2030 · 500+ FRANCHISE LOCATIONS · 3 BUSINESS VERTICALS · ZIDD · JAZBAA · JUNOON · FOREVER FIT FOREVER STRONG · ";

/* ── Card component ─────────────────────────────────────────── */
const VisionCard = ({
  card,
  index,
  sectionInView,
}: {
  card: (typeof visionCards)[0];
  index: number;
  sectionInView: boolean;
}) => {
  const [hovering, setHovering] = useState(false);

  return (
    <MotionLink
      to="/#contact"
      initial={{ x: 80, opacity: 0 }}
      animate={sectionInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.12, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ x: 4 }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      className="group relative flex items-start gap-5 rounded-2xl border-l-2 border-primary/60 bg-dark-card p-6 md:p-7 cursor-pointer transition-all duration-500 hover:bg-primary/5 hover:border-primary hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.25)]"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">{card.icon(hovering)}</div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-dark-foreground text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
          {card.title}
        </h3>
        <AnimatedStat text={card.stat} inView={sectionInView} />
        <p className="font-body text-dark-muted text-sm leading-relaxed mt-2">{card.body}</p>
      </div>

      {/* Arrow */}
      <ArrowRight
        size={18}
        className="flex-shrink-0 mt-2 text-dark-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-400"
      />
    </MotionLink>
  );
};

/* ── Main section ───────────────────────────────────────────── */
const VisionCardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [dumbbellDrawn, setDumbbellDrawn] = useState(false);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setDumbbellDrawn(true), 600);
      return () => clearTimeout(t);
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#0D0D0D", paddingTop: "100px", paddingBottom: 0 }}
    >
      {/* Red top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_2fr] gap-8 lg:gap-4 items-start">
          {/* ─── LEFT PANEL: Headline ─── */}
          <div className="flex flex-col justify-center lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="label-text text-primary mb-4 tracking-[0.3em]"
            >
              OUR VISION
            </motion.p>

            <h2 className="font-display text-dark-foreground leading-[0.95] mb-6">
              {["BUILD", "THE FUTURE", "OF FITNESS."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${word === "THE FUTURE" ? "gradient-text" : "text-dark-foreground"}`}
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-body text-dark-muted text-sm md:text-base leading-relaxed mb-8 max-w-md"
            >
              By 2030, we envision 500+ PowerFit locations across India and the globe — making
              world-class fitness accessible to every city, every society, every home. Three
              verticals. One unstoppable brand.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {statPills.map((pill) => (
                <motion.span
                  key={pill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: pill.delay, duration: 0.4 }}
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 label-text text-primary text-xs tracking-wider"
                >
                  {pill.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* ─── CENTER PANEL: Dumbbell Spine ─── */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Radial glow behind dumbbell */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-64 h-64 rounded-full opacity-15"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary) / 0.5) 0%, transparent 70%)",
                }}
              />
            </div>

            {/* Full-height SVG with dumbbell + dots + connector lines */}
            <svg
              viewBox="0 0 200 420"
              className="w-full h-full relative z-10"
              fill="none"
              style={{ minHeight: "380px" }}
            >
              {/* Breathing rotation group */}
              <motion.g
                style={{ transformOrigin: "100px 210px" }}
                animate={inView ? { rotate: [0, 5, 0, -5, 0] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Dumbbell — stroke only, elegant */}
                <motion.g
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  initial={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}
                  animate={inView ? { strokeDashoffset: 0 } : {}}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                >
                  {/* Top plate outer */}
                  <rect x="70" y="20" width="60" height="60" rx="8" />
                  {/* Top plate inner */}
                  <rect x="78" y="12" width="44" height="76" rx="6" />
                  {/* Bar */}
                  <rect x="92" y="88" width="16" height="244" rx="6" />
                  {/* Bottom plate outer */}
                  <rect x="70" y="340" width="60" height="60" rx="8" />
                  {/* Bottom plate inner */}
                  <rect x="78" y="332" width="44" height="76" rx="6" />
                </motion.g>

                {/* 3 red dots on the bar */}
                {[{ cy: 140 }, { cy: 210 }, { cy: 280 }].map((dot, i) => (
                  <motion.circle
                    key={i}
                    cx="100"
                    cy={dot.cy}
                    r="6"
                    fill="hsl(var(--primary))"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 1.0 + i * 0.12, duration: 0.3, type: "spring" }}
                  />
                ))}
              </motion.g>

              {/* Connector lines — from dots to right edge, pointing toward cards */}
              {[140, 210, 280].map((cy, i) => (
                <motion.line
                  key={i}
                  x1="106"
                  y1={cy}
                  x2="200"
                  y2={cy}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 1.1 + i * 0.12, duration: 0.5 }}
                />
              ))}

              {/* Small arrowheads at the end of each connector */}
              {[140, 210, 280].map((cy, i) => (
                <motion.polygon
                  key={`arrow-${i}`}
                  points={`196,${cy - 4} 200,${cy} 196,${cy + 4}`}
                  fill="hsl(var(--primary))"
                  fillOpacity="0.5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.4 + i * 0.12, duration: 0.3 }}
                />
              ))}
            </svg>
          </div>

          {/* ─── RIGHT PANEL: 3 Vision Cards ─── */}
          <div className="flex flex-col gap-5">
            {visionCards.map((card, i) => (
              <VisionCard key={card.title} card={card} index={i} sectionInView={inView} />
            ))}
          </div>
        </div>
      </div>

      {/* ─── Bottom marquee strip ─── */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="mt-20 w-full overflow-hidden"
        style={{ background: "#1A0000", height: "60px" }}
      >
        <div className="flex items-center h-full whitespace-nowrap animate-[marquee-scroll_30s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-display text-primary-foreground/70 text-xs tracking-[0.25em] mx-0">
              {marqueeText}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default VisionCardsSection;
