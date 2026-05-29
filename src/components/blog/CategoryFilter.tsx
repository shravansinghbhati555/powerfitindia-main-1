import { motion } from "framer-motion";
import type { BlogCategory } from "@/types/blog";

interface CategoryFilterProps {
  categories: (BlogCategory | "All")[];
  active: BlogCategory | "All";
  onSelect: (category: BlogCategory | "All") => void;
}

export default function CategoryFilter({ categories, active, onSelect }: CategoryFilterProps) {
  return (
    <div className="sticky top-20 z-20 -mx-4 overflow-x-auto border-y border-white/10 bg-black/60 px-4 py-4 backdrop-blur">
      <div className="flex min-w-max gap-2">
        {categories.map((category) => {
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
