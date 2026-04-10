/**
 * Shared image helpers: responsive CDN URLs + branded fallback.
 */

export const PLACEHOLDER_IMAGE_SRC = "/placeholder-powerfit.svg";

const DEFAULT_WIDTHS = [480, 768, 1200, 1920] as const;

function canOptimizeHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return h.includes("unsplash.com") || h.includes("shopify.com") || h.includes("pexels.com");
}

/**
 * Best-effort smaller URL for remote CDNs. Local `/public` assets are returned unchanged.
 */
export function optimizeImageUrl(
  url: string,
  opts?: { width?: number; quality?: number },
): string {
  const trimmed = url?.trim();
  if (!trimmed) return PLACEHOLDER_IMAGE_SRC;

  const width = Math.min(Math.max(opts?.width ?? 1200, 240), 3840);
  const quality = Math.min(Math.max(opts?.quality ?? 82, 50), 95);

  try {
    const base =
      typeof window !== "undefined" && window.location?.origin
        ? window.location.origin
        : "https://powerfitindia.com";
    const u = new URL(trimmed, base);

    if (u.hostname === "localhost" || u.protocol === "file:") {
      return trimmed;
    }

    if (u.hostname === "images.unsplash.com" || u.hostname.endsWith(".unsplash.com")) {
      u.searchParams.set("auto", "format");
      u.searchParams.set("fit", "crop");
      u.searchParams.set("w", String(width));
      u.searchParams.set("q", String(quality));
      return u.toString();
    }

    if (u.hostname.includes("cdn.shopify.com") || u.hostname.endsWith(".shopifycdn.com")) {
      if (!u.searchParams.has("width")) {
        u.searchParams.set("width", String(width));
      }
      return u.toString();
    }

    if (u.hostname.includes("images.pexels.com") || u.hostname.includes("pexels.com")) {
      if (!u.searchParams.has("w")) {
        u.searchParams.set("w", String(width));
      }
      return u.toString();
    }
  } catch {
    return trimmed;
  }

  return trimmed;
}

export function supportsResponsiveSrcSet(url: string): boolean {
  const trimmed = url?.trim();
  if (!trimmed || trimmed === PLACEHOLDER_IMAGE_SRC) return false;
  try {
    const base =
      typeof window !== "undefined" && window.location?.origin
        ? window.location.origin
        : "https://powerfitindia.com";
    return canOptimizeHost(new URL(trimmed, base).hostname);
  } catch {
    return false;
  }
}

export function buildImageSources(
  src: string | null | undefined,
  options?: { widths?: readonly number[] },
): { src: string; srcSet?: string } {
  const raw = src?.trim() ?? "";
  if (!raw) {
    return { src: PLACEHOLDER_IMAGE_SRC };
  }

  const widths = options?.widths?.length ? options.widths : [...DEFAULT_WIDTHS];

  if (!supportsResponsiveSrcSet(raw)) {
    return { src: optimizeImageUrl(raw, { width: 1200 }) };
  }

  const srcSet = widths.map((w) => `${optimizeImageUrl(raw, { width: w })} ${w}w`).join(", ");
  const defaultW = widths.includes(1200)
    ? 1200
    : widths[Math.max(0, Math.floor((widths.length - 1) / 2))] ?? 1200;
  return {
    src: optimizeImageUrl(raw, { width: defaultW }),
    srcSet,
  };
}
