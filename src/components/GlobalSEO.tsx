import { Helmet } from "react-helmet-async";
import { SITE_ORIGIN } from "@/config/site";

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
  logo: `${SITE_ORIGIN}/favicon.ico`,
  sameAs: [
    "https://www.instagram.com/powerfitindia",
    "https://www.youtube.com/@powerfitindia",
    "https://www.facebook.com/powerfitindia",
  ],
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
      <meta name="twitter:site" content="@powerfitindia" />
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
