import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailJourney({ program, visuals, theme }: Props) {
  const milestones = visuals.journeyMilestones;
  const waMsg = encodeURIComponent(`Hi! I want to start my ${program.name} journey at PowerFit.`);

  return (
    <section className="py-6 md:py-6" style={{ background: "#0A0A0A" }} aria-label="90-day journey">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-12"
        >
          Your First 90 Days at PowerFit {program.name}
        </motion.h2>

        {/* Desktop: vertical timeline */}
        <div className="hidden md:block relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5" style={{ background: theme.accent + '40' }} />
          {milestones.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-5 w-4 h-4 rounded-full border-2" style={{ borderColor: theme.accent, background: i === milestones.length - 1 ? theme.accent : "#0A0A0A" }} />
              <div className="ml-6 bg-zinc-900 rounded-xl p-5 border border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black" style={{ color: theme.accent }}>Day {m.day}</span>
                  <span className="text-2xl">{m.icon}</span>
                </div>
                <p className="text-white font-bold text-lg">{m.title}</p>
                <p className="text-zinc-400 text-sm mt-1">{m.desc}</p>
              </div>
            </motion.div>
          ))}
          {/* Final trophy */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} className="text-center mt-8">
            <div className="text-5xl mb-2" style={{ filter: `drop-shadow(0 0 20px ${theme.accent})` }}>🏆</div>
            <p className="text-zinc-300">Ready to start your journey?</p>
            <a href={`https://wa.me/919116838715?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-colors">
              💬 WhatsApp to Start
            </a>
          </motion.div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {milestones.map((m, i) => (
            <div key={i} className="snap-start shrink-0 w-72 bg-zinc-900 rounded-xl p-5 border border-zinc-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-black" style={{ color: theme.accent }}>Day {m.day}</span>
                <span className="text-xl">{m.icon}</span>
              </div>
              <p className="text-white font-bold">{m.title}</p>
              <p className="text-zinc-400 text-sm mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
