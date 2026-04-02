import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { useShopifyPage } from "@/hooks/useShopify";

export default function ShopifyPageRenderer({ handle }: { handle: string }) {
  const { page, loading } = useShopifyPage(handle);

  if (!loading && !page) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>{page ? `${page.title} | PowerFit India` : "PowerFit India"}</title>
        <meta name="description" content={page?.bodySummary || "PowerFit India information page."} />
        <link rel="canonical" href={`https://powerfitindia.com/${handle}`} />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        <div className="bg-zinc-900 border-b border-white/10 py-12 px-[var(--gutter)]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black text-white">{page?.title || "Loading…"}</h1>
            <p className="text-zinc-500 text-sm mt-2">
              {page?.updatedAt ? `Last updated: ${new Date(page.updatedAt).toLocaleDateString("en-IN")}` : ""}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-[var(--gutter)] py-12">
          {loading ? (
            <div className="py-10 text-center text-zinc-400">Loading…</div>
          ) : (
            <div
              className="prose prose-invert prose-red prose-lg max-w-none
                         prose-headings:text-white prose-p:text-zinc-300
                         prose-a:text-red-400 prose-strong:text-white
                         prose-ul:text-zinc-300 prose-li:marker:text-red-500"
              dangerouslySetInnerHTML={{ __html: page?.body || "" }}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

