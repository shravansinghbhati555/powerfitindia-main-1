import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; theme: CategoryTheme }

export default function DetailFinalCTA({ program, theme }: Props) {
  const waMsg = encodeURIComponent(`Hi! I want to book a free trial for ${program.name} at PowerFit.`);

  return (
    <section
      className="py-16 px-[var(--gutter)] relative overflow-hidden detail-gradient-animate"
      style={{
        background: `linear-gradient(135deg, #000 0%, ${theme.accent}30 50%, #000 100%)`,
      }}
      aria-label="Final CTA"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10" style={{ background: `linear-gradient(to bottom-left, ${theme.accent}, transparent)` }} />

      <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <motion.p
            className="text-xs font-black tracking-widest uppercase mb-2"
            style={{ color: theme.accent }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            READY? YOUR FIRST CLASS IS FREE
          </motion.p>
          <motion.h2
            className="text-4xl lg:text-5xl font-black text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start <span style={{ color: theme.accent }}>{program.name}</span>
            <br />
            Today.
          </motion.h2>
          <motion.p
            className="text-zinc-400 mt-3 text-sm max-w-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Walk in to any PowerFit studio in Jaipur or Sikar{program.available.includes("Online") ? " — or train online across India" : ""}. Free trial. No commitment.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-3 min-w-64"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`https://wa.me/918619527263?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-black text-white text-base bg-[#25D366] hover:bg-[#20BA5C] shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-200"
          >
            WhatsApp to Start
          </a>
          <a
            href="tel:+918619527263"
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-white text-sm bg-zinc-800 hover:bg-zinc-700 transition-all hover:scale-105"
          >
            Call: +91 86195 27263
          </a>
          <p className="text-zinc-600 text-xs text-center">Jaipur · Sikar{program.available.includes("Online") ? " · Online India" : ""}</p>
        </motion.div>
      </div>
    </section>
  );
}
