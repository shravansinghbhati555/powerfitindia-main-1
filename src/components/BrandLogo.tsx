import { BRAND } from "@/config/site";

type BrandLogoProps = {
  /** "light" renders the white-FIT lockup for dark backgrounds, "dark" the black-FIT lockup for light ones. */
  variant?: "light" | "dark";
  className?: string;
  /** Set on the one logo that sits at the top of the page, so it is not lazy-loaded. */
  priority?: boolean;
};

/**
 * The official PowerFit India horizontal lockup.
 * Height is driven by the caller through className; width follows the 2.49:1 aspect ratio.
 */
const BrandLogo = ({ variant = "light", className = "h-9 md:h-10", priority = false }: BrandLogoProps) => (
  <img
    src={variant === "dark" ? BRAND.logoDark : BRAND.logo}
    alt={`${BRAND.name} logo`}
    width={399}
    height={160}
    loading={priority ? "eager" : "lazy"}
    decoding={priority ? "sync" : "async"}
    fetchPriority={priority ? "high" : "auto"}
    className={`w-auto select-none ${className}`}
    draggable={false}
  />
);

export default BrandLogo;
