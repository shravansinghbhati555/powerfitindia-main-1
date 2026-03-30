import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { programCategories } from "@/data/programs";

type HeroStats = { label: string; value: number; suffix?: string; prefix?: string };

const heroStats: HeroStats[] = [
  { label: "Programs", value: 20, suffix: "+" },
  { label: "Members Tracked", value: 10000, suffix: "+" },
  { label: "Categories", value: 6 },
  { label: "Certified Trainers", value: 1, suffix: "+" },
];

function CountUp({ value, duration = 1.1 }: { value: number; duration?: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(mv, value, { duration, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(v.toLocaleString("en-IN")));
    return () => {
      controls.stop();
      unsub();
    };
  }, [mv, rounded, value, duration]);

  return <>{display}</>;
}

export default function ProgramsHero({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (value: string) => void;
}) {
  const h1 = useMemo(() => "Find Your Program.", []);
  const h2 = useMemo(() => "Transform Your Life.", []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(`category-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "#0A0A0A" }} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 40%, rgba(232,0,14,0.22), transparent 58%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1723406251847-168ea7a02077?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(0) contrast(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#0A0A0A]" />
      </div>

      <div className="relative section-container w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-red-950 border border-red-600 rounded-full px-4 py-2 text-red-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            20+ SPECIALIZED PROGRAMS · IN-STUDIO &amp; ONLINE
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl text-white leading-[0.9]">
            <span className="inline-block">
              {h1.split("").map((ch, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="inline-block text-[#E8000E] red-glow-text">
              {h2.split("").map((ch, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.03, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            From beginner to elite athlete — PowerFit's 20+ programs are designed by certified trainers, backed by real member data from 10,000+
            fitness journeys across India. Every goal has a program. Every program has results.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="relative max-w-lg mx-auto mt-8">
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search programs — Yoga, HIIT, Weight Loss..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full px-6 py-4 text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition-colors"
              aria-label="Search programs"
            />
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("programs-grid");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="absolute right-2 top-2 bg-red-600 rounded-full px-6 py-2 text-white font-semibold hover:bg-red-500 transition-colors"
            >
              Search
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} className="mt-8">
            <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-2 py-2">
              {programCategories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => scrollToCategory(c.id)}
                  className="shrink-0 rounded-full px-4 py-2 text-sm font-semibold border border-white/10 bg-black/40 text-white hover:border-red-500/60 hover:bg-red-600/10 transition-colors"
                >
                  {c.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {heroStats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-black/35 border border-white/10 p-4">
                <div className="text-2xl md:text-3xl font-black text-white">
                  {s.prefix ?? ""}
                  <CountUp value={s.value} />
                  {s.suffix ?? ""}
                </div>
                <div className="text-xs label-text text-zinc-500 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

