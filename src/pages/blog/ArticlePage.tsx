// ArticlePage.tsx - Only blog content updated
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import { PowerFitImage } from "@/components/ui/PowerFitImage";
 
function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return date;
  }
}
 
// Function to get first image from HTML content
const getFirstImageFromHtml = (html: string) => {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match ? match[1] : null;
};
 
export default function ArticlePage() {
  const { blogHandle, articleHandle } = useParams<{ blogHandle: string; articleHandle: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    async function fetchArticle() {
      try {
        const query = {
          query: `query {
            blogs(first: 10) {
              nodes {
                id
                title
                handle
                articles(first: 10) {
                  nodes {
                    id
                    title
                    handle
                    excerpt
                    contentHtml
                    publishedAt
                  }
                }
              }
            }
          }`
        };
 
        const response = await fetch(
          "https://powerfit-gym-store.myshopify.com/api/2025-04/graphql.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Shopify-Storefront-Access-Token": "b8ed5ef23e599def7abc7b01e48841d2",
            },
            body: JSON.stringify(query),
          }
        );
 
        const data = await response.json();
        console.log("Article fetch response:", data);
       
        let foundArticle = null;
       
        if (data.data?.blogs?.nodes) {
          for (const blog of data.data.blogs.nodes) {
            if (blog.handle === blogHandle && blog.articles?.nodes) {
              foundArticle = blog.articles.nodes.find(
                (article: any) => article.handle === articleHandle
              );
              if (foundArticle) {
                const imageUrl = getFirstImageFromHtml(foundArticle.contentHtml || "");
                foundArticle.image = imageUrl ? { url: imageUrl } : null;
                foundArticle.author = { name: "PowerFit" };
                break;
              }
            }
          }
        }
       
        console.log("Found article:", foundArticle);
        setArticle(foundArticle);
      } catch (error) {
        console.error("Error:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }
 
    if (blogHandle && articleHandle) {
      fetchArticle();
    } else {
      setLoading(false);
    }
  }, [blogHandle, articleHandle]);
 
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navbar />
        <div className="py-20 text-center text-zinc-400">Loading article…</div>
        <Footer />
      </div>
    );
  }
 
  if (!article) {
    return <NotFound />;
  }
 
  const title = `${article.title} | PowerFit India Blog`;
  const desc = (article?.excerpt || "").slice(0, 160) || "PowerFit India blog article.";
  const url = `https://powerfitindia.com/blog/${blogHandle}/${articleHandle}`;
 
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
      </Helmet>
 
      <Navbar />
 
      <main className="pt-20">
        {/* Hero Section - NOT CHANGED */}
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
            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight max-w-4xl">{article.title}</h1>
            <div className="mt-3 text-sm text-zinc-400">
              {article.publishedAt ? formatDate(article.publishedAt) : ""} · PowerFit
            </div>
          </div>
        </section>
 
        {/* Blog Content - IMPROVED VERSION */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-[var(--gutter)]">
            {/* Improved Article Content with better typography */}
            <div
              className="prose prose-invert prose-red max-w-none
                prose-headings:text-white prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-4
                prose-h1:text-4xl prose-h1:md:text-5xl prose-h1:font-black
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
                prose-h3:text-xl prose-h3:md:text-2xl
                prose-h4:text-lg prose-h4:md:text-xl
                prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
                prose-a:text-red-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-bold
                prose-ul:text-zinc-300 prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:text-zinc-300 prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-zinc-300 prose-li:mb-2
                prose-li:marker:text-red-500
                prose-img:rounded-none prose-img:w-full prose-img:h-auto prose-img:my-8 prose-img:border prose-img:border-white/10
                prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-zinc-400
                prose-code:text-red-400 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-none
                first:prose-p:mt-0"
              dangerouslySetInnerHTML={{ __html: article.contentHtml || "" }}
            />
 
            {/* Share Section */}
            <div className="mt-16 border border-white/10 bg-zinc-950 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-white font-black text-lg">Share this article</div>
                <div className="text-zinc-400 text-sm">Help others discover these insights</div>
              </div>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${article.title}\n\n${url}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.15-.67.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.614-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.624.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Share on WhatsApp
              </a>
            </div>
 
            {/* CTA Section */}
            <div className="mt-12 border border-white/10 bg-gradient-to-r from-red-950/30 via-black/40 to-black/40 p-8 text-center">
              <div className="text-white font-black text-2xl mb-2">Ready to start your fitness journey?</div>
              <div className="text-zinc-400 text-base mb-6">Book a free trial at PowerFit gyms in Jaipur or Sikar</div>
              <a
                href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! I want to book a free trial at PowerFit.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white font-black text-lg hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.15-.67.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.298.298-.496.099-.198.05-.371-.025-.52-.075-.149-.669-1.614-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.624.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Book Free Trial on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
 
      <Footer />
    </div>
  );
}
