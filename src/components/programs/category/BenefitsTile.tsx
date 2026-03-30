import { useEffect, useMemo, useRef, useState } from "react";
import type { Benefit } from "@/data/programs";

function parseNumberish(value: string) {
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.trim().startsWith("-") ? "-" : "";
  const suffix = value.replace(/[0-9.\s-]/g, "");
  return { numeric: Number.isFinite(numeric) ? numeric : null, prefix, suffix };
}

export default function BenefitsTile({ benefit, accentColor }: { benefit: Benefit; accentColor: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [counted, setCounted] = useState(false);
  const [display, setDisplay] = useState<string>("—");
  const parsed = useMemo(() => parseNumberish(benefit.value), [benefit.value]);

  useEffect(() => {
    if (counted) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setCounted(true);
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [counted]);

  useEffect(() => {
    if (!counted) return;
    if (parsed.numeric === null) {
      setDisplay(benefit.value);
      return;
    }

    const start = performance.now();
    const duration = 1200;
    const from = 0;
    const to = parsed.numeric;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = from + (to - from) * eased;
      const rounded = to >= 10 ? Math.round(val) : Math.round(val * 10) / 10;
      setDisplay(`${parsed.prefix}${rounded}${parsed.suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [benefit.value, counted, parsed.numeric, parsed.prefix, parsed.suffix]);

  return (
    <div
      ref={ref}
      className="bg-zinc-800 rounded-2xl p-4 text-center group hover:bg-zinc-700 transition-colors cursor-default"
    >
      <div className="text-2xl mb-1">{benefit.icon}</div>
      <div className="text-2xl font-black" style={{ color: accentColor }}>
        {display}
      </div>
      <div className="text-white text-sm font-semibold">{benefit.title}</div>
      <div className="text-zinc-500 text-xs mt-1">{benefit.description}</div>
    </div>
  );
}

