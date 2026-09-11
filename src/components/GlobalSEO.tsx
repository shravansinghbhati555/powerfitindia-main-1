import { Helmet } from "react-helmet-async";
import { BRAND, SITE_ORIGIN, SOCIAL_PROFILES } from "@/config/site";

const brandDescription =
  "PowerFit India is a premium fitness ecosystem for gym memberships, transformation coaching, gym setup services, and franchise opportunities across India.";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PowerFit India",
  url: SITE_ORIGIN,
  description: brandDescription,
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PowerFit India",
  url: SITE_ORIGIN,
  logo: {
    "@type": "ImageObject",
    url: BRAND.logoUrl,
    width: 399,
    height: 160,
  },
  image: BRAND.ogImage,
  sameAs: [...SOCIAL_PROFILES],
};

export default function GlobalSEO() {
  return (
    <Helmet>
      <html lang="en-IN" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="theme-color" content="#070707" />
      <meta property="og:site_name" content="PowerFit India" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:site" content="@PowerFitIndia" />
      <meta name="twitter:creator" content="@PowerFitIndia" />
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
