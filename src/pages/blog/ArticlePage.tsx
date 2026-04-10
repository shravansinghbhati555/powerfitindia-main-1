import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { useArticle } from "@/hooks/useShopify";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return date;
  }
}

export default function ArticlePage() {
  const { blogHandle, articleHandle } = useParams<{ blogHandle: string; articleHandle: string }>();
  const { article, loading } = useArticle(blogHandle || "news", articleHandle || "");

  if (!loading && !article) return <NotFound />;

  const title = article ? `${article.title} | PowerFit India Blog` : "Blog | PowerFit India";
  const desc = (article?.excerpt || "").slice(0, 160) || "PowerFit India blog article.";
  const url = `https://powerfitindia.com/blog/${blogHandle}/${articleHandle}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        {article?.image?.url && <meta property="og:image" content={article.image.url} />}
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <section className="relative h-[380px] overflow-hidden border-b border-white/10">
          {article?.image?.url && (
            <PowerFitImage
              src={article.image.url}
              alt=""
              sizes="100vw"
              priority
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)] h-full flex flex-col justify-end pb-10">
            <div className="text-xs text-zinc-300">
              <Link to="/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2 text-zinc-600">/</span>
              <span className="text-zinc-400">{blogHandle}</span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight max-w-4xl">{article?.title}</h1>
            <div className="mt-3 text-sm text-zinc-400">
              {article?.publishedAt ? formatDate(article.publishedAt) : ""}{article?.author?.name ? ` · ${article.author.name}` : ""}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {(article?.tags || []).slice(0, 6).map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-3xl mx-auto px-[var(--gutter)]">
            {loading ? (
              <div className="py-20 text-center text-zinc-400">Loading article…</div>
            ) : (
              <>
                <div
                  className="prose prose-invert prose-red prose-lg max-w-none
                             prose-headings:text-white prose-p:text-zinc-300
                             prose-a:text-red-400 prose-strong:text-white
                             prose-ul:text-zinc-300 prose-li:marker:text-red-500"
                  dangerouslySetInnerHTML={{ __html: article?.contentHtml || "" }}
                />

                <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-white font-black">Share</div>
                    <div className="text-zinc-400 text-sm">Send this article to a friend.</div>
                  </div>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${article?.title}\n${url}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
                  >
                    Share on WhatsApp
                  </a>
                </div>

                <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-red-950/30 via-black/40 to-black/40 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-white font-black text-lg">Book a free trial at PowerFit</div>
                    <div className="text-zinc-400 text-sm">Start training in Jaipur or Sikar today.</div>
                  </div>
                  <a
                    href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! I want to book a free trial at PowerFit.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
                  >
                    WhatsApp to book
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

