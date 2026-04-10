import {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
  type ImgHTMLAttributes,
  type SyntheticEvent,
} from "react";
import { cn } from "@/lib/utils";
import { buildImageSources, PLACEHOLDER_IMAGE_SRC } from "@/lib/imageUtils";

export type PowerFitImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes" | "loading" | "onError" | "decoding" | "fetchPriority"
> & {
  src?: string | null | undefined;
  alt: string;
  /** Hero / LCP — eager load + high fetch priority */
  priority?: boolean;
  /** Pixel widths for srcset (defaults: 480, 768, 1200, 1920) */
  widths?: readonly number[];
  /** e.g. "(max-width: 768px) 100vw, 33vw" */
  sizes?: string;
  onError?: ImgHTMLAttributes<HTMLImageElement>["onError"];
};

/**
 * Site-wide image: responsive srcset where supported (Unsplash, Shopify, Pexels),
 * lazy by default, PowerFit branded SVG if src is missing or fails to load.
 */
export const PowerFitImage = forwardRef<HTMLImageElement, PowerFitImageProps>(function PowerFitImage(
  { src, alt, className, priority = false, widths, sizes = "100vw", decoding = "async", onError, ...rest },
  ref,
) {
  const [showFallback, setShowFallback] = useState(() => !src?.trim());
  const failedOnce = useRef(false);

  const { src: resolvedSrc, srcSet } = useMemo(
    () =>
      buildImageSources(showFallback ? PLACEHOLDER_IMAGE_SRC : src, {
        widths,
      }),
    [src, showFallback, widths],
  );

  const handleError = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>) => {
      if (failedOnce.current) return;
      failedOnce.current = true;
      setShowFallback(true);
      onError?.(e);
    },
    [onError],
  );

  return (
    <img
      ref={ref}
      src={resolvedSrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      className={cn(className)}
      loading={priority ? "eager" : "lazy"}
      decoding={decoding}
      fetchPriority={priority ? "high" : "auto"}
      onError={handleError}
      {...rest}
    />
  );
});
