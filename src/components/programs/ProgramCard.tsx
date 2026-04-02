import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import { MostPopularBadge, MostPopularCrown, MostPopularRibbon } from "@/components/ui/MostPopularBadge";

export interface ProgramCardProps {
  program: Program;
  index: number;
  categoryColor: string;
  onOpen: (program: Program) => void;
}

const availIcon = (a: Program["available"][number]) => (a === "In-Studio" ? "🏋️" : a === "Online" ? "💻" : "🏠");

export default function ProgramCard({ program, index, categoryColor, onOpen }: ProgramCardProps) {
  const hoverShadow = `0 20px 60px rgba(232,0,14,0.25)`;

  return (
    <motion.article
      id={program.slug}
      itemScope
      itemType="https://schema.org/Course"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: program.isMostPopular ? "0 0 40px rgba(234,179,8,0.25)" : hoverShadow }}
      className={`relative bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer group border program-card-pulse ${
        program.isMostPopular ? "border-yellow-400/60 shadow-[0_0_30px_rgba(234,179,8,0.2)]" : "border-white/5"
      }`}
      onClick={() => onOpen(program)}
      style={{ willChange: "transform", boxShadow: "0 0 0 rgba(232,0,14,0)" }}
    >
      {program.isMostPopular && <MostPopularCrown />}
      <div className="relative h-48 overflow-hidden">
        {program.isMostPopular && <MostPopularRibbon />}
        <img
          src={program.imagePath}
          alt={`${program.name} at PowerFit India gym`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/40 to-transparent" />

        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white border border-white/10 z-10">
          {program.isMostPopular ? <MostPopularBadge size="sm" animated={false} className="!py-0.5" /> : program.intensity}
        </div>

        <div className="absolute top-3 right-3 flex gap-1">
          {program.available.map((a) => (
            <span key={a} className="bg-red-600/80 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs text-white">
              {availIcon(a)}
            </span>
          ))}
        </div>

        <div className="absolute left-0 right-0 bottom-0 h-[2px]" style={{ background: `linear-gradient(to right, ${categoryColor}, transparent)` }} />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-white mb-1" itemProp="name">
          {program.name}
        </h3>
        <p className="text-zinc-400 text-xs mb-4 line-clamp-2" itemProp="description">
          {program.tagline}
        </p>

        <div className="flex gap-3 mb-4 text-xs text-zinc-500">
          <span>⏱ {program.duration}</span>
          <span>📅 {program.sessionsPerWeek}/week</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {program.benefits.slice(0, 4).map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800 rounded-xl p-1 text-center"
            >
              <div className="text-xs mr-0.5">{benefit.icon}</div>
              <div className="text-red-400 font-black text-xs leading-none">{benefit.value}</div>
              <div className="text-zinc-400 text-xs ml-0.5">{benefit.title}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-zinc-800/50 rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
          <span className="text-green-400 text-xs">📊</span>
          <span className="text-zinc-400 text-xs">
            Based on <strong className="text-white">10,000+</strong> PowerFit members
          </span>
        </div>

        <a href={`/program/${program.slug}`}
          type="button"
          className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          View Program Details <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <span className="sr-only" itemProp="provider">
        PowerFit India
      </span>
    </motion.article>
  );
}

