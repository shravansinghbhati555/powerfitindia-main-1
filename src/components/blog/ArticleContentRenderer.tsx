import { useMemo } from "react";
import { cleanArticleHtml } from "@/lib/blog";

interface ArticleContentRendererProps {
  html: string;
}

export default function ArticleContentRenderer({ html }: ArticleContentRendererProps) {
  const processedHtml = useMemo(() => cleanArticleHtml(html), [html]);

  return (
    <div
      className="prose prose-invert max-w-none prose-headings:font-['Oswald'] prose-headings:font-semibold prose-headings:tracking-[0.12em] prose-headings:uppercase prose-h2:mt-14 prose-h2:border-b prose-h2:border-white/15 prose-h2:pb-3 prose-h3:mt-10 prose-h3:text-zinc-100 prose-h4:mt-9 prose-h4:text-red-300 prose-p:text-zinc-200 prose-p:leading-8 prose-p:text-[1.06rem] prose-p:[text-wrap:pretty] prose-li:text-zinc-300 prose-li:marker:text-red-400 prose-strong:text-white prose-a:text-red-300 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-red-400 prose-blockquote:bg-white/[0.03] prose-blockquote:py-2 prose-blockquote:text-zinc-200 prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}
