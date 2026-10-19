import { BRAND, SITE_ORIGIN, SOCIAL_PROFILES } from "@/config/site";

export function articleSchema(input: {
  headline: string;
  description: string;
  image?: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    image: input.image ? [input.image] : undefined,
    mainEntityOfPage: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified || input.datePublished,
    author: { "@type": "Person", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: "PowerFit India",
      logo: { "@type": "ImageObject", url: BRAND.logoUrl, width: 399, height: 160 },
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({ "@type": "ListItem", position: idx + 1, name: it.name, item: it.item })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PowerFit India",
    url: SITE_ORIGIN,
    logo: { "@type": "ImageObject", url: BRAND.logoUrl, width: 399, height: 160 },
    sameAs: [...SOCIAL_PROFILES],
  };
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data);
}
