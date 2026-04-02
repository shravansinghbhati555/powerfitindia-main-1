import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Loader2 } from "lucide-react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShopPage = () => {
  const [products, setProducts] = useState<Array<{ node: ShopifyProduct }>>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 24 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (e: React.MouseEvent, product: ShopifyProduct) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { description: product.node.title, position: "top-center" });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="max-w-[var(--content-max-width)] mx-auto px-[var(--gutter)]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl text-white">OUR SHOP</h1>
            <p className="font-body text-zinc-400 mt-3 max-w-lg mx-auto">Headless Shopify products inside the PowerFit site. Checkout on Shopify.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/gym-setup" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-sm font-black hover:bg-white/15 transition-colors">
                Browse collection →
              </Link>
              <Link to="/search" className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-sm font-black hover:bg-white/15 transition-colors">
                Search products
              </Link>
            </div>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-red-500" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="w-16 h-16 text-zinc-500 mx-auto mb-4" />
              <p className="text-xl text-zinc-400">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product, i) => {
                const image = product.node.images?.edges?.[0]?.node || product.node.featuredImage || null;
                const price = product.node.priceRange.minVariantPrice;
                return (
                  <motion.div
                    key={product.node.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={`/products/${product.node.handle}`}
                      className="group block bg-zinc-950 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors"
                    >
                      <div className="aspect-square bg-white/5 overflow-hidden">
                        {image ? (
                          <img
                            src={image.url}
                            alt={image.altText || product.node.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-500">
                            <ShoppingCart className="w-8 h-8" />
                          </div>
                        )}
                      </div>
                      <div className="p-3 md:p-4">
                        <h3 className="font-body font-semibold text-sm text-white truncate">{product.node.title}</h3>
                        <p className="font-body font-bold text-red-400 mt-1">
                          ₹{parseFloat(price.amount).toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                        </p>
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          disabled={isCartLoading}
                          className="mt-3 w-full bg-red-600 text-white py-2 rounded-lg text-xs label-text font-bold hover:bg-red-500 transition-colors disabled:opacity-50"
                        >
                          {isCartLoading ? "Adding..." : "Add to Cart"}
                        </button>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
