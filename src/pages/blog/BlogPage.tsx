import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBlog } from "@/hooks/useShopify";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return date;
  }
}

export default function BlogPage() {
  const { blogHandle } = useParams<{ blogHandle?: string }>();
  const handle = blogHandle || "news";
  const { articles, loading, hasNextPage, loadMore } = useBlog(handle);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>Fitness Blog | PowerFit India</title>
        <meta name="description" content="PowerFit India fitness blog: training tips, gym setup guides, and nutrition. Powered by Shopify." />
        <link rel="canonical" href={`https://powerfitindia.com/blog${blogHandle ? `/${blogHandle}` : ""}`} />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <section className="relative h-[250px] border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)] h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black">PowerFit Fitness Blog</h1>
            <p className="mt-2 text-zinc-400 text-sm md:text-base max-w-2xl">
              Training tips, gym setup guides, and nutrition insights — published from Shopify into the PowerFit site.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/blog" className="px-4 py-2 rounded-full text-xs font-bold bg-white/10 border border-white/10 hover:bg-white/15 transition-colors">
                Latest
              </Link>
              <Link to={`/blog/${handle}`} className="px-4 py-2 rounded-full text-xs font-bold bg-white/10 border border-white/10 hover:bg-white/15 transition-colors">
                {handle}
              </Link>
              <a
                href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! Please subscribe me to PowerFit fitness tips on WhatsApp.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-black bg-[#25D366] hover:scale-105 transition-transform"
              >
                WhatsApp tips
              </a>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
            {loading ? (
              <div className="py-20 text-center text-zinc-400">Loading articles…</div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {articles.map((a) => (
                    <Link
                      key={a.id}
                      to={`/blog/${a.blog.handle}/${a.handle}`}
                      className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden hover:border-white/20 transition-colors group"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        {a.image?.url && (
                          <PowerFitImage
                            src={a.image.url}
                            alt={a.image.altText || a.title}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="text-xs text-zinc-300">{formatDate(a.publishedAt)} · {a.author?.name}</div>
                          <div className="mt-1 text-white font-black line-clamp-2">{a.title}</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-zinc-400 text-sm line-clamp-3">{a.excerpt || "Read more →"}</div>
                        <div className="mt-3 text-red-400 text-xs font-black">Read More →</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {hasNextPage && (
                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => loadMore()}
                      className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-sm font-black hover:bg-white/15 transition-colors"
                    >
                      Load more
                    </button>
                  </div>
                )}

                <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-red-950/30 via-black/40 to-black/40 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-white font-black text-lg">Get weekly tips on WhatsApp</div>
                    <div className="text-zinc-400 text-sm">Short, actionable fitness guidance from PowerFit.</div>
                  </div>
                  <a
                    href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! Subscribe me to PowerFit weekly fitness tips.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
                  >
                    Subscribe
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

