import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; theme: CategoryTheme }

export default function DetailFinalCTA({ program, theme }: Props) {
  const waMsg = encodeURIComponent(`Hi! I want to book a free trial for ${program.name} at PowerFit.`);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#0A0A0A" }} aria-label="Final CTA">
      {/* Accent glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse at center, ${theme.accentGlow}, transparent 70%)`,
      }} />

      <div className="section-container relative z-10 text-center max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: theme.accent }}>
            READY TO START?
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            Your First Class Is{" "}
            <span style={{ color: theme.accent }}>Free.</span>
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Walk into any PowerFit studio in Jaipur or Sikar — our {program.trainerType.split("(")[0].trim().toLowerCase()} will
            personally assess you and show you exactly what {program.name} can do for your body.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a href={`https://wa.me/918619527263?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-colors">
              💬 Book Free Trial on WhatsApp
            </a>
            <a href="tel:+918619527263"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold transition-colors border border-zinc-600">
              📞 Call: +91 86195 27263
            </a>
          </div>

          <p className="text-zinc-500 text-sm">
            Studios: Jaipur (Malviya Nagar · Mansarovar) · Sikar (Piprali Road · Vasant Vihar · Rani Sati Road)
            {program.available.includes("Online") && " · Online across India"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
