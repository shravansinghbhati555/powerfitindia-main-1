import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * When navigating to `/#section`, scrolls to `id="section"` after the route renders (SPA).
 */
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 64);
    return () => window.clearTimeout(t);
  }, [pathname, hash, key]);

  return null;
}
