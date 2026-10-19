import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { BlogArticle } from "@/types/blog";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

interface BlogCardProps {
  article: BlogArticle;
  featured?: boolean;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogCard({ article, featured = false }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link to={`/blog/${article.blog.handle}/${article.handle}`} className="block h-full">
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          {article.image?.url ? (
            <PowerFitImage
              src={article.image.url}
              alt={article.image.altText || article.title}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
            {article.readingTime} min read
          </div>
        </div>

        <div className="space-y-3 p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{formatDate(article.publishedAt)} • {article.author.name}</p>
          <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-semibold leading-tight text-white`}>{article.title}</h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-zinc-300">{article.excerpt}</p>
          <div className="inline-flex rounded-full border border-red-400/40 px-3 py-1 text-xs font-semibold text-red-300">Read story</div>
        </div>
      </Link>
    </motion.article>
  );
}
