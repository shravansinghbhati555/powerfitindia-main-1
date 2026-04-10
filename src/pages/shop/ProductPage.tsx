import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useProduct, useProductSearch } from "@/hooks/useShopify";
import { useCartStore } from "@/stores/cartStore";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

const MotionPowerFitImage = motion(PowerFitImage);

function formatINR(amount: string) {
  const n = Number.parseFloat(amount);
  if (!Number.isFinite(n)) return "₹—";
  return `₹${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
}

function firstMetafield(m: any, key: string) {
  const edges = m?.edges || [];
  const found = edges.find((e: any) => e?.node?.key === key);
  return found?.node?.value || "";
}

export default function ProductPage() {
  const { productHandle } = useParams<{ productHandle: string }>();
  const { product, loading } = useProduct(productHandle || "");
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [variantId, setVariantId] = useState<string | null>(null);

  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const first = product?.variants?.edges?.[0]?.node?.id || null;
    setVariantId(first);
    setActiveImage(0);
    setQty(1);
  }, [product?.id]);

  const variants = product?.variants?.edges?.map((e) => e.node) || [];
  const selectedVariant = variants.find((v) => v.id === variantId) || variants[0];

  const images = product?.images?.edges?.map((e) => e.node) || [];
  const heroImg = product?.featuredImage?.url || images[0]?.url;

  const compareAt = selectedVariant?.compareAtPrice?.amount || product?.compareAtPriceRange?.minVariantPrice?.amount || null;
  const price = selectedVariant?.price?.amount || product?.priceRange?.minVariantPrice?.amount || "0";
  const onSale = compareAt ? Number.parseFloat(compareAt) > Number.parseFloat(price) : false;

  const { results: related, search: searchRelated } = useProductSearch();
  useEffect(() => {
    if (!product?.productType) return;
    searchRelated(`product_type:${product.productType}`);
  }, [product?.productType, searchRelated]);

  const relatedFiltered = useMemo(
    () => related.filter((p) => p.handle !== product?.handle).slice(0, 6),
    [product?.handle, related],
  );

  if (!loading && !product) return <NotFound />;

  const title = product ? `${product.title} | Gym Equipment | PowerFit India` : "Product | PowerFit India";
  const desc = (product?.description || "").slice(0, 160) || "Shop gym equipment from PowerFit India. Checkout on Shopify.";
  const url = product ? `https://powerfitindia.com/products/${product.handle}` : "https://powerfitindia.com/shop";
  const waMsg = encodeURIComponent(`Hi! I want to know more about ${product?.title} for my gym setup.`);

  const specs = firstMetafield(product?.metafields, "specs");
  const warranty = firstMetafield(product?.metafields, "warranty");
  const installation = firstMetafield(product?.metafields, "installation");

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        {heroImg && <meta property="og:image" content={heroImg} />}
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
          <Link to="/shop" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
            ← Back to Shop
          </Link>

          {loading ? (
            <div className="py-20 text-center text-zinc-400">Loading product…</div>
          ) : (
            <>
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Gallery */}
                <div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <div className="relative aspect-square">
                      {images[activeImage]?.url ? (
                        <MotionPowerFitImage
                          key={images[activeImage].url}
                          src={images[activeImage].url}
                          alt={images[activeImage].altText || product!.title}
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          priority={activeImage === 0}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.25 }}
                        />
                      ) : (
                        <div className="absolute inset-0" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>

                  {images.length > 1 && (
                    <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                      {images.map((img, i) => (
                        <button
                          key={img.url}
                          onClick={() => setActiveImage(i)}
                          className={`w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-colors ${
                            i === activeImage ? "border-red-500" : "border-transparent"
                          }`}
                        >
                          <PowerFitImage src={img.url} alt="" sizes="64px" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <div className="text-xs font-bold text-zinc-400">{product?.productType || "Equipment"}</div>
                  <h1 className="mt-2 text-4xl md:text-5xl font-black leading-tight">{product?.title}</h1>

                  <div className="mt-4 flex items-end gap-3">
                    <div className="text-3xl font-black text-red-400">{formatINR(price)}</div>
                    {onSale && compareAt && (
                      <div className="text-sm text-zinc-500 line-through">{formatINR(compareAt)}</div>
                    )}
                    {selectedVariant?.availableForSale === false && (
                      <div className="ml-auto text-xs font-black px-3 py-1 rounded-full bg-zinc-800">OUT OF STOCK</div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    {variants.length > 1 && (
                      <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4">
                        <div className="text-xs font-black text-zinc-400">Variants</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {variants.map((v) => (
                            <button
                              key={v.id}
                              onClick={() => setVariantId(v.id)}
                              className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${
                                v.id === variantId
                                  ? "border-red-500 bg-red-500/10 text-white"
                                  : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                              }`}
                            >
                              {v.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-4 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-black text-zinc-400">Quantity</div>
                        <div className="text-zinc-300 text-sm">Adjust before adding to cart</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty((q) => Math.max(1, q - 1))}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
                        >
                          −
                        </button>
                        <div className="w-10 text-center font-black tabular-nums">{qty}</div>
                        <button
                          onClick={() => setQty((q) => q + 1)}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={async () => {
                        if (!selectedVariant?.id) return;
                        await addItem({
                          product: { node: product as any },
                          variantId: selectedVariant.id,
                          variantTitle: selectedVariant.title,
                          price: selectedVariant.price,
                          quantity: qty,
                          selectedOptions: selectedVariant.selectedOptions || [],
                        });
                      }}
                      disabled={isCartLoading || selectedVariant?.availableForSale === false}
                      className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-base transition-all hover:scale-[1.01] disabled:opacity-50"
                    >
                      {isCartLoading ? "Adding…" : "Add to Cart"}
                    </button>

                    <a
                      href={`https://wa.me/918619527263?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-[#25D366] text-white font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
                    >
                      💬 Ask About This Product
                    </a>

                    <a
                      href="tel:+918619527263"
                      className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      📞 Call for installation quote
                    </a>
                  </div>

                  {/* Description */}
                  <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950 p-5">
                    <div className="text-xs font-black text-zinc-400">Description</div>
                    <div
                      className="prose prose-invert prose-red max-w-none mt-3
                                 prose-p:text-zinc-300 prose-headings:text-white prose-li:marker:text-red-500"
                      dangerouslySetInnerHTML={{ __html: product?.descriptionHtml || "" }}
                    />
                  </div>

                  {/* Metafields */}
                  <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950 p-5">
                    <div className="text-xs font-black text-zinc-400 mb-2">More Info</div>
                    <Accordion type="single" collapsible className="w-full">
                      {specs && (
                        <AccordionItem value="specs" className="border-white/10">
                          <AccordionTrigger className="text-white font-bold">Specs</AccordionTrigger>
                          <AccordionContent className="text-zinc-300 whitespace-pre-wrap">{specs}</AccordionContent>
                        </AccordionItem>
                      )}
                      {warranty && (
                        <AccordionItem value="warranty" className="border-white/10">
                          <AccordionTrigger className="text-white font-bold">Warranty</AccordionTrigger>
                          <AccordionContent className="text-zinc-300 whitespace-pre-wrap">{warranty}</AccordionContent>
                        </AccordionItem>
                      )}
                      {installation && (
                        <AccordionItem value="installation" className="border-white/10">
                          <AccordionTrigger className="text-white font-bold">Installation</AccordionTrigger>
                          <AccordionContent className="text-zinc-300 whitespace-pre-wrap">{installation}</AccordionContent>
                        </AccordionItem>
                      )}
                      {!specs && !warranty && !installation && (
                        <div className="text-sm text-zinc-500 py-3">No additional details available.</div>
                      )}
                    </Accordion>
                  </div>
                </div>
              </div>

              {/* Related */}
              {relatedFiltered.length > 0 && (
                <section className="mt-14">
                  <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-black">Related products</h2>
                    <Link to="/shop" className="text-sm font-bold text-zinc-400 hover:text-white transition-colors">
                      Browse shop →
                    </Link>
                  </div>
                  <div className="mt-4 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                    {relatedFiltered.map((p) => {
                      const img = p.featuredImage || p.images?.edges?.[0]?.node || null;
                      return (
                        <Link
                          key={p.id}
                          to={`/products/${p.handle}`}
                          className="shrink-0 w-64 snap-start rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden hover:border-white/20 transition-colors"
                        >
                          <div className="relative h-40">
                            {img && (
                              <PowerFitImage
                                src={img.url}
                                alt={img.altText || p.title}
                                sizes="256px"
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          </div>
                          <div className="p-4">
                            <div className="text-white font-black line-clamp-2">{p.title}</div>
                            <div className="mt-2 text-red-400 font-black">{formatINR(p.priceRange.minVariantPrice.amount)}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

