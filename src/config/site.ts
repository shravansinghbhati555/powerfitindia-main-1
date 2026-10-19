/**
 * Public URLs, brand assets, and official social profiles.
 */
export const SITE_ORIGIN = "https://powerfitindia.com";

export const BRAND = {
  name: "PowerFit India",
  /** Horizontal lockup with white "FIT" — use on dark backgrounds. */
  logo: "/images/brand/powerfit-logo.png",
  /** Horizontal lockup with black "FIT" — use on light backgrounds. */
  logoDark: "/images/brand/powerfit-logo-dark.png",
  /** Square "P" mark for tight spaces and icons. */
  mark: "/images/brand/powerfit-mark.png",
  ogImage: `${SITE_ORIGIN}/og-image.png`,
  logoUrl: `${SITE_ORIGIN}/images/brand/powerfit-logo.png`,
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/PowerFitIndia",
  instagram: "https://www.instagram.com/PowerFitIndia",
  youtube: "https://www.youtube.com/PowerFitIndia",
  twitter: "https://www.x.com/PowerFitIndia",
  linkedin: "https://www.linkedin.com/company/powerfitindia/",
} as const;

/** Ordered list for schema.org sameAs. */
export const SOCIAL_PROFILES = Object.values(SOCIAL_LINKS);
