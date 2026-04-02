import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProductSearch } from "@/hooks/useShopify";

function formatINR(amount: string) {
  const n = Number.parseFloat(amount);
  if (!Number.isFinite(n)) return "₹—";
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function SearchPage() {
  const [sp, setSp] = useSearchParams();
  const initial = sp.get("q") || "";
  const [q, setQ] = useState(initial);
  const { results, loading, search } = useProductSearch();

  useEffect(() => {
    if (initial) search(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const title = useMemo(() => (q ? `Search: ${q} | PowerFit Shop` : "Search | PowerFit Shop"), [q]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Search products from the PowerFit India headless Shopify store. Checkout happens on Shopify." />
        <link rel="canonical" href={`https://powerfitindia.com/search${q ? `?q=${encodeURIComponent(q)}` : ""}`} />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black">Search</h1>
              <p className="text-zinc-400 text-sm mt-2">Find equipment, packages, accessories, and more.</p>
            </div>
            <Link to="/shop" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">Back to shop →</Link>
          </div>

          <form
            className="mt-6 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSp((prev) => {
                prev.set("q", q);
                return prev;
              });
              search(q);
            }}
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products…"
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-red-600/40"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm transition-colors"
            >
              Search
            </button>
          </form>

          <div className="mt-10">
            {loading ? (
              <div className="py-16 text-center text-zinc-400">Searching…</div>
            ) : results.length === 0 ? (
              <div className="py-16 text-center text-zinc-500">No results.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((p) => {
                  const img = p.featuredImage || p.images?.edges?.[0]?.node || null;
                  return (
                    <Link
                      key={p.id}
                      to={`/products/${p.handle}`}
                      className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden hover:border-white/20 transition-colors"
                    >
                      <div className="relative aspect-[4/3]">
                        {img && <img src={img.url} alt={img.altText || p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-bold text-zinc-400">{p.productType || "Product"}</div>
                        <div className="mt-1 text-white font-black">{p.title}</div>
                        <div className="mt-2 text-red-400 font-black">{formatINR(p.priceRange.minVariantPrice.amount)}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

