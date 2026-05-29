import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#070707_40%,_#040404_100%)] text-white">
      <Helmet>
        <title>PowerFit Fitness Knowledge Hub | Blog</title>
        <meta name="description" content="Premium fitness editorial stories on weight loss, strength training, nutrition, and gym transformation by PowerFit India." />
        <link rel="canonical" href={`https://powerfitindia.com/blog${blogHandle ? `/${blogHandle}` : ""}`} />
      </Helmet>

      <Navbar />
      <main className="space-y-10 px-4 pb-16 pt-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FeaturedSlider articles={articles} />
        </div>

        <section className="mx-auto max-w-7xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold md:text-3xl">Trending in Fitness</h2>
            <div className="flex gap-2 overflow-x-auto">
              {["Most Read", "Fat loss", "Muscle", "Nutrition", "Transformation"].map((pill) => <span key={pill} className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-zinc-300">{pill}</span>)}
            </div>
          </div>
          <div className="flex snap-x gap-4 overflow-x-auto pb-2">
            {articles.slice(0, 8).map((article) => (
              <Link key={article.id} to={`/blog/${article.blog.handle}/${article.handle}`} className="w-72 shrink-0 snap-start rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <p className="line-clamp-2 text-sm font-semibold">{article.title}</p>
                <p className="mt-2 text-xs text-zinc-400">{article.readingTime} min read</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-5">
          <CategoryFilter categories={["All", ...BLOG_CATEGORIES]} active={category} onSelect={setCategory} />
          <div className="rounded-3xl border border-white/10 bg-black/35 p-4">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search with AI suggestions: 'best HIIT for fat loss'" className="h-12 w-full rounded-2xl border border-white/20 bg-black/50 px-4 text-sm outline-none ring-red-500/40 focus:ring" />
            <div className="mt-3 flex flex-wrap gap-2">
              {[...suggestions, ...tags.slice(0, 6)].map((tag) => <button type="button" onClick={() => setQuery(tag)} key={tag} className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-300">{tag}</button>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((article, index) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: index * 0.04 }}>
                <BlogCard article={article} featured={index % 7 === 0} />
              </motion.div>
            ))}
          </div>

          {hasNext ? (
            <div className="mt-10 text-center">
              <button type="button" onClick={loadMore} className="rounded-full border border-white/20 bg-zinc-900 px-8 py-3 text-sm font-semibold hover:border-red-400/40">Load more stories</button>
            </div>
          ) : null}
        </section>

        <section className="mx-auto max-w-7xl">
          <NewsletterSection />
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6"><h3 className="text-2xl font-bold">Transformation Stories</h3><p className="mt-2 text-sm text-zinc-300">Real journeys from PowerFit members in Jaipur and Sikar.</p></div>
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6"><h3 className="text-2xl font-bold">Fitness Tools</h3><p className="mt-2 text-sm text-zinc-300">BMI Calculator, Calorie Calculator, Workout Planner, and Membership recommendations.</p></div>
        </section>

        <section className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-black/40 p-6">
          <h2 className="text-2xl font-black md:text-4xl">Fitness Knowledge Hub</h2>
          <p className="mt-3 text-zinc-300">Explore long-tail guides on strength training for beginners, HIIT routines for busy professionals, recovery protocols, and nutrition science for sustainable fat loss.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
            {["best gym workout plan in india", "how to lose fat without losing muscle", "home workout for women", "protein intake calculator"].map((kw) => <span key={kw} className="rounded-full border border-white/20 px-3 py-1">{kw}</span>)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
