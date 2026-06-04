import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCollection, useCollections } from "@/hooks/useShopify";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

const gymSetupCollectionMeta: Record<
  string,
  { label: string; icon: string; tagline: string; accentColor: string }
> = {
  "home-gym-setup": {
    label: "Home Gym",
    icon: "🏠",
    tagline: "Starting ₹50,000 — Everything for your perfect home gym",
    accentColor: "#E8000E",
  },
  "corporate-gym-setup": {
    label: "Corporate / Office Gym",
    icon: "🏢",
    tagline: "Starting ₹1,50,000 — Professional corporate wellness spaces",
    accentColor: "#FF6B00",
  },
  "society-gym-setup": {
    label: "Society / Apartment Gym",
    icon: "🏘️",
    tagline: "Starting ₹3,00,000 — Complete turnkey society / apartment gym setup",
    accentColor: "#7C3AED",
  },
  "gym-packages": {
    label: "Ready Packages",
    icon: "📦",
    tagline: "Curated bundles — Select, order, we install",
    accentColor: "#059669",
  },
};

const gymSetupCollectionHandles = Object.keys(gymSetupCollectionMeta);

function formatINR(amount: string) {
  const n = Number.parseFloat(amount);
  if (!Number.isFinite(n)) return "₹—";
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

export default function GymSetupShopSection() {
  const { collections, loading: collectionsLoading } = useCollections(50);
  const tabs = useMemo(() => {
    const picked = collections
      .filter((c) => gymSetupCollectionHandles.includes(c.handle))
      .map((c) => ({
        handle: c.handle,
        title: c.title,
        ...(gymSetupCollectionMeta[c.handle] || { label: c.title, icon: "📦", tagline: "", accentColor: "#E8000E" }),
      }));
    // stable order based on handles list
    return gymSetupCollectionHandles
      .map((h) => picked.find((p) => p.handle === h))
      .filter(Boolean) as Array<{ handle: string; title: string; label: string; icon: string; tagline: string; accentColor: string }>;
  }, [collections]);

  const [active, setActive] = useState<string>(gymSetupCollectionHandles[0]!);

  useEffect(() => {
    if (!tabs.length) return;
    if (!tabs.some((t) => t.handle === active)) setActive(tabs[0]!.handle);
  }, [active, tabs]);

  const tab = tabs.find((t) => t.handle === active) || {
    handle: active,
    title: active,
    label: gymSetupCollectionMeta[active]?.label || "Collection",
    icon: gymSetupCollectionMeta[active]?.icon || "📦",
    tagline: gymSetupCollectionMeta[active]?.tagline || "",
    accentColor: gymSetupCollectionMeta[active]?.accentColor || "#E8000E",
  };
  const { collection, loading, hasNextPage, loadMore } = useCollection(active);

  const products = useMemo(() => collection?.products?.edges?.map((e) => e.node) || [], [collection?.products?.edges]);

  return (
    <section className="section-dark py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-black tracking-widest uppercase" style={{ color: tab.accentColor }}>
              SHOP ON SHOPIFY
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white mt-2">Shop Gym Equipment & Setup Packages</h2>
            <p className="text-zinc-400 mt-3 max-w-2xl">
              Browse, select, and order — we handle delivery and installation. Checkout happens on Shopify.
            </p>
          </div>
          <a
            href={`https://wa.me/919116838715?text=${encodeURIComponent("Hi! I want a custom gym setup package. My space is __ sq ft and my budget is __.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
          >
            💬 Need a custom package? WhatsApp us
          </a>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {(tabs.length ? tabs : gymSetupCollectionHandles.map((h) => ({ handle: h, ...gymSetupCollectionMeta[h]! }))).map((c) => (
            <motion.button
              key={c.handle}
              onClick={() => setActive(c.handle)}
              whileTap={{ scale: 0.98 }}
              className={`shrink-0 px-4 py-3 rounded-2xl border text-left transition-colors ${
                active === c.handle ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
              style={
                active === c.handle
                  ? { borderColor: `${c.accentColor}70`, background: `${c.accentColor}20` }
                  : { borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }
              }
            >
              <div className="text-xs font-black tracking-widest uppercase opacity-80">{c.icon} {c.label}</div>
              <div className="text-[11px] text-zinc-500 mt-1">{c.tagline}</div>
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10">
          {collectionsLoading || loading ? (
            <div className="py-16 text-center text-zinc-400">Loading products…</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((p, i) => {
                const img = p.featuredImage || p.images?.edges?.[0]?.node || null;
                const price = p.priceRange.minVariantPrice;
                const compare = p.compareAtPriceRange?.minVariantPrice;
                const onSale = compare?.amount && Number.parseFloat(compare.amount) > Number.parseFloat(price.amount);
                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.03 }}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950"
                  >
                    <Link to={`/product/${p.handle}`} className="block group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <PowerFitImage
                          src={img?.url}
                          alt={img?.altText || p.title}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          priority={i < 3}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        {onSale && (
                          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-black bg-red-600 text-white">
                            SALE
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-bold" style={{ color: tab.accentColor }}>
                          {tab.label}
                        </div>
                        <div className="mt-1 text-white font-black line-clamp-2">{p.title}</div>
                        <div className="mt-2 flex items-baseline gap-2">
                          <div className="text-red-400 font-black">{formatINR(price.amount)}</div>
                          {onSale && compare?.amount && <div className="text-zinc-500 text-xs line-through">{formatINR(compare.amount)}</div>}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <a
                            href={`https://wa.me/919116838715?text=${encodeURIComponent(`Hi! I want to ask about ${p.title} for a ${tab.label} setup.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-white font-black text-xs text-center hover:scale-[1.01] transition-transform"
                          >
                            💬 Ask on WhatsApp
                          </a>
                          <span className="flex-1 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-black text-xs text-center">
                            View →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-4">
            <Link to={`/shop/${tab.handle}`} className="font-bold underline underline-offset-4" style={{ color: tab.accentColor }}>
              View all {tab.label} →
            </Link>
            {hasNextPage && (
              <button onClick={() => loadMore()} className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-xs font-black hover:bg-white/15">
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

