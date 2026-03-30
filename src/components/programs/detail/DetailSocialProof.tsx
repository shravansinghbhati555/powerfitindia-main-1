import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

const defaultTestimonials = [
  { quote: "This program completely changed my body and my mindset. PowerFit's coaches really care about results.", name: "Vikram S.", location: "Jaipur", rating: 5 },
  { quote: "I tried 3 gyms before PowerFit. The difference is the systems — everything is tracked, everything is measured.", name: "Priya M.", location: "Mansarovar, Jaipur", rating: 5 },
  { quote: "The best investment I've made in my health. My energy levels are through the roof after just 45 days.", name: "Rahul K.", location: "Sikar", rating: 5 },
];

interface Props { program: Program; visuals: ProgramVisual; theme: CategoryTheme }

export default function DetailSocialProof({ program, visuals, theme }: Props) {
  const testimonials = visuals.testimonials?.length ? visuals.testimonials : defaultTestimonials;
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 overflow-hidden" style={{ background: "#0D0D0D" }} aria-label="Testimonials">
      <div className="section-container mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white"
        >
          Members Who Transformed With {program.name}
        </motion.h2>
      </div>

      <div className="relative group">
        <div className="flex gap-6 animate-[scroll-x_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <div key={i} className="shrink-0 w-80 bg-zinc-900 rounded-2xl p-6 border-l-4" style={{ borderColor: theme.accent }}>
              <p className="text-zinc-200 italic text-sm leading-relaxed mb-4">"{t.quote}"</p>
              <div className="text-white font-bold text-sm">{t.name}</div>
              <div className="text-zinc-500 text-xs">{t.location}</div>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
              <a href={`https://wa.me/918619527263?text=${encodeURIComponent(`Hi! I saw a testimonial for ${program.name} at PowerFit and want to join.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 text-green-400 text-xs font-bold hover:text-green-300 transition-colors">
                Join {program.name} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
