import { useEffect, useState } from "react";

export const useRopeScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sway, setSway] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const denom = document.body.scrollHeight - window.innerHeight;
      const progress = denom > 0 ? window.scrollY / denom : 0;
      const swayAmount = Math.sin(window.scrollY * 0.015) * 10;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
      setSway(swayAmount);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollProgress, sway };
};

