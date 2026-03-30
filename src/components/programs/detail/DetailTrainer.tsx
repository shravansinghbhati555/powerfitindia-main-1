import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailTrainer({ program, visuals, theme }: Props) {
  const tp = visuals.trainerProfile;
  const waMsg = encodeURIComponent(`Hi! I want to speak with a ${program.name} trainer at PowerFit before joining.`);

  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0D0D" }} aria-label="Your trainer">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
        >
          Your {program.name} Coach at PowerFit
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900 rounded-2xl border-t-4 overflow-hidden" style={{ borderColor: theme.accent }}>
          <div className="grid md:grid-cols-5 gap-0">
            {/* Photo placeholder */}
            <div className="md:col-span-2 relative min-h-[280px] bg-zinc-800 flex items-center justify-center overflow-hidden">
              {tp.photoUrl ? (
                <img src={tp.photoUrl} alt={`${program.name} trainer at PowerFit`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="text-7xl">🏋️</div>
              )}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white border border-zinc-600">
                PowerFit Certified
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 p-6 md:p-8">
              <h3 className="text-white font-bold text-xl mb-2">{tp.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {tp.certifications.map(c => (
                  <span key={c} className="rounded-full px-3 py-1 bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">{c}</span>
                ))}
              </div>

              <div className="mb-4" style={{ color: theme.accent }}>
                <span className="font-bold text-lg">{tp.yearsExp}</span> <span className="text-zinc-400">experience</span>
              </div>

              <blockquote className="text-zinc-300 italic text-lg leading-relaxed border-l-2 pl-4 mb-4" style={{ borderColor: theme.accent }}>
                "{tp.philosophy}"
              </blockquote>

              <p className="text-zinc-600 text-xs">⚠️ Trainer assigned per studio location. WhatsApp to confirm your trainer.</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-zinc-400 text-sm mb-3">Talk to a {program.name} trainer directly:</p>
          <a href={`https://wa.me/918619527263?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-colors">
            💬 Chat with a Trainer
          </a>
        </div>
      </div>
    </section>
  );
}
