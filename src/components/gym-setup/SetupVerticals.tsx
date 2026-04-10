import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

const verticals = [
  {
    id: "home",
    handle: "home-gym-setup",
    icon: "🏠",
    tag: "MOST POPULAR",
    title: "Home Gym Setup",
    price: "Starting ₹50,000",
    body: "Transform your spare room, garage, or terrace into a fully equipped professional gym. Custom layout planning, premium equipment, and installation — all done for you.",
    includes: [
      "Space & Layout Consultation",
      "Equipment Selection & Procurement",
      "Professional Installation",
      "Flooring & Mirror Fitting",
      "1-Year Maintenance Support",
    ],
    cta: "Get Home Gym Quote",
    bg: "/gym-hero-2.jpg",
    bgAlt: "Compact home gym setup by PowerFit India",
    direction: "left" as const,
  },
  {
    id: "office",
    handle: "corporate-gym-setup",
    icon: "🏢",
    tag: "BOOST PRODUCTIVITY",
    title: "Corporate / Office Gym Setup",
    price: "Starting ₹1,50,000",
    body: "Healthy employees perform better. PowerFit designs corporate wellness spaces that boost morale, reduce sick days, and make your company a preferred employer. Minimal disruption during installation.",
    includes: [
      "Workplace Wellness Consultation",
      "Space Optimization & CAD Layout",
      "Premium Commercial-Grade Equipment",
      "Trainer Tie-Up (Optional Add-on)",
      "Quarterly Maintenance Contract",
    ],
    cta: "Get Office Gym Quote",
    bg: "/gym-hero-1.jpg",
    bgAlt: "Modern corporate office gym by PowerFit",
    direction: "bottom" as const,
  },
  {
    id: "society",
    handle: "society-gym-setup",
    icon: "🏘️",
    tag: "INDIA'S #1 CHOICE",
    title: "Society & Apartment Gym Setup",
    price: "Starting ₹3,00,000",
    body: "Increase your housing society's property value and resident satisfaction. PowerFit delivers end-to-end gym setup and ongoing AMC (Annual Maintenance Contract) — so the committee never has to worry.",
    includes: [
      "Full Turnkey Setup (Design to Delivery)",
      "Society Committee Presentation & Approval Support",
      "Commercial Equipment with Warranty",
      "Safety Rubber Flooring + AC Unit Guidance",
      "Annual Maintenance Contract (AMC)",
      "PowerFit Branding for the Gym Space",
    ],
    cta: "Get Society Gym Quote",
    bg: "/gym-hero-3.jpg",
    bgAlt: "Society apartment gym setup by PowerFit India",
    direction: "right" as const,
  },
];

const getInitial = (dir: string) => {
  if (dir === "left") return { x: -80, opacity: 0 };
  if (dir === "right") return { x: 80, opacity: 0 };
  return { y: 80, opacity: 0 };
};

const SetupVerticals = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const scrollToQuote = (type: string) => {
    const el = document.getElementById("quote");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="verticals" className="py-24 px-4" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white font-['Oswald'] mb-4">Professional Gym Setup For Every Space</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Whether it's your spare room, your office wellness zone, or your society's fitness center — PowerFit brings the same world-class standard to every square foot.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <motion.div
              key={v.id}
              id={v.id}
              initial={getInitial(v.direction)}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer min-h-[500px] flex flex-col justify-end"
              onMouseEnter={() => setExpanded(v.id)}
              onMouseLeave={() => setExpanded(null)}
            >
              <PowerFitImage src={v.bg} alt={v.bgAlt} sizes="(max-width: 768px) 100vw, 33vw" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/75 transition-all duration-300" />
              
              {/* Tag */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full z-10">{v.tag}</div>

              <div className="relative z-10 p-6">
                <div className="text-3xl mb-2">{v.icon}</div>
                <h3 className="text-2xl font-bold text-white font-['Oswald'] mb-1">{v.title}</h3>
                <p className="text-primary font-bold text-lg mb-3">{v.price}</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{v.body}</p>

                {/* Expandable includes */}
                <div className={`overflow-hidden transition-all duration-500 ${expanded === v.id ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-2 mb-4">
                    {v.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-primary mt-0.5">✅</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToQuote(v.id)}
                  className="w-[calc(50%-24px)] py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all text-sm"
                >
                  Get Free Quote
                </button>
                <Link
                  to={`/shop/${v.handle}`}
                  className="inline-flex w-[calc(50%-24px)] items-center justify-center py-3 px-6 ml-10 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all text-sm"
                >
                  Explore Range →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SetupVerticals;
