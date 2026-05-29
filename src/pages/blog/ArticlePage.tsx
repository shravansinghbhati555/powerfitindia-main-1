import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Target, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { PowerFitImage } from "@/components/ui/PowerFitImage";
import ArticleContentRenderer from "@/components/blog/ArticleContentRenderer";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { cleanArticleHtml, fetchArticleByHandle, fetchBlogArticles, stripHtml } from "@/lib/blog";
import type { BlogArticle } from "@/types/blog";
import { articleSchema, breadcrumbSchema, faqSchema, organizationSchema, toJsonLd } from "@/lib/seo";

const staticFaqs = [
  { question: "How often should beginners train each week?", answer: "Most beginners see progress with 3 to 4 structured sessions per week with rest days." },
  { question: "What matters more for fat loss: diet or workouts?", answer: "Both matter, but maintaining a calorie deficit with high protein and regular training is the most effective approach." },
];

export default function ArticlePage() {
  const { blogHandle = "news", articleHandle = "" } = useParams<{ blogHandle: string; articleHandle: string }>();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [related, setRelated] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const [current, recs] = await Promise.all([
        fetchArticleByHandle(blogHandle, articleHandle),
        fetchBlogArticles(blogHandle, 6),
      ]);
      setArticle(current);
      setRelated(recs.articles.filter((x) => x.handle !== articleHandle).slice(0, 3));
      setLoading(false);
    };

    run();
  }, [blogHandle, articleHandle]);

  const summary = useMemo(() => (article ? stripHtml(cleanArticleHtml(article.contentHtml)).slice(0, 260) : ""), [article]);
  const takeaways = useMemo(() => {
    const text = article ? stripHtml(cleanArticleHtml(article.contentHtml)) : "";
    const chunks = text.split(".").map((x) => x.trim()).filter(Boolean);
    return chunks.slice(0, 3);
  }, [article]);

  const url = `https://powerfitindia.com/blog/${blogHandle}/${articleHandle}`;

  if (loading) {
    return <div className="min-h-screen bg-[#070707] text-white"><Navbar /><div className="py-28 text-center text-zinc-300">Loading article...</div><Footer /></div>;
  }

  if (!article) return <NotFound />;

  const ldArticle = articleSchema({ headline: article.title, description: article.excerpt, image: article.image?.url, url, datePublished: article.publishedAt, authorName: article.author.name });
  const ldBreadcrumb = breadcrumbSchema([
    { name: "Home", item: "https://powerfitindia.com" },
    { name: "Blog", item: "https://powerfitindia.com/blog" },
    { name: article.title, item: url },
  ]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937_0%,_#070707_45%,_#040404_100%)] text-white">
      <Helmet>
        <title>{article.title} | PowerFit India Blog</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={article.image?.url || "https://powerfitindia.com/placeholder-powerfit.svg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{toJsonLd(ldArticle)}</script>
        <script type="application/ld+json">{toJsonLd(ldBreadcrumb)}</script>
        <script type="application/ld+json">{toJsonLd(faqSchema(staticFaqs))}</script>
        <script type="application/ld+json">{toJsonLd(organizationSchema())}</script>
      </Helmet>

      <div className="fixed left-0 top-0 z-[120] h-[3px] bg-gradient-to-r from-red-500 via-orange-400 to-red-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      <Navbar />

      <main className="pt-20">
        <section className="relative isolate h-[48vh] min-h-[340px] overflow-hidden border-b border-white/10 md:h-[52vh] md:min-h-[380px]">
          {article.image?.url ? <PowerFitImage src={article.image.url} alt={article.title} className="h-full w-full object-cover" sizes="100vw" priority /> : null}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/65 to-black" />
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-7 md:px-8 md:pb-10">
            <div className="mb-3 text-[11px] uppercase tracking-[0.16em] text-zinc-300"><Link to="/blog" className="hover:text-white">Blog</Link> / {blogHandle}</div>
            <h1 className="max-w-4xl font-['Oswald'] text-3xl font-semibold uppercase tracking-[0.05em] leading-[1.05] md:text-6xl">{article.title}</h1>
            <p className="mt-3 text-sm text-zinc-300">{new Date(article.publishedAt).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })} • {article.readingTime} min • {article.author.name}</p>
          </motion.div>
        </section>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-[300px_1fr] md:px-8">
          <aside className="space-y-4 md:sticky md:top-24 md:h-fit">
            <motion.div initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-red-300"><Sparkles className="h-4 w-4" />Quick Summary</p>
              <p className="mt-3 text-sm leading-7 text-zinc-200">{summary}...</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }} viewport={{ once: true }} className="rounded-3xl border border-white/15 bg-gradient-to-br from-red-950/30 via-black/50 to-black/70 p-5 backdrop-blur-xl">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-red-300"><Target className="h-4 w-4" />Key Takeaways</p>
              <ul className="mt-3 space-y-2">
                {(takeaways.length ? takeaways : ["Stay consistent", "Prioritize recovery", "Track progress weekly"]).map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-200"><Zap className="mt-1 h-3.5 w-3.5 shrink-0 text-red-400" />{item}</li>
                ))}
              </ul>
            </motion.div>
          </aside>

          <article>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-white/10 bg-black/35 p-5 md:p-8">
              <ArticleContentRenderer html={article.contentHtml} />
            </motion.div>

            <section className="mt-10 rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
              <h2 className="font-['Oswald'] text-2xl uppercase tracking-[0.08em]">FAQs</h2>
              <div className="mt-4 space-y-4">
                {staticFaqs.map((faq) => (
                  <motion.div key={faq.question} whileHover={{ y: -2 }} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                    <p className="mt-2 text-sm text-zinc-300">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <motion.div whileHover={{ scale: 1.01 }} className="mt-8 rounded-3xl border border-white/15 bg-gradient-to-r from-red-900/25 via-black/60 to-black/70 p-6 text-center">
              <h3 className="font-['Oswald'] text-2xl uppercase tracking-[0.06em]">Start Your Transformation</h3>
              <p className="mt-2 text-zinc-300">Book a free trial or consult with a PowerFit coach.</p>
              <a href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! I want a personalized fitness plan from PowerFit.")}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-semibold transition hover:bg-red-400">Get Coaching</a>
            </motion.div>

            <div className="mt-10">
              <RelatedPosts posts={related} />
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
