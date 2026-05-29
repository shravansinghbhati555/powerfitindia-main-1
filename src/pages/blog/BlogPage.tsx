import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { PowerFitImage } from "@/components/ui/PowerFitImage";
 
function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return date;
  }
}
 
// Function to strip HTML tags and get plain text excerpt
const stripHtml = (html: string) => {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
};
 
// Function to get first image from HTML content
const getFirstImageFromHtml = (html: string) => {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = html.match(imgRegex);
  return match ? match[1] : null;
};
 
export default function BlogPage() {
  const { blogHandle } = useParams<{ blogHandle?: string }>();
  const handle = blogHandle || "news";
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [cursor, setCursor] = useState<string | null>(null);
 
  const fetchArticles = async (afterCursor: string | null = null) => {
    try {
      const query = {
        query: `query {
          blogs(first: 10) {
            nodes {
              id
              title
              handle
              articles(first: 10${afterCursor ? `, after: "${afterCursor}"` : ""}) {
                nodes {
                  id
                  title
                  handle
                  excerpt
                  contentHtml
                  publishedAt
                }
                pageInfo {
                  hasNextPage
                  endCursor
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
      console.log("API Response:", data);
     
      if (data.errors) {
        console.error("GraphQL Errors:", data.errors);
        throw new Error(data.errors[0].message);
      }
     
      const allArticlesList = [];
      let nextPageExists = false;
      let endCursorValue = null;
     
      if (data.data?.blogs?.nodes) {
        data.data.blogs.nodes.forEach((blog: any) => {
          if (blog.articles?.nodes) {
            blog.articles.nodes.forEach((article: any) => {
              const imageUrl = getFirstImageFromHtml(article.contentHtml || "");
              let excerptText = article.excerpt;
              if (!excerptText && article.contentHtml) {
                const plainText = stripHtml(article.contentHtml);
                excerptText = plainText.substring(0, 150) + "...";
              }
             
              allArticlesList.push({
                id: article.id,
                title: article.title,
                handle: article.handle,
                excerpt: excerptText,
                contentHtml: article.contentHtml,
                publishedAt: article.publishedAt,
                image: imageUrl ? { url: imageUrl, altText: article.title } : null,
                author: { name: "PowerFit" },
                blog: { handle: blog.handle, title: blog.title }
              });
            });
           
            if (blog.articles?.pageInfo) {
              nextPageExists = blog.articles.pageInfo.hasNextPage;
              endCursorValue = blog.articles.pageInfo.endCursor;
            }
          }
        });
      }
     
      console.log("Articles parsed:", allArticlesList.length);
      return { articles: allArticlesList, hasNextPage: nextPageExists, endCursor: endCursorValue };
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
 
  const loadMore = async () => {
    if (!hasNextPage || loading) return;
   
    setLoading(true);
    try {
      const result = await fetchArticles(cursor);
      setArticles(prev => [...prev, ...result.articles]);
      setHasNextPage(result.hasNextPage);
      setCursor(result.endCursor);
    } catch (error) {
      console.error("Error loading more:", error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    async function loadInitialArticles() {
      setLoading(true);
      try {
        const result = await fetchArticles(null);
        console.log("Initial load result:", result.articles.length);
        setArticles(result.articles);
        setHasNextPage(result.hasNextPage);
        setCursor(result.endCursor);
      } catch (error) {
        console.error("Error loading articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
 
    loadInitialArticles();
  }, []);
 
  if (loading && articles.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <Navbar />
        <div className="py-20 text-center text-zinc-400">Loading articles…</div>
        <Footer />
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Helmet>
        <title>Fitness Blog | PowerFit India</title>
        <meta name="description" content="PowerFit India fitness blog: training tips, gym setup guides, and nutrition. Powered by Shopify." />
        <link rel="canonical" href={`https://powerfitindia.com/blog${blogHandle ? `/${blogHandle}` : ""}`} />
      </Helmet>
 
      <Navbar />
 
      <main className="pt-20">
        <section className="relative h-[300px] md:h-[350px] border-b border-white/10 overflow-hidden">
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
          <div className="max-w-[1200px] mx-auto px-4">
            {articles.length === 0 && !loading ? (
              <div className="py-20 text-center text-zinc-400">
                <p>No articles found.</p>
                <p className="text-sm mt-2">Check console for details</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((a) => (
                    <Link
                      key={a.id}
                      to={`/blog/${a.blog.handle}/${a.handle}`}
                      className="border border-white/10 bg-zinc-950 overflow-hidden hover:border-white/20 transition-colors group"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
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
                          <div className="mt-1 text-white font-black line-clamp-2 text-lg">{a.title}</div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">{a.excerpt || "Read more →"}</div>
                        <div className="mt-4 text-red-400 text-sm font-black flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
 
                {hasNextPage && (
                  <div className="mt-12 flex justify-center">
                    <button
                      type="button"
                      onClick={() => loadMore()}
                      className="px-8 py-3 bg-white/10 border border-white/10 text-sm font-black hover:bg-white/15 transition-colors"
                    >
                      Load more articles
                    </button>
                  </div>
                )}
 
                <div className="mt-16 border border-white/10 bg-gradient-to-r from-red-950/30 via-black/40 to-black/40 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-white font-black text-xl">Get weekly tips on WhatsApp</div>
                    <div className="text-zinc-400 text-sm mt-1">Short, actionable fitness guidance from PowerFit.</div>
                  </div>
                  <a
                    href={`https://wa.me/918619527263?text=${encodeURIComponent("Hi! Subscribe me to PowerFit weekly fitness tips.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#25D366] text-white font-black hover:scale-105 transition-transform"
                  >
                    Subscribe on WhatsApp
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
