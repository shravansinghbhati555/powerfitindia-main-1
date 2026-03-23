import { useState, useMemo, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const modelData = {
  Lite: { avgFee: 2000, setupCost: 1200000, royalty: 0.08 },
  Studio: { avgFee: 3000, setupCost: 2500000, royalty: 0.08 },
  Premium: { avgFee: 5000, setupCost: 7500000, royalty: 0.08 },
};

const AnimatedNumber = ({ value, prefix = "" }: { value: number; prefix?: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, inView]);

  return <span ref={ref}>{prefix}{display.toLocaleString("en-IN")}</span>;
};

const comparisonBars = [
  { label: "PowerFit Franchise", percent: 85, color: "#E8000E", glow: true },
  { label: "Bank FD", percent: 28, color: "#4B5563", glow: false },
  { label: "Mutual Fund (avg)", percent: 42, color: "#6B7280", glow: false },
  { label: "Independent Gym", percent: 35, color: "#374151", glow: false },
];

const ROISection = () => {
  const [model, setModel] = useState<"Lite" | "Studio" | "Premium">("Studio");
  const [members, setMembers] = useState(150);

  const calc = useMemo(() => {
    const d = modelData[model];
    const monthlyRev = members * d.avgFee;
    const annualRev = monthlyRev * 12;
    const netMonthly = monthlyRev * (1 - d.royalty);
    const breakeven = Math.ceil(d.setupCost / netMonthly);
    const threeYear = annualRev * 3 * (1 - d.royalty) - d.setupCost;
    return { monthlyRev, annualRev, breakeven, threeYear };
  }, [model, members]);

  return (
    <section className="section-dark py-20 md:py-28" style={{ borderLeft: "4px solid hsl(355, 78%, 56%)" }}>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-dark-foreground mb-4"
        >
          Your Money, <span className="text-primary">Working Out</span>
        </motion.h2>
        <p className="font-body text-dark-muted mb-12 max-w-lg">What does your investment look like in 3 years?</p>

        {/* Calculator */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {/* Model selector */}
            <div>
              <label className="label-text text-dark-muted block mb-3">Select Franchise Model</label>
              <div className="flex gap-3">
                {(["Lite", "Studio", "Premium"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setModel(m)}
                    className={`px-5 py-2 rounded-lg font-body text-sm font-semibold transition-all ${model === m ? "bg-primary text-primary-foreground" : "border border-dark-foreground/20 text-dark-muted hover:border-primary"}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Members slider */}
            <div>
              <label className="label-text text-dark-muted block mb-3">
                Expected Monthly Members: <span className="text-primary">{members}</span>
              </label>
              <input
                type="range"
                min={50}
                max={300}
                step={10}
                value={members}
                onChange={(e) => setMembers(Number(e.target.value))}
                className="w-full accent-primary h-2 bg-dark-card rounded-full appearance-none cursor-pointer"
              />
              <div className="flex justify-between font-body text-xs text-dark-muted mt-1">
                <span>50</span><span>150</span><span>300</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Monthly Revenue", value: calc.monthlyRev, prefix: "₹" },
              { label: "Annual Revenue", value: calc.annualRev, prefix: "₹" },
              { label: "Break-even (months)", value: calc.breakeven, prefix: "" },
              { label: "3-Year Projected Return", value: calc.threeYear, prefix: "₹" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl p-5 border border-dark-foreground/10"
                style={{ backgroundColor: "#111111" }}
              >
                <p className="label-text text-dark-muted mb-2">{s.label}</p>
                <p className="font-display text-2xl md:text-3xl text-primary">
                  <AnimatedNumber value={s.value} prefix={s.prefix} />
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison bars */}
        <div className="space-y-4 max-w-2xl">
          <p className="font-body text-sm text-dark-muted mb-4">3-Year ROI Comparison (Estimated)</p>
          {comparisonBars.map((bar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-body text-xs text-dark-muted">{bar.label}</span>
                <span className="font-body text-xs text-dark-foreground">{bar.percent}%</span>
              </div>
              <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: "#1A1A1A" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: bar.color,
                    boxShadow: bar.glow ? `0 0 20px ${bar.color}60` : undefined,
                  }}
                />
              </div>
            </motion.div>
          ))}
          <p className="font-body text-[10px] text-dark-muted mt-4">
            Projections based on average franchise performance data. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
