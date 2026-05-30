import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { BlogCategory } from "@/types/blog";

interface CategoryFilterProps {
  categories: (BlogCategory | "All")[];
  active: BlogCategory | "All";
  onSelect: (category: BlogCategory | "All") => void;
}

export default function CategoryFilter({ categories, active, onSelect }: CategoryFilterProps) {
  const [expanded, setExpanded] = useState(false);

  const compact = useMemo(() => {
    const base = categories.slice(0, 7);
    if (active !== "All" && !base.includes(active)) return [...base, active];
    return base;
  }, [active, categories]);

  const visible = expanded ? categories : compact;

  return (
    <div className="sticky top-20 z-20 border-y border-white/10 bg-black/70 px-4 py-4 backdrop-blur">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">Filter by goal</p>
        {categories.length > compact.length ? (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-white/15 bg-zinc-900/70 px-3 py-1 text-[11px] font-semibold text-zinc-300 transition hover:border-red-400/40 hover:text-white"
          >
            {expanded ? "Show fewer filters" : "See more filters"}
          </button>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2">
        {visible.map((category) => {
          const isActive = active === category;
          return (
            <motion.button
              key={category}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelect(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${isActive ? "bg-red-500 text-white" : "border border-white/20 bg-zinc-900/75 text-zinc-300 hover:text-white"}`}
            >
              {category}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
