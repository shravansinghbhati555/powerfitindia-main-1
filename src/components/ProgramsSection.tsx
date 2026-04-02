import { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { categoryThemes, type CategoryThemeId } from "@/config/categoryThemes";
import ProgramCard from "@/components/programs/ProgramCard";

const ProgramsSection = () => {
  const sortedPrograms = useMemo(() => {
    const popular = programs.filter((p) => p.isMostPopular);
    const rest = programs.filter((p) => !p.isMostPopular && p.featured);
    return [...popular, ...rest].slice(0, 6);
  }, []);

  return (
    <section id="programs" className="section-dark py-20 md:py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="label-text text-primary mb-4 tracking-[0.3em]">20+ Programs</p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground leading-[0.9]">
              Train Your Way.
              <br />
              <span className="gradient-text">Your Rules.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-dark-muted text-base md:text-lg leading-relaxed"
          >
            From heavy iron to mindful flow — choose from over 20 specialized programs designed for every fitness level and ambition.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 rounded-full border border-primary/20 flex items-center justify-center"
            >
              <div
                className="w-32 h-32 rounded-full border border-primary/10 flex items-center justify-center bg-dark-card/50 backdrop-blur-sm"
                style={{ animation: "none" }}
              >
                <div className="text-center" style={{ animation: "none", transform: "none" }}>
                  <span className="font-display text-2xl text-primary block">YOUR</span>
                  <span className="font-display text-2xl text-dark-foreground block">FITNESS</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPrograms.map((p, i) => {
              const catTheme = categoryThemes[p.categoryId as CategoryThemeId];
              const accent = catTheme?.accent ?? "#E8000E";
              const card = (
                <ProgramCard
                  program={p}
                  index={i}
                  categoryColor={accent}
                  onOpen={(prog) => {
                    window.location.href = `/program/${prog.slug}`;
                  }}
                />
              );

              if (p.isMostPopular) {
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="relative col-span-1 sm:col-span-2 lg:col-span-1"
                  >
                    <motion.div
                      className="absolute -inset-0.5 rounded-2xl -z-10 opacity-90"
                      animate={{
                        background: [
                          "linear-gradient(0deg, #FBBF24, #F59E0B, #EF4444)",
                          "linear-gradient(120deg, #FBBF24, #F59E0B, #EF4444)",
                          "linear-gradient(240deg, #FBBF24, #F59E0B, #EF4444)",
                          "linear-gradient(360deg, #FBBF24, #F59E0B, #EF4444)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    {card}
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  {card}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/programs"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 label-text text-primary hover:text-accent transition-colors"
            >
              View all programs <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
