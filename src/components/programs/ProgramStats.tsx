import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: string; label: string; context: string };

const stats: Stat[] = [
  { label: "Avg. Weight Lost (90 days)", value: "8.3 kg", context: "Weight Loss Program" },
  { label: "Avg. Muscle Gained (120 days)", value: "6.1 kg", context: "Muscle Gain Program" },
  { label: "Resting Heart Rate Drop", value: "11 BPM", context: "HIIT Program, 3 months" },
  { label: "Members Reporting Better Sleep", value: "94%", context: "Yoga Program, 30 days" },
  { label: "Injury Rate Reduction", value: "67%", context: "Functional Fitness, 6 months" },
  { label: "Overall Member Satisfaction", value: "4.8/5", context: "All programs, 10K+ surveys" },
];

function useRevealCount(target: string, active: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.\s]/g, "");
    if (!Number.isFinite(numeric)) {
      setDisplay(target);
      return;
    }

    const start = performance.now();
    const duration = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = numeric * eased;
      const shown = numeric >= 10 ? Math.round(val) : Math.round(val * 10) / 10;
      setDisplay(`${shown}${suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target]);

  return display === "0" ? target : display;
}

function StatCard({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const value = useRevealCount(stat.value, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-2xl bg-zinc-950 border border-white/10 p-6"
    >
      <div className="text-4xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm font-semibold text-zinc-200">{stat.label}</div>
      <div className="mt-1 text-xs text-zinc-500">{stat.context}</div>
    </motion.div>
  );
}

export default function ProgramStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.22, once: true });

  return (
    <section ref={ref} className="section-dark py-20 md:py-28" style={{ borderTop: "4px solid #E8000E" }}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-white text-center"
        >
          10,000+ Members. <span className="text-primary">Real Data.</span> Real Results.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 grid md:grid-cols-3 gap-4"
        >
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} active={inView} index={i} />
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-zinc-400 italic max-w-4xl mx-auto">
          *All statistics based on real member data tracked via InBody composition scans, trainer assessments, and member wellness surveys across PowerFit
          studios.
        </p>
      </div>
    </section>
  );
}

