import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* Dumbbell SVG with different visual states */
const DumbbellSVG = ({ phase }: { phase: number }) => {
  const colors = [
    "hsl(355, 78%, 56%)", // Strength - red
    "hsl(18, 100%, 60%)",  // Cardio - orange
    "hsl(200, 60%, 50%)",  // Yoga - calm blue
    "hsl(355, 78%, 56%)", // CrossFit - red
    "hsl(355, 78%, 56%)", // Global - red
  ];

  const glowIntensity = [20, 30, 10, 25, 15];
  const scale = phase === 4 ? 0.5 : 1;

  return (
    <div className="relative" style={{ transform: `scale(${scale})`, transition: "transform 1s ease" }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        className="transition-all duration-1000"
        style={{
          filter: `drop-shadow(0 0 ${glowIntensity[phase]}px ${colors[phase]})`,
          animation: phase === 1 ? "shake 0.1s infinite" : phase === 2 ? "float 3s ease-in-out infinite" : "none",
        }}
      >
        <rect x="30" y="70" width="22" height="60" rx="4" fill={colors[phase]} opacity={0.9} />
        <rect x="148" y="70" width="22" height="60" rx="4" fill={colors[phase]} opacity={0.9} />
        <rect x="52" y="85" width="96" height="30" rx="3" fill={colors[phase]} opacity={0.7} />
        <rect x="12" y="78" width="18" height="44" rx="3" fill={colors[phase]} opacity={0.8} />
        <rect x="170" y="78" width="18" height="44" rx="3" fill={colors[phase]} opacity={0.8} />
      </svg>
      {phase === 3 && (
        <>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary"
              style={{
                width: 3,
                height: 20 + Math.random() * 30,
                left: `${20 + i * 30}px`,
                top: `${60 + Math.random() * 40}px`,
                opacity: 0.6,
                transform: `rotate(${-30 + Math.random() * 60}deg)`,
                animation: `shard-fly ${0.8 + Math.random() * 0.5}s ease-out infinite alternate`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

const phases = [
  {
    title: "Build Raw Strength",
    subtitle: "Heavy iron. Pure power. No shortcuts.",
    bg: "bg-gradient-to-br from-primary/10 via-dark to-dark",
  },
  {
    title: "Ignite Your Cardio",
    subtitle: "Heart-pounding intensity. Maximum burn.",
    bg: "bg-gradient-to-br from-accent/10 via-dark to-dark",
  },
  {
    title: "Find Your Balance",
    subtitle: "Breathe. Stretch. Restore. Repeat.",
    bg: "bg-gradient-to-br from-blue-900/20 via-dark to-dark",
  },
  {
    title: "Break Every Limit",
    subtitle: "No ceilings. No excuses. No stopping.",
    bg: "bg-gradient-to-br from-primary/15 via-dark to-dark",
  },
  {
    title: "Join the Empire",
    subtitle: "One dumbbell. Thousands of locations.",
    bg: "bg-gradient-to-br from-primary/10 via-dark to-dark",
  },
];

const DumbbellScrollJourney = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / (rect.height - window.innerHeight);
      const phase = Math.min(4, Math.max(0, Math.floor(scrollProgress * 5)));
      setCurrentPhase(phase);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: sticky scroll journey */}
      <section
        ref={containerRef}
        className="hidden md:block relative section-dark"
        style={{ height: "500vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className={`absolute inset-0 transition-all duration-1000 ${phases[currentPhase].bg}`} />

          {/* Decorative elements per phase */}
          {currentPhase === 1 && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-primary/20"
                  style={{
                    width: `${200 + i * 150}px`,
                    height: `${200 + i * 150}px`,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    animation: `sonar ${2 + i * 0.5}s ease-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
          )}

          {currentPhase === 3 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-primary/10"
                  style={{
                    width: "200%",
                    height: "3px",
                    top: `${20 + i * 15}%`,
                    left: "-50%",
                    transform: `rotate(${-45 + i * 10}deg)`,
                  }}
                />
              ))}
            </div>
          )}

          {currentPhase === 4 && (
            <div className="absolute inset-0 pointer-events-none flex flex-wrap items-center justify-center gap-8 opacity-10">
              {[...Array(20)].map((_, i) => (
                <svg key={i} width="40" height="40" viewBox="0 0 200 200" fill="hsl(355, 78%, 56%)" opacity={0.3}>
                  <rect x="30" y="70" width="22" height="60" rx="4" />
                  <rect x="148" y="70" width="22" height="60" rx="4" />
                  <rect x="52" y="85" width="96" height="30" rx="3" />
                </svg>
              ))}
            </div>
          )}

          <div className="relative z-10 section-container flex items-center gap-16">
            <div className="flex-1 text-right">
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              >
                <p className="label-text text-primary mb-4 tracking-[0.3em]">
                  {String(currentPhase + 1).padStart(2, "0")} / 05
                </p>
                <h2
                  className="font-display text-dark-foreground leading-[0.9]"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
                >
                  {phases[currentPhase].title}
                </h2>
                <p className="font-body text-dark-muted text-lg mt-4 max-w-md ml-auto">
                  {phases[currentPhase].subtitle}
                </p>
              </motion.div>
            </div>

            <div className="flex-shrink-0">
              <DumbbellSVG phase={currentPhase} />
            </div>

            <div className="flex-1" />
          </div>

          {/* Phase indicator dots */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {phases.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === currentPhase ? "bg-primary scale-150 shadow-lg shadow-primary/50" : "bg-dark-muted/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile: stacked cards */}
      <section className="md:hidden section-dark py-16">
        <div className="section-container space-y-8">
          <div className="text-center mb-12">
            <p className="label-text text-primary mb-4 tracking-[0.3em]">The Journey</p>
            <h2 className="font-display text-4xl text-dark-foreground">Your Fitness Path</h2>
          </div>
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card rounded-2xl p-8 border border-dark-foreground/10"
            >
              <p className="label-text text-primary mb-3">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-3xl text-dark-foreground mb-2">{phase.title}</h3>
              <p className="font-body text-dark-muted text-sm">{phase.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DumbbellScrollJourney;
