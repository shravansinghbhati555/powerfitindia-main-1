import { useEffect, useMemo, useRef, useState } from "react";

function parseValue(raw: string) {
  const trimmed = raw.trim();
  const negative = trimmed.startsWith("-");
  const numeric = parseFloat(trimmed.replace(/[^0-9.]/g, ""));
  const suffix = trimmed.replace(/[0-9.\s+-]/g, "");
  const prefix = negative ? "-" : trimmed.startsWith("+") ? "+" : "";
  return { numeric: Number.isFinite(numeric) ? numeric : null, prefix, suffix, raw: trimmed };
}

export default function CountUp({
  value,
  durationMs = 1800,
  className,
  style,
}: {
  value: string;
  durationMs?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState<string>("—");
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setStarted(true);
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (parsed.numeric === null) {
      setDisplay(parsed.raw);
      return;
    }

    const from = 0;
    const to = parsed.numeric;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = from + (to - from) * eased;
      const rounded = Math.abs(to) >= 10 ? Math.round(val) : Math.round(val * 10) / 10;
      setDisplay(`${parsed.prefix}${rounded}${parsed.suffix}`);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [durationMs, parsed.numeric, parsed.prefix, parsed.raw, parsed.suffix, started]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  );
}

