// ─── COLLECTION QUERIES ──────────────────────────────────
export const GET_COLLECTION = `
  query GetCollection($handle: String!, $first: Int = 12, $after: String) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      image { url altText }
      products(first: $first, after: $after, sortKey: BEST_SELLING) {
        pageInfo { hasNextPage endCursor }
        edges {
          node {
            id handle title description descriptionHtml tags productType
            featuredImage { url altText }
            images(first: 10) { edges { node { url altText } } }
            priceRange {
              minVariantPrice { amount currencyCode }
              maxVariantPrice { amount currencyCode }
            }
            compareAtPriceRange { minVariantPrice { amount currencyCode } }
            variants(first: 20) {
              edges {
                node {
                  id title availableForSale quantityAvailable
                  price { amount currencyCode }
                  compareAtPrice { amount currencyCode }
                  selectedOptions { name value }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_COLLECTIONS = `
  query GetAllCollections($first: Int = 20) {
    collections(first: $first) {
      edges {
        node {
          id handle title description
          image { url altText }
          products(first: 4) {
            edges {
              node {
                id handle title
                featuredImage { url altText }
                priceRange { minVariantPrice { amount currencyCode } }
              }
            }
          }
        }
      }
    }
  }
`;

// ─── PRODUCT QUERIES ─────────────────────────────────────
export const GET_PRODUCT = `
  query GetProduct($handle: String!) {
    product(handle: $handle) {
      id handle title description descriptionHtml tags productType
      featuredImage { url altText }
      images(first: 10) { edges { node { url altText } } }
      priceRange {
        minVariantPrice { amount currencyCode }
        maxVariantPrice { amount currencyCode }
      }
      compareAtPriceRange { minVariantPrice { amount currencyCode } }
      variants(first: 20) {
        edges {
          node {
            id title availableForSale quantityAvailable
            price { amount currencyCode }
            compareAtPrice { amount currencyCode }
            selectedOptions { name value }
          }
        }
      }
      metafields(identifiers: [
        {namespace: "custom", key: "specs"},
        {namespace: "custom", key: "warranty"},
        {namespace: "custom", key: "installation"}
      ]) {
        key
      value

      }
    }
  }
`;

export const SEARCH_PRODUCTS = `
  query SearchProducts($query: String!, $first: Int = 12) {
    products(first: $first, query: $query, sortKey: BEST_SELLING) {
      edges {
        node {
          id handle title
          featuredImage { url altText }
          priceRange { minVariantPrice { amount currencyCode } }
          variants(first: 1) { edges { node { id availableForSale } } }
        }
      }
    }
  }
`;

// ─── CART MUTATIONS ──────────────────────────────────────
export const CREATE_CART = `
  mutation CreateCart($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id checkoutUrl totalQuantity
        lines(first: 50) {
          edges {
            node {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  product { title handle featuredImage { url } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
        }
        cost {
          totalAmount { amount currencyCode }
          subtotalAmount { amount currencyCode }
        }
      }
      userErrors { field message }
    }
  }
`;

export const ADD_TO_CART = `
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id checkoutUrl totalQuantity
        lines(first: 50) {
          edges {
            node {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  product { title handle featuredImage { url } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
        }
        cost {
          totalAmount { amount currencyCode }
          subtotalAmount { amount currencyCode }
        }
      }
      userErrors { field message }
    }
  }
`;

export const REMOVE_FROM_CART = `
  mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id checkoutUrl totalQuantity
        lines(first: 50) {
          edges {
            node {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  product { title handle featuredImage { url } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
        }
        cost {
          totalAmount { amount currencyCode }
          subtotalAmount { amount currencyCode }
        }
      }
      userErrors { field message }
    }
  }
`;

export const UPDATE_CART = `
  mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id checkoutUrl totalQuantity
        lines(first: 50) {
          edges {
            node {
              id quantity
              merchandise {
                ... on ProductVariant {
                  id title
                  price { amount currencyCode }
                  product { title handle featuredImage { url } }
                }
              }
              cost { totalAmount { amount currencyCode } }
            }
          }
        }
        cost {
          totalAmount { amount currencyCode }
          subtotalAmount { amount currencyCode }
        }
      }
      userErrors { field message }
    }
  }
`;

// ─── BLOG & PAGE QUERIES ─────────────────────────────────
export const GET_BLOG_ARTICLES = `
  query GetBlogArticles($blogHandle: String!, $first: Int = 12, $after: String) {
    blog(handle: $blogHandle) {
      id handle title
      articles(first: $first, after: $after, sortKey: PUBLISHED_AT, reverse: true) {
        pageInfo { hasNextPage endCursor }
        edges {
          node {
            id handle title excerpt publishedAt
            author { name }
            image { url altText }
            tags
            blog { handle title }
          }
        }
      }
    }
  }
`;

export const GET_ARTICLE = `
  query GetArticle($blogHandle: String!, $articleHandle: String!) {
    blog(handle: $blogHandle) {
      id handle title
      articleByHandle(handle: $articleHandle) {
        id handle title contentHtml publishedAt
        author { name }
        image { url altText }
        tags
        blog { handle title }
        excerpt
      }
    }
  }
`;

export const GET_PAGE = `
  query GetPage($handle: String!) {
    page(handle: $handle) {
      id handle title body bodySummary createdAt updatedAt
    }
  }
`;

export const GET_ALL_PAGES = `
  query GetAllPages {
    pages(first: 20) {
      edges { node { id handle title bodySummary updatedAt } }
    }
  }
`;

