import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const trustPoints = [
  { title: "No Hidden Costs", desc: "The quote you approve is the price you pay. Period." },
  { title: "Turnkey Delivery", desc: "We handle everything from design to installation to handover. You show up for the keys." },
  { title: "Post-Setup Support", desc: "12-month support hotline. Equipment issues? We fix it, not you." },
  { title: "Certified Trainers On-Call", desc: "Need a trainer for your new gym? We can connect you with PowerFit certified trainers." },
  { title: "Rajasthan's Most Experienced Team", desc: "400+ setups across homes, offices, and societies since 2017." },
  { title: "EMI Options Available", desc: "Setup now, pay in installments. Ask our team for details." },
];

const WhyPowerFitSetup = () => {
  const countRef = useRef<HTMLDivElement>(null);
  const inView = useInView(countRef, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const timer = setInterval(() => {
      current += 8;
      if (current >= 400) { setCount(400); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section className="py-24 px-4" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white font-['Oswald']">Why 400+ Clients Chose PowerFit to Build Their Gym</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — SVG gym layout wireframe + counter */}
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 400 300" className="w-full max-w-md opacity-60">
              <rect x="10" y="10" width="380" height="280" rx="8" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="6 3" />
              {/* Equipment layout wireframe */}
              <rect x="30" y="30" width="60" height="40" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
              <text x="60" y="55" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">RACK</text>
              <rect x="110" y="30" width="80" height="30" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
              <text x="150" y="50" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">BENCH</text>
              <rect x="30" y="90" width="50" height="80" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
              <text x="55" y="135" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">SMITH</text>
              <circle cx="250" cy="60" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.6" />
              <text x="250" y="63" textAnchor="middle" fill="hsl(var(--primary))" fontSize="7" opacity="0.5">CABLE</text>
              <rect x="210" y="120" width="160" height="20" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
              <rect x="210" y="150" width="160" height="20" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
              <rect x="210" y="180" width="160" height="20" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
              <text x="290" y="135" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">TREADMILLS</text>
              <rect x="30" y="200" width="160" height="70" rx="4" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
              <text x="110" y="240" textAnchor="middle" fill="hsl(var(--primary))" fontSize="8" opacity="0.5">FUNCTIONAL ZONE</text>
            </svg>
            <div ref={countRef} className="mt-8 text-center">
              <div className="text-7xl font-black text-primary font-['Oswald']">{count}+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">Setups Completed</div>
            </div>
          </div>

          {/* Right — trust points */}
          <div className="space-y-6">
            {trustPoints.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0 mt-1 text-primary">
                  <motion.path
                    d="M5 13l4 4L19 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  />
                </svg>
                <div>
                  <h3 className="text-white font-bold text-lg">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPowerFitSetup;
