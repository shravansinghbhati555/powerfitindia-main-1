import { useState } from "react";
import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";
import BenefitsTile from "@/components/programs/category/BenefitsTile";

interface Props { program: Program; theme: CategoryTheme }

export default function DetailBenefitsDeep({ program, theme }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-6 md:py-6" style={{ background: "#0A0A0A" }} aria-label="Program benefits">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
        >
          What {program.name} Does to Your Body
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {program.benefits.slice(0, 4).map((b) => (
            <BenefitsTile key={b.title} benefit={b} accentColor={theme.accent} />
          ))}
        </div>

        {/* Expandable science breakdown */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors"
          style={{ color: theme.accent }}
        >
          <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>▼</span>
          Full Science Breakdown
        </button>
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 space-y-4">
            {program.benefits.map(b => (
              <div key={b.title} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                <div className="text-white font-bold mb-1">{b.icon} {b.title} — {b.value}</div>
                <p className="text-zinc-400 text-sm">{b.description}.</p>
              </div>
            ))}
            <div class="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-green-900/30 border border-green-700/30 text-green-400 text-xs font-bold">✅ Based on 10,000+ PowerFit member tracking data</div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
