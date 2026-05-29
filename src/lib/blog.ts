import { queries, storefrontApiRequest } from "@/lib/shopify";
import type { BlogArticle, BlogCategory, BlogPageResponse } from "@/types/blog";

const imgRegex = /<img[^>]+src=["']([^"'>]+)["']/i;

const categoryToTags: Record<BlogCategory, string[]> = {
  "Weight Loss": ["weight loss", "fat loss"],
  "Strength Training": ["strength", "muscle", "lifting"],
  CrossFit: ["crossfit", "metcon"],
  Yoga: ["yoga", "mobility"],
  Nutrition: ["nutrition", "diet"],
  Supplements: ["supplements", "protein"],
  "Home Workout": ["home workout", "bodyweight"],
  Motivation: ["motivation", "mindset"],
  "Success Stories": ["transformation", "success story"],
  "Gym Setup": ["gym setup", "equipment"],
  Franchise: ["franchise"],
  Recovery: ["recovery", "rest"],
  HIIT: ["hiit", "interval"],
};

const FALLBACK_BLOGS_QUERY = `
  query FallbackBlogs($firstBlogs: Int = 10, $firstArticles: Int = 20) {
    blogs(first: $firstBlogs) {
      nodes {
        handle
        title
        articles(first: $firstArticles, sortKey: PUBLISHED_AT, reverse: true) {
          nodes {
            id
            handle
            title
            excerpt
            contentHtml
            publishedAt
            author { name }
            image { url altText }
            tags
          }
          pageInfo { hasNextPage endCursor }
        }
      }
    }
  }
`;

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function cleanArticleHtml(rawHtml: string) {
  if (!rawHtml) return "";
  if (typeof window === "undefined") return rawHtml;

  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, "text/html");

  const markdownRoot =
    doc.querySelector(".markdown") ||
    doc.querySelector('[data-message-author-role="assistant"] .markdown') ||
    doc.body;

  const clone = markdownRoot.cloneNode(true) as HTMLElement;
  clone.querySelectorAll("script, style, iframe, form, button, input").forEach((el) => el.remove());
  clone.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith("data-")) el.removeAttribute(attr.name);
      if (attr.name === "class" || attr.name === "style") el.removeAttribute(attr.name);
      if (attr.name.startsWith("on")) el.removeAttribute(attr.name);
    });
  });

  return clone.innerHTML.trim();
}

export function getReadingTime(content: string) {
  const words = stripHtml(content).split(" ").filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function firstImage(html: string) {
  const match = html.match(imgRegex);
  return match?.[1] ?? null;
}

function normalizeArticle(node: any, blogHandle: string, blogTitle: string): BlogArticle {
  const contentHtml = node.contentHtml || "";
  const excerpt = node.excerpt || `${stripHtml(contentHtml).slice(0, 170)}...`;
  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    excerpt,
    contentHtml,
    publishedAt: node.publishedAt,
    author: node.author || { name: "PowerFit India" },
    image: node.image || (firstImage(contentHtml) ? { url: firstImage(contentHtml) as string, altText: node.title } : null),
    tags: node.tags || [],
    blog: node.blog || { handle: blogHandle, title: blogTitle },
    readingTime: getReadingTime(contentHtml || excerpt),
  };
}

export async function fetchBlogArticles(blogHandle = "news", first = 12, after?: string | null): Promise<BlogPageResponse> {
  const response = await storefrontApiRequest(queries.GET_BLOG_ARTICLES, {
    blogHandle,
    first,
    after: after || null,
  });

  const blog = (response as any)?.data?.blog;
  if (blog?.articles?.edges?.length) {
    const edges = blog.articles.edges || [];
    const articles = edges.map((edge: any) => normalizeArticle(edge.node, blogHandle, blog?.title || "PowerFit Blog"));

    return {
      articles,
      hasNextPage: Boolean(blog?.articles?.pageInfo?.hasNextPage),
      endCursor: blog?.articles?.pageInfo?.endCursor || null,
    };
  }

  // Fallback to old behavior style: scan available blogs and aggregate dynamic articles.
  const fallback = await storefrontApiRequest(FALLBACK_BLOGS_QUERY, {});
  const blogs = (fallback as any)?.data?.blogs?.nodes || [];
  const matchedBlog = blogs.find((b: any) => b.handle === blogHandle);
  const sourceBlogs = matchedBlog ? [matchedBlog] : blogs;
  const merged = sourceBlogs.flatMap((b: any) =>
    (b.articles?.nodes || []).map((node: any) => normalizeArticle(node, b.handle, b.title))
  );

  return {
    articles: merged.slice(0, first),
    hasNextPage: false,
    endCursor: null,
  };
}

export async function fetchArticleByHandle(blogHandle: string, articleHandle: string): Promise<BlogArticle | null> {
  const response = await storefrontApiRequest(queries.GET_ARTICLE, { blogHandle, articleHandle });
  const blog = (response as any)?.data?.blog;
  const article = blog?.articleByHandle;
  if (!article) {
    // Fallback for stores where handle lookup misses; preserves dynamic old flow.
    const fallback = await storefrontApiRequest(FALLBACK_BLOGS_QUERY, {});
    const blogs = (fallback as any)?.data?.blogs?.nodes || [];
    for (const b of blogs) {
      const found = (b.articles?.nodes || []).find((node: any) => node.handle === articleHandle);
      if (found) return normalizeArticle(found, b.handle, b.title);
    }
    return null;
  }
  return normalizeArticle(article, blogHandle, blog?.title || "PowerFit Blog");
}

export function matchArticleCategory(article: BlogArticle, category: BlogCategory | "All") {
  if (category === "All") return true;
  const needle = categoryToTags[category];
  const haystack = `${article.title} ${article.excerpt} ${article.tags.join(" ")}`.toLowerCase();
  return needle.some((tag) => haystack.includes(tag));
}

export function uniqueTags(articles: BlogArticle[], limit = 12) {
  const all = articles.flatMap((article) => article.tags).filter(Boolean);
  return [...new Set(all)].slice(0, limit);
}
