import { Link } from "react-router-dom";
import type { BlogArticle } from "@/types/blog";

interface RelatedPostsProps {
  posts: BlogArticle[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
      <h3 className="text-xl font-bold">Related Articles</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} to={`/blog/${post.blog.handle}/${post.handle}`} className="rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-red-400/40">
            <p className="line-clamp-2 text-sm font-semibold text-white">{post.title}</p>
            <p className="mt-2 text-xs text-zinc-400">{post.readingTime} min read</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
