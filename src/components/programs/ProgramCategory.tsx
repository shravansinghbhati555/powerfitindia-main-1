import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Program } from "@/data/programs";
import ProgramCard from "@/components/programs/ProgramCard";

export interface CategoryMeta {
  id: string;
  label: string;
  icon: string;
  color: string;
  count: number;
}

function getCardIntro(categoryId: string, i: number) {
  switch (categoryId) {
    case "strength":
      return {
        initial: { opacity: 0, y: -28, scale: 1.02 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };
    case "cardio":
      return {
        initial: { opacity: 0, scale: 0.7, filter: "blur(4px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };
    case "mind-body":
      return {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.08, duration: 0.65, ease: "easeOut" },
      };
    case "weight-management":
      return {
        initial: { opacity: 0, x: i % 2 === 0 ? -36 : 36 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };
    case "specialty":
      return {
        initial: { opacity: 0, rotateY: 90 },
        animate: { opacity: 1, rotateY: 0 },
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        style: { transformStyle: "preserve-3d" as const },
      };
    case "online":
      return {
        initial: { opacity: 0, rotateY: 90 },
        animate: { opacity: 1, rotateY: 0 },
        transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        style: { transformStyle: "preserve-3d" as const },
      };
    default:
      return {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.08, duration: 0.55 },
      };
  }
}

export default function ProgramCategory({
  category,
  index,
  programs,
  onOpen,
}: {
  category: CategoryMeta;
  index: number;
  programs: Program[];
  onOpen: (p: Program) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15, once: true });
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (category.id !== "strength") return;
    if (!inView) return;
    setFlash(true);
    const t = window.setTimeout(() => setFlash(false), 420);
    return () => window.clearTimeout(t);
  }, [category.id, inView]);

  const bgFx = useMemo(() => {
    if (category.id === "cardio") {
      return (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-0"
          animate={inView ? { opacity: [0, 0.22, 0] } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 18px)",
          }}
        />
      );
    }
    if (category.id === "mind-body") {
      return (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          animate={inView ? { opacity: [0.08, 0.14, 0.08] } : { opacity: 0.08 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "radial-gradient(circle at 50% 40%, rgba(124,58,237,0.22), transparent 60%)" }}
        />
      );
    }
    if (category.id === "specialty") {
      return (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
            animate={{ opacity: inView ? [0, 0.22, 0] : 0, scale: inView ? [0.6, 1.1, 1.4] : 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, rgba(232,0,14,0.35), transparent 60%)" }}
          />
        </motion.div>
      );
    }
    if (category.id === "online") {
      return (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
            animate={{ opacity: inView ? [0, 0.22, 0] : 0, scale: inView ? [0.6, 1.1, 1.4] : 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ background: "radial-gradient(circle, rgba(232,0,14,0.35), transparent 60%)" }}
          />
        </motion.div>
      );
    }
    return null;
  }, [category.id, inView]);

  return (
    <motion.section
      id={`category-${category.id}`}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-8 md:py-12 section-dark overflow-hidden"
    >
      {bgFx}

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="text-5xl">{category.icon}</div>
          <div>
            <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-1">CATEGORY 0{index + 1}</div>
            <h2 className="text-4xl font-black text-white">{category.label}</h2>
          </div>
          <div className="ml-auto h-px flex-1 max-w-xs" style={{ background: `linear-gradient(to right, ${category.color}, transparent)` }} />
          <a href={`/programs/${category.id}`} className="text-zinc-500 text-sm hover:text-primary transition-colors">View All {category.count} Programs</a>
        </motion.div>

        {category.id === "strength" && flash && (
          <div className="absolute left-0 right-0 top-0 h-full pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-full bg-white/5 shutter-flash" />
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {programs.map((p, i) => {
            const intro = getCardIntro(category.id, i);
            const glow = category.id === "mind-body" ? "0 20px 60px rgba(124,58,237,0.20)" : undefined;
            return (
              <motion.div
                key={p.id}
                initial={intro.initial}
                whileInView={intro.animate}
                viewport={{ once: true, amount: 0.2 }}
                transition={intro.transition as any}
                style={{ ...(intro.style ?? {}), boxShadow: glow }}
              >
                <ProgramCard program={p} index={i} categoryColor={category.color} onOpen={onOpen} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

