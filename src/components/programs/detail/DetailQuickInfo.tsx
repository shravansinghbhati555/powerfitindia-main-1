import { motion } from "framer-motion";
import type { Program } from "@/data/programs";

export default function DetailQuickInfo({ program }: { program: Program }) {
  const items = [
    { icon: "⏱", label: program.duration },
    { icon: "📅", label: `${program.sessionsPerWeek}/week` },
    { icon: "👥", label: program.groupSize },
    { icon: "🎓", label: program.trainerType },
    { icon: "✅", label: program.available.join(" · ") },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className="w-full py-5 overflow-x-auto" 
      aria-label="Quick program info"
    >
      <div className="section-container flex items-center gap-4 md:gap-6 min-w-max md:min-w-0 md:justify-center text-sm text-zinc-300">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {i < items.length - 1 && <span className="ml-3 w-1.5 h-1.5 rounded-full bg-red-600 hidden md:block" />}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
