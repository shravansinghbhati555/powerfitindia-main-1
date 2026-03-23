import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  { year: "2017", text: "First PowerFit studio opens in Jaipur. Built on Zidd, Jazbaa, Junoon." },
  { year: "2019", text: "Second location. First franchise partner joins the family." },
  { year: "2021", text: "Pandemic hits. PowerFit launches online coaching. Community stays strong." },
  { year: "2022", text: "Equipment supply vertical launched. Serving gyms across Rajasthan." },
  { year: "2023", text: "5 operational studios. 500+ active members. Home & Society gym setup vertical born." },
  { year: "2024", text: "Expansion blueprint finalized. Franchise model standardized. National rollout begins." },
  { year: "2025", text: "15+ locations. Franchise enquiries from 50+ cities. Global vision activated." },
  { year: "2026 →", text: "You. Your city. Your franchise. The empire expands.", isFuture: true },
];

const BrandJourney = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark py-20 md:py-28 overflow-hidden" style={{ borderTop: "4px solid hsl(355, 78%, 56%)" }}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-4"
        >
          FROM ONE GYM TO AN <span className="text-primary">EMPIRE</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-dark-muted text-center mb-16 max-w-xl mx-auto"
        >
          Our brand journey — built on passion, proven by results.
        </motion.p>
      </div>

      {/* Horizontal scrollable timeline */}
      <div ref={ref} className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-start gap-0 px-8 md:px-16 min-w-max py-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-col items-center relative"
                style={{ minWidth: "200px" }}
              >
                {/* Connector line */}
                {i < milestones.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                    className="absolute top-[38px] left-[50%] h-[2px] bg-primary/40"
                    style={{ width: "200px", transformOrigin: "left" }}
                  />
                )}

                {/* Node */}
                <div className={`relative z-10 w-4 h-4 rounded-full border-2 border-primary ${m.isFuture ? "bg-primary animate-pulse-glow" : "bg-dark"} mb-4`}>
                  {m.isFuture && (
                    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  )}
                </div>

                {/* Year */}
                <span className={`font-display text-xl ${m.isFuture ? "text-primary" : "text-dark-foreground"} mb-2`}>
                  {m.year}
                </span>

                {/* Text */}
                <p className={`font-body text-xs text-center max-w-[170px] leading-relaxed ${m.isFuture ? "text-primary font-semibold" : "text-dark-muted"}`}>
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandJourney;
