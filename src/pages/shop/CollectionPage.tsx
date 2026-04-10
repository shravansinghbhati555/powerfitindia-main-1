import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { useCollection } from "@/hooks/useShopify";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

function formatINR(amount: string) {
  const n = Number.parseFloat(amount);
  if (!Number.isFinite(n)) return "₹—";
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function CollectionPage({ handle }: { handle?: string }) {
  const params = useParams<{ collectionHandle: string }>();
  const collectionHandle = handle || params.collectionHandle || "gym-equipment";
  const [query, setQuery] = useState("");

  const { collection, loading, error, hasNextPage, loadMore } = useCollection(collectionHandle);

  const products = useMemo(() => {
    const edges = collection?.products?.edges ?? [];
    const nodes = edges.map((e) => e.node);
    if (!query.trim()) return nodes;
    const q = query.toLowerCase();
    return nodes.filter((p) => p.title.toLowerCase().includes(q) || p.productType?.toLowerCase().includes(q) || p.tags?.some((t) => t.toLowerCase().includes(q)));
  }, [collection?.products?.edges, query]);

  if (!loading && !collection) return <NotFound />;

  const title = collection ? `${collection.title} | PowerFit India Shop` : "Shop | PowerFit India";
  const desc = collection?.description?.slice(0, 160) || "Browse gym equipment and setup packages from PowerFit India. Checkout on Shopify.";
  const heroImg = collection?.image?.url;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`https://powerfitindia.com/shop/${collectionHandle}`} />
        {heroImg && <meta property="og:image" content={heroImg} />}
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Mini hero */}
        <section className="relative h-[300px] overflow-hidden border-b border-white/10">
          {heroImg && (
            <PowerFitImage src={heroImg} alt="" sizes="100vw" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="relative z-10 max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)] h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-white">Shop</Link>
              <span>/</span>
              <span className="text-white">{collection?.title || collectionHandle}</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">{collection?.title || "Shop"}</h1>
            <p className="mt-3 max-w-2xl text-zinc-300 text-sm md:text-base">
              {collection?.description || "Browse products and checkout securely on Shopify."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/search"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-sm font-bold hover:bg-white/15 transition-colors"
              >
                Search products
              </Link>
              <a
                href={`https://wa.me/918619527263?text=${encodeURIComponent(`Hi! I want a gym setup quote. I'm browsing the ${collection?.title || collectionHandle} collection.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#25D366] text-sm font-black hover:scale-105 transition-transform"
              >
                WhatsApp for a quote
              </a>
            </div>
          </div>
        </section>

        {/* Sticky filter bar */}
        <section className="sticky top-14 md:top-16 z-30 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)] py-3 flex flex-col md:flex-row md:items-center gap-3">
            <div className="flex-1 flex items-center gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search in this collection…"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-red-600/40"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="hidden md:inline">Checkout on Shopify</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <Link to="/shop" className="hover:text-white font-bold">Featured</Link>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-10">
          <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
            {error && <div className="mb-6 text-sm text-red-400">{error}</div>}
            {loading ? (
              <div className="py-20 text-center text-zinc-400">Loading collection…</div>
            ) : products.length === 0 ? (
              <div className="py-20 text-center text-zinc-400">No products found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p, i) => {
                  const img = p.featuredImage || p.images?.edges?.[0]?.node || null;
                  const price = p.priceRange.minVariantPrice;
                  const compare = p.compareAtPriceRange?.minVariantPrice;
                  const onSale = compare?.amount && Number.parseFloat(compare.amount) > Number.parseFloat(price.amount);
                  const firstVariant = p.variants.edges[0]?.node;
                  const out = firstVariant ? !firstVariant.availableForSale : false;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: i * 0.03 }}
                      className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 hover:border-white/20 transition-colors"
                    >
                      <Link to={`/products/${p.handle}`} className="block group">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          {img ? (
                            <PowerFitImage
                              src={img.url}
                              alt={img.altText || p.title}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-white/5" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute top-3 left-3 flex gap-2">
                            {onSale && <span className="px-2.5 py-1 rounded-full text-xs font-black bg-red-600 text-white">SALE</span>}
                            {out && <span className="px-2.5 py-1 rounded-full text-xs font-black bg-zinc-800 text-zinc-200">OUT OF STOCK</span>}
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="text-xs font-bold text-zinc-400">{p.productType || "Equipment"}</div>
                          <div className="mt-1 text-white font-black text-base line-clamp-2">{p.title}</div>
                          <div className="mt-2 flex items-baseline gap-2">
                            <div className="text-red-400 font-black">{formatINR(price.amount)}</div>
                            {onSale && compare?.amount && (
                              <div className="text-zinc-500 text-xs line-through">{formatINR(compare.amount)}</div>
                            )}
                          </div>
                          <div className="mt-3 flex gap-2">
                            <span className="text-xs text-zinc-500">View details →</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}

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
                <div className="text-white font-black text-lg">Need a custom package?</div>
                <div className="text-zinc-400 text-sm">Tell us your space, budget, and city. We’ll suggest a build.</div>
              </div>
              <a
                href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! I need a custom gym setup package. My budget is __ and my space is __ sq ft.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

