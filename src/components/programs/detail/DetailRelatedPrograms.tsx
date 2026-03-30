import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programs } from "@/data/programs";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; theme: CategoryTheme }

export default function DetailRelatedPrograms({ program, theme }: Props) {
  let related = programs.filter(p => p.categoryId === program.categoryId && p.id !== program.id).slice(0, 3);
  if (related.length < 2) {
    const others = programs.filter(p => p.id !== program.id && p.categoryId !== program.categoryId).slice(0, 3 - related.length);
    related = [...related, ...others];
  }

  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0D0D" }} aria-label="Related programs">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
        >
          You Might Also Like
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {related.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            >
              <Link to={`/programs/${p.slug}`}
                className="block bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-600 transition-all group">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.imagePath} alt={`${p.name} at PowerFit`} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg">{p.name}</h3>
                  <p className="text-zinc-500 text-sm mt-1 line-clamp-1">{p.tagline}</p>
                  <div className="flex gap-2 mt-3">
                    <span className="rounded-full px-2 py-1 bg-zinc-800 text-xs text-zinc-300">{p.intensity}</span>
                    <span className="rounded-full px-2 py-1 bg-zinc-800 text-xs text-zinc-300">{p.duration}</span>
                  </div>
                  <div className="mt-3 font-bold text-sm" style={{ color: theme.accent }}>
                    {p.benefits[0]?.value} {p.benefits[0]?.title}
                  </div>
                  <div className="mt-2 text-sm font-bold" style={{ color: theme.accent }}>
                    View Program →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <Link to={`/programs/${program.categoryId}`} className="font-bold hover:underline" style={{ color: theme.accent }}>
            View all {program.category} programs →
          </Link>
          <Link to="/programs" className="text-zinc-400 font-bold hover:text-white transition-colors">
            Browse all programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
