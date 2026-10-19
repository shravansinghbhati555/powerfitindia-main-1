import { motion } from "framer-motion";
import type { CategoryTheme } from "@/config/categoryThemes";


export default function SectionTransition({ theme }: { theme: CategoryTheme }) {
  return (
    <div className="relative h-[60px] overflow-hidden">
      <div className="absolute inset-0 opacity-60 detail-scanline" />
      <div className="relative h-full max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)] flex items-center justify-between">
        <motion.div
          className="h-[2px] flex-1 mx-4 rounded-full"
          style={{ background: `linear-gradient(to right, transparent, ${theme.accent}, transparent)` }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

