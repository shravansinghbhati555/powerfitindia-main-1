import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedSlider from "@/components/blog/FeaturedSlider";
import CategoryFilter from "@/components/blog/CategoryFilter";
import NewsletterSection from "@/components/blog/NewsletterSection";
import { BLOG_CATEGORIES, type BlogCategory, type BlogArticle } from "@/types/blog";
import { fetchBlogArticles, matchArticleCategory, uniqueTags } from "@/lib/blog";

const suggestions = ["protein diet", "home workout", "fat loss plateau", "muscle recovery"];

export default function BlogPage() {
  const { blogHandle } = useParams<{ blogHandle?: string }>();
  const handle = blogHandle || "blogs";

  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<BlogCategory | "All">("All");
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(query.trim().toLowerCase()), 280);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const result = await fetchBlogArticles(handle, 12);
      setArticles(result.articles);
      setHasNext(result.hasNextPage);
      setCursor(result.endCursor);
      setLoading(false);
    };
    run();
  }, [handle]);

  const visible = useMemo(() => {
    return articles.filter((article) => {
      const categoryOk = matchArticleCategory(article, category);
      const searchOk = !debounced || `${article.title} ${article.excerpt} ${article.tags.join(" ")}`.toLowerCase().includes(debounced);
      return categoryOk && searchOk;
    });
  }, [articles, category, debounced]);

  const loadMore = async () => {
    if (!hasNext || loading) return;
    setLoading(true);
    const result = await fetchBlogArticles(handle, 9, cursor);
    setArticles((prev) => [...prev, ...result.articles]);
    setHasNext(result.hasNextPage);
    setCursor(result.endCursor);
    setLoading(false);
  };

  const tags = uniqueTags(articles);

  return (
    <div className="min-h-screen bg-[#040404] text-white">
      <Helmet>
        <title>PowerFit Fitness Knowledge Hub | Blog</title>
        <meta name="description" content="Premium fitness editorial stories on weight loss, strength training, nutrition, and gym transformation by PowerFit India." />
        <link rel="canonical" href={`https://powerfitindia.com/blog${blogHandle ? `/${blogHandle}` : ""}`} />
      </Helmet>

      <Navbar />
      <main className="relative overflow-hidden pb-20 pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(239,68,68,0.2),transparent_32%),radial-gradient(circle_at_85%_12%,rgba(14,165,233,0.14),transparent_30%)]" />

        <section className="relative mx-auto max-w-7xl px-4 md:px-8">
          <FeaturedSlider articles={articles} />
        </section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto mt-10 max-w-7xl px-4 md:px-8"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900/95 via-zinc-950/90 to-black/90 p-5 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-red-300">Momentum Zone</p>
                <h2 className="mt-1 text-2xl font-black md:text-4xl">Trending in Fitness</h2>
              </div>
              
            </div>
            <div className="scrollbar-hide mt-4 flex snap-x gap-4 overflow-x-auto pb-2">
              {articles.slice(0, 8).map((article, i) => (
                <Link key={article.id} to={`/blog/${article.blog.handle}/${article.handle}`} className="group w-72 shrink-0 snap-start rounded-2xl border border-white/10 bg-black/45 p-4 transition hover:border-red-400/40">
                  <p className="line-clamp-2 text-sm font-semibold">{article.title}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                    <span>{article.readingTime} min read</span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:text-red-300" />
                  </div>
                  <div className="mt-3 h-1 rounded-full bg-zinc-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400" style={{ width: `${Math.min(100, 18 + i * 8)}%` }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto mt-10 max-w-7xl space-y-5 px-4 md:px-8"
        >
          <CategoryFilter categories={["All", ...BLOG_CATEGORIES]} active={category} onSelect={setCategory} />

          <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[linear-gradient(140deg,rgba(8,20,30,0.92),rgba(8,8,8,0.95))] p-5 md:p-6">
            <div className="mb-4 flex items-center gap-2 text-cyan-200">
              <Sparkles className="h-4 w-4" />
              <p className="text-[11px] uppercase tracking-[0.16em]">AI Search Navigator</p>
            </div>
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: best HIIT for fat loss with meal timing"
                className="h-12 w-full rounded-2xl border border-white/15 bg-black/45 pl-10 pr-4 text-sm outline-none ring-cyan-400/40 transition focus:ring"
              />
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...suggestions, ...tags.slice(0, 7)].map((tag) => (
                <button key={tag} type="button" onClick={() => setQuery(tag)} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100 transition hover:bg-cyan-400/20">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        <section className="relative mx-auto mt-10 max-w-7xl px-4 md:px-8">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">Editorial Grid</p>
              <h2 className="mt-1 text-2xl font-black md:text-4xl">Performance Stories</h2>
            </div>
            <p className="text-xs text-zinc-500">{visible.length} matching articles</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((article, index) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 26, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-120px" }} transition={{ duration: 0.45, delay: index * 0.03 }}>
                <BlogCard article={article} featured={index % 7 === 0} />
              </motion.div>
            ))}
          </div>

          {hasNext ? (
            <div className="mt-10 text-center">
              <button type="button" onClick={loadMore} className="rounded-full border border-white/20 bg-zinc-900 px-8 py-3 text-sm font-semibold transition hover:border-red-400/40 hover:bg-zinc-800">Load more stories</button>
            </div>
          ) : null}
        </section>

        <section className="relative mx-auto mt-12 max-w-7xl px-4 md:px-8">
          <NewsletterSection />
        </section>

        <section className="relative mx-auto mt-10 grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8">
          <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-900/25 via-black/70 to-black p-6">
            <h3 className="text-2xl font-bold">Transformation Stories</h3>
            <p className="mt-2 text-sm text-zinc-300">Real journeys from PowerFit members in Jaipur and Sikar.</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-900/20 via-black/70 to-black p-6">
            <h3 className="text-2xl font-bold">Fitness Tools</h3>
            <p className="mt-2 text-sm text-zinc-300">BMI Calculator, Calorie Calculator, Workout Planner, and Membership recommendations.</p>
          </motion.div>
        </section>

        <section className="relative mx-auto mt-10 max-w-7xl px-4 md:px-8">
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-2xl font-black md:text-4xl">Fitness Knowledge Hub</h2>
            <p className="mt-3 text-zinc-300">Explore long-tail guides on strength training for beginners, HIIT routines for busy professionals, recovery protocols, and nutrition science for sustainable fat loss.</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
              {["best gym workout plan in india", "how to lose fat without losing muscle", "home workout for women", "protein intake calculator"].map((kw) => <span key={kw} className="rounded-full border border-white/20 px-3 py-1">{kw}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
