import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, type RefObject } from "react";

export function useParallax<T extends HTMLElement>(range: [number, number] = [-30, 30]): { ref: RefObject<T>; y: MotionValue<number> } {
  const ref = useRef<T>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], range);
  return useMemo(() => ({ ref, y }), [y]);
}

