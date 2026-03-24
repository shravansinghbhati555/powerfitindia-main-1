import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 400, suffix: "+", label: "Gym Setups" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Own Studios" },
  { value: 5000, suffix: "+", label: "Equipment Units Supplied" },
  { value: 3, suffix: "", label: "Setup Verticals" },
  { value: 24, suffix: "/7", label: "Post-Setup Support" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsStrip = () => (
  <section className="relative py-8 overflow-hidden" style={{ background: "#111111" }}>
    {/* EKG line */}
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
    />
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="text-3xl md:text-4xl font-black text-primary font-['Oswald']">
            <CountUp target={s.value} suffix={s.suffix} />
          </div>
          <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{s.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default StatsStrip;
