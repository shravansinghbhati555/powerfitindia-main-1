export interface ShopifyProductNode {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
  productType: string;
  featuredImage: { url: string; altText: string | null } | null;
  images: { edges: { node: { url: string; altText: string | null } }[] };
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  compareAtPriceRange: { minVariantPrice: { amount: string; currencyCode: string } } | null;
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        price: { amount: string; currencyCode: string };
        compareAtPrice: { amount: string; currencyCode: string } | null;
        availableForSale: boolean;
        quantityAvailable: number;
        selectedOptions: { name: string; value: string }[];
      };
    }[];
  };
  metafields?: { edges: { node: { namespace: string; key: string; value: string } }[] };
}

export interface ShopifyCollection {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  image: { url: string; altText: string | null } | null;
  products: {
    pageInfo?: { hasNextPage: boolean; endCursor: string | null };
    edges: { node: ShopifyProductNode }[];
  };
}

export interface ShopifyArticle {
  id: string;
  handle: string;
  title: string;
  excerpt?: string;
  contentHtml?: string;
  publishedAt: string;
  author: { name: string };
  image: { url: string; altText: string | null } | null;
  tags: string[];
  blog: { handle: string; title: string };
}

export interface ShopifyPage {
  id: string;
  handle: string;
  title: string;
  body: string;
  bodySummary: string;
  createdAt: string;
  updatedAt: string;
}

