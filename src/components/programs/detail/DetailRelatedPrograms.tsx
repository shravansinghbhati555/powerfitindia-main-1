import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programs } from "@/data/programs";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";
import { MostPopularCrown } from "@/components/ui/MostPopularBadge";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

interface Props { program: Program; theme: CategoryTheme }

export default function DetailRelatedPrograms({ program, theme }: Props) {
  let related = programs.filter((p) => p.categoryId === program.categoryId && p.id !== program.id);
  if (related.length < 2) {
    const others = programs.filter((p) => p.id !== program.id && p.categoryId !== program.categoryId);
    related = [...related, ...others];
  }
  const sortedRelated = [
    ...related.filter((p) => p.isMostPopular),
    ...related.filter((p) => !p.isMostPopular),
  ].slice(0, 4);

  return (
    <section className="py-10 overflow-hidden" style={{ background: "#111" }} aria-label="Related programs">
      <div className="px-[var(--gutter)] max-w-[var(--content-max-width)] mx-auto mb-5 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-black text-white">You Might Also Like</h2>
        <Link to="/programs" className="text-xs font-bold text-zinc-400 hover:text-white transition-colors">
          Browse all →
        </Link>
      </div>

      <div className="flex gap-4 px-[var(--gutter)] overflow-x-auto pb-4 snap-x snap-mandatory">
        {sortedRelated.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="shrink-0 snap-start relative"
          >
            {p.isMostPopular && <MostPopularCrown compact />}
            <Link to={`/program/${p.slug}`} className="block w-64 h-[240px] rounded-2xl overflow-hidden relative group border border-white/10">
              <PowerFitImage
                src={p.imagePath}
                alt={`${p.name} program PowerFit India`}
                sizes="256px"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-xs font-bold mb-1" style={{ color: theme.accent }}>
                  {p.category}
                </div>
                <div className="text-white font-black text-base">{p.name}</div>
                <div className="text-zinc-400 text-xs mt-1 line-clamp-1">{p.tagline}</div>
                <div className="mt-2 text-xs font-bold" style={{ color: theme.accent }}>
                  {p.benefits[0]?.value} {p.benefits[0]?.title} →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="px-[var(--gutter)] max-w-[var(--content-max-width)] mx-auto mt-2">
        <Link to={`/programs/${program.categoryId}`} className="text-xs font-bold underline" style={{ color: theme.accent }}>
          View all {program.category} programs →
        </Link>
      </div>
    </section>
  );
}
