import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import BenefitsTile from "@/components/programs/category/BenefitsTile";
import RealDataBadge from "@/components/programs/category/RealDataBadge";
import WhatsAppCTA from "@/components/programs/category/WhatsAppCTA";
import { useCategoryTheme } from "@/components/programs/category/CategoryThemeProvider";
import { Link } from "react-router-dom";

export default function ProgramDetailSection({ program, index }: { program: Program; index: number }) {
  const theme = useCategoryTheme();
  const reverse = index % 2 === 1;

  const waMessage = `Hi! I want to join the ${program.name} program at PowerFit. Please share batch timings and fee details.`;

  return (
    <article
      itemScope
      itemType="https://schema.org/Course"
      className="section-dark py-16 md:py-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      id={program.slug}
    >
      <div className="section-container">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 min-h-[320px]"
          >
            <img
              src={program.imagePath}
              alt={`${program.name} class at PowerFit Jaipur gym`}
              className="absolute inset-0 w-full object-contain"
              loading="lazy"
              itemProp="image"
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.75))" }}
            />
            <div className="absolute top-4 left-4 bg-black/65 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-xs font-bold text-white">
              {program.intensity}
            </div>

            <div className="absolute top-80 left-0 pl-5 bg-zinc-900 h-full w-full opacity-[0.85]">
            <div className="mt-8">
              <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3">Best For</div>
              <div className="flex flex-wrap gap-2">
                {program.bestFor.map((b) => (
                  <span key={b} className="rounded-full px-3 py-2 bg-zinc-900 border border-white/10 text-sm text-white">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3">Highlights</div>
              <ul className="space-y-2 text-zinc-300">
                {program.programHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-0.5" style={{ color: theme.accent }}>
                      ✅
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-3">Availability</div>
              <div className="flex flex-wrap gap-2">
                {program.available.map((a) => (
                  <span key={a} className="rounded-full px-3 py-2 bg-black/30 border border-white/10 text-sm text-white">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <WhatsAppCTA text="WhatsApp to Join" message={waMessage} size="default" className="flex-1" />
              <Link
                to={`/program/${program.slug}`}
                className="flex-2 text-right ml-5 font-bold underline-offset-4 hover:underline hover:scale-105 transition-all"
              >
                View Details →
              </Link>
            </div>
            
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <Link to={`/program/${program.slug}`} className="font-display text-4xl md:text-5xl text-white hover:underline underline-offset-4" itemProp="name">
              {program.name}
            </Link>
            <p className="mt-2 italic" style={{ color: theme.accent }}>
              {program.tagline}
            </p>

            <p className="mt-5 text-zinc-300 leading-relaxed" itemProp="description">
              {program.description}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-zinc-300">
              <div className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-3">
                <strong className="text-white">⏱</strong> Duration: {program.duration}
              </div>
              <div className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-3">
                <strong className="text-white">📅</strong> Frequency: {program.sessionsPerWeek}/week
              </div>
              <div className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-3">
                <strong className="text-white">👥</strong> Group Size: {program.groupSize}
              </div>
              <div className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-3">
                <strong className="text-white">🎓</strong> Trainer: {program.trainerType}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {program.benefits.slice(0, 4).map((b) => (
                <BenefitsTile key={b.title} benefit={b} accentColor={theme.accent} />
              ))}
            </div>

            <RealDataBadge program={program} />

            

          </motion.div>
        </div>
      </div>
    </article>
  );
}

