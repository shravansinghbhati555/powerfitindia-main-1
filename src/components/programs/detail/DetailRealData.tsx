import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix, accentColor }: { target: number; suffix: string; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  const display = target >= 10 ? Math.round(val) : Math.round(val * 10) / 10;
  return <div ref={ref} className="text-5xl md:text-7xl font-black" style={{ color: accentColor }}>{display}{suffix}</div>;
}

function parseStatValue(v: string) {
  const num = parseFloat(v.replace(/[^0-9.]/g, ""));
  const suf = v.replace(/[0-9.\s]/g, "");
  return { num: Number.isFinite(num) ? num : 0, suf };
}

interface Props { program: Program; theme: CategoryTheme }

export default function DetailRealData({ program, theme }: Props) {
  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0D0D" }} aria-label="Program real data">
      <div className="section-container">
        <div className="flex items-stretch gap-0">
          <div className="w-2 rounded-full mr-6 hidden md:block" style={{ background: theme.accent }} />
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
            >
              The Numbers Behind {program.name}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {program.realDataStats.map((s, i) => {
                const { num, suf } = parseStatValue(s.value);
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800"
                  >
                    <CountUp target={num} suffix={suf} accentColor={theme.accent} />
                    <div className="text-white font-bold mt-2">{s.metric}</div>
                    <div className="text-zinc-500 text-sm">In {s.timeframe}</div>
                    <div className="mt-3 h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }}
                        viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.2, duration: 1.2 }}
                        className="h-full rounded-full" style={{ background: theme.accent }} />
                    </div>
                    <div className="text-zinc-600 text-xs italic mt-2">Source: {s.source}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-xl bg-green-900/20 border border-green-700/20 p-4 text-green-400 text-sm">
              ✅ All statistics from real PowerFit member tracking — InBody body composition scans, certified trainer assessments, and member wellness surveys since 2017. 10,000+ members tracked.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
