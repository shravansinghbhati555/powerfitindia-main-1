import { useCallback, useEffect, useState } from "react";
import { shopifyClient } from "@/lib/shopify";
import * as queries from "@/lib/queries";
import type { ShopifyCollection, ShopifyProductNode, ShopifyArticle, ShopifyPage } from "@/types/shopify";

export type ShopifyCollectionSummary = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: { url: string; altText: string | null } | null;
};

export function useCollections(first = 20) {
  const [collections, setCollections] = useState<ShopifyCollectionSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await shopifyClient.request(queries.GET_ALL_COLLECTIONS, { variables: { first } });
        const data = (res as any).data;
        const edges = data?.collections?.edges || [];
        setCollections(edges.map((e: any) => e.node));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch collections");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [first]);

  return { collections, loading, error };
}

export function useCollection(handle: string) {
  const [collection, setCollection] = useState<ShopifyCollection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const fetchCollection = useCallback(
    async (cursor?: string) => {
      try {
        setLoading(true);
        const res = await shopifyClient.request(queries.GET_COLLECTION, {
          variables: { handle, first: 12, after: cursor || null },
        });
        const data = (res as any).data;
        if (!data?.collection) {
          setCollection(null);
          setHasNextPage(false);
          setEndCursor(null);
          return;
        }
        if (cursor && collection) {
          const newEdges = data.collection.products.edges || [];
          setCollection((prev) =>
            prev
              ? { ...prev, products: { ...prev.products, edges: [...prev.products.edges, ...newEdges], pageInfo: data.collection.products.pageInfo } }
              : data.collection,
          );
        } else {
          setCollection(data.collection);
        }
        setHasNextPage(Boolean(data.collection.products.pageInfo?.hasNextPage));
        setEndCursor(data.collection.products.pageInfo?.endCursor || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch collection");
      } finally {
        setLoading(false);
      }
    },
    [collection, handle],
  );

  useEffect(() => {
    if (!handle) return;
    fetchCollection();
  }, [ handle]);

  const loadMore = () => (endCursor ? fetchCollection(endCursor) : undefined);

  return { collection, loading, error, hasNextPage, loadMore };
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState<ShopifyProductNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await shopifyClient.request(queries.GET_PRODUCT, { variables: { handle } });
        const data = (res as any).data;
        setProduct(data?.product ?? null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };
    if (handle) fetch();
  }, [handle]);

  return { product, loading, error };
}

export function useBlog(blogHandle: string) {
  const [articles, setArticles] = useState<ShopifyArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const fetchArticles = useCallback(
    async (cursor?: string) => {
      try {
        setLoading(true);
        const res = await shopifyClient.request(queries.GET_BLOG_ARTICLES, {
          variables: { blogHandle, first: 9, after: cursor || null },
        });
        const data = (res as any).data;
        const edges = data?.blog?.articles?.edges || [];
        const newArticles = edges.map((e: any) => e.node) as ShopifyArticle[];
        setArticles((prev) => (cursor ? [...prev, ...newArticles] : newArticles));
        setHasNextPage(Boolean(data?.blog?.articles?.pageInfo?.hasNextPage));
        setEndCursor(data?.blog?.articles?.pageInfo?.endCursor || null);
      } catch {
        // keep silent in UI; page can show fallback
      } finally {
        setLoading(false);
      }
    },
    [blogHandle],
  );

  useEffect(() => {
    if (!blogHandle) return;
    fetchArticles();
  }, [fetchArticles, blogHandle]);

  return { articles, loading, hasNextPage, loadMore: () => (endCursor ? fetchArticles(endCursor) : undefined) };
}

export function useArticle(blogHandle: string, articleHandle: string) {
  const [article, setArticle] = useState<ShopifyArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await shopifyClient.request(queries.GET_ARTICLE, { variables: { blogHandle, articleHandle } });
        const data = (res as any).data;
        setArticle(data?.blog?.articleByHandle ?? null);
      } finally {
        setLoading(false);
      }
    };
    if (blogHandle && articleHandle) fetch();
  }, [articleHandle, blogHandle]);

  return { article, loading };
}

export function useShopifyPage(handle: string) {
  const [page, setPage] = useState<ShopifyPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await shopifyClient.request(queries.GET_PAGE, { variables: { handle } });
        const data = (res as any).data;
        setPage(data?.page ?? null);
      } finally {
        setLoading(false);
      }
    };
    if (handle) fetch();
  }, [handle]);

  return { page, loading };
}

export function useProductSearch() {
  const [results, setResults] = useState<ShopifyProductNode[]>([]);
  const [loading, setLoading] = useState(false);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    try {
      setLoading(true);
      const res = await shopifyClient.request(queries.SEARCH_PRODUCTS, { variables: { query, first: 12 } });
      const data = (res as any).data;
      const edges = data?.products?.edges || [];
      setResults(edges.map((e: any) => e.node));
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, search };
}

