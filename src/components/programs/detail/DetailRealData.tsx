import { motion, useReducedMotion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";
import CountUp from "@/components/ui/CountUp";
import { useParallax } from "@/hooks/useParallax";

interface Props {
  program: Program;
  theme: CategoryTheme;
  visuals: ProgramVisual;
}

export default function DetailRealData({ program, theme, visuals }: Props) {
  const reduce = useReducedMotion();
  const { ref, y } = useParallax([-24, 24]);

  return (
    <section className="relative overflow-hidden py-10 px-[var(--gutter)]" aria-label="Program real data" style={{ minHeight: 300 }}>
      <motion.div
        ref={ref}
        className="absolute inset-0 scale-110"
        style={reduce ? undefined : { y }}
        aria-hidden="true"
      >
        <img
          src={visuals.galleryImages[0]?.url || visuals.heroBg}
          className="w-full h-full object-cover"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, ${theme.accent}30 100%)`,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            className="text-3xl font-black text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            The Numbers
          </motion.h2>
          <motion.div
            className="hidden sm:flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full"
            style={{ background: "#00C85320", border: "1px solid #00C85350", color: "#00C853" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Verified Member Data
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {program.realDataStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                className="h-1 rounded-full mb-4"
                style={{ background: theme.accent }}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
              />

              <div className="text-5xl font-black mb-1 tabular-nums" style={{ color: theme.accent }}>
                <CountUp value={s.value} />
              </div>

              <div className="text-white font-bold text-base mb-1">{s.metric}</div>
              <div className="text-zinc-500 text-xs">
                in {s.timeframe} · {s.source}
              </div>

              <div className="mt-3 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(to right, ${theme.accent}, ${theme.accent}80)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${70 + i * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
