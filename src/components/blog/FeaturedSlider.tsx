import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import type { BlogArticle } from "@/types/blog";
import { PowerFitImage } from "@/components/ui/PowerFitImage";
import { Star } from "lucide-react";

interface FeaturedSliderProps {
  articles: BlogArticle[];
}

export default function FeaturedSlider({ articles }: FeaturedSliderProps) {
  const featured = useMemo(() => articles.slice(0, 4), [articles]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (featured.length < 2) return;
    const timer = window.setInterval(() => setIndex((prev) => (prev + 1) % featured.length), 6000);
    return () => window.clearInterval(timer);
  }, [featured.length]);

  if (!featured.length) return null;
  const article = featured[index];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div key={article.id} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} exit={{ opacity: 0.2 }} className="relative h-[58vh] min-h-[460px]">
          {article.image?.url ? <PowerFitImage src={article.image.url} alt={article.title} className="h-full w-full object-cover" sizes="100vw" priority /> : null}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/65 to-red-800/30" />
          <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-10">
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-zinc-200">Featured <Star className="w-4 h-4 text-yellow-400" /> {article.readingTime} min</p>
            <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-6xl">{article.title}</h1>
            <p className="mt-4 max-w-2xl text-sm text-zinc-200 md:text-base">{article.excerpt}</p>
            <Link to={`/blog/${article.blog.handle}/${article.handle}`} className="mt-6 inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-400">Read article</Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
