import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailSocialProof({ program, visuals, theme }: Props) {
  const testimonials = visuals.testimonials ?? [];
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      className="py-10 overflow-hidden"
      style={{ background: `linear-gradient(180deg, #111 0%, ${theme.accent}10 100%)` }}
      aria-label="Testimonials"
    >
      <div className="mb-6 px-[var(--gutter)] max-w-[var(--content-max-width)] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-2xl font-black text-white"
        >
          Member Results
        </motion.h2>
      </div>

      {testimonials.length > 0 && (
        <>
          <div className="relative group">
            <div className="flex gap-4 mb-4" style={{ animation: "marquee-scroll 25s linear infinite" }}>
              {doubled.map((t, i) => (
                <div
                  key={`a-${i}`}
                  className="shrink-0 w-[280px] h-[120px] bg-zinc-900 rounded-2xl p-4 border"
                  style={{ borderColor: `${theme.accent}30` }}
                >
                  <p className="text-zinc-200 italic text-xs leading-snug line-clamp-2 mb-2">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xs">{t.name}</div>
                      <div className="text-zinc-500 text-[11px]">{t.location}</div>
                    </div>
                    <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, si) => <span key={si} className="text-yellow-400 text-xs">⭐</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4" style={{ animation: "marquee-scroll 20s linear infinite reverse" }}>
              {doubled.map((t, i) => (
                <div
                  key={`b-${i}`}
                  className="shrink-0 w-[280px] h-[120px] bg-zinc-900 rounded-2xl p-4 border"
                  style={{ borderColor: `${theme.accent}20` }}
                >
                  <p className="text-zinc-200 italic text-xs leading-snug line-clamp-2 mb-2">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xs">{t.name}</div>
                      <div className="text-zinc-500 text-[11px]">{t.location}</div>
                    </div>
                    <div className="flex gap-0.5">{Array.from({ length: t.rating }).map((_, si) => <span key={si} className="text-yellow-400 text-xs">⭐</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
