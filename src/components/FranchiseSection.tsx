import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

/* Pulsing dot with sonar ring */
const MapDot = ({ x, y, delay, label }: { x: number; y: number; delay: number; label: string }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <g>
      <circle cx={x} cy={y} r="6" fill="hsl(355, 78%, 56%)" opacity="0.9">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx={x} cy={y} r="6" fill="none" stroke="hsl(355, 78%, 56%)" strokeWidth="1" opacity="0.5">
        <animate attributeName="r" values="6;20;30" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x={x} y={y - 12} textAnchor="middle" fill="hsl(0, 0%, 70%)" fontSize="8" fontFamily="Inter">
        {label}
      </text>
    </g>
  );
};

const cities = [
  { x: 580, y: 180, label: "Mumbai", delay: 500 },
  { x: 600, y: 165, label: "Delhi", delay: 1000 },
  { x: 610, y: 185, label: "Bangalore", delay: 1500 },
  { x: 595, y: 170, label: "Pune", delay: 2000 },
  { x: 615, y: 175, label: "Hyderabad", delay: 2500 },
  { x: 620, y: 190, label: "Chennai", delay: 3000 },
  { x: 575, y: 175, label: "Ahmedabad", delay: 3500 },
  { x: 625, y: 165, label: "Kolkata", delay: 4000 },
  { x: 605, y: 195, label: "Kochi", delay: 4500 },
  { x: 565, y: 170, label: "Jaipur", delay: 5000 },
  { x: 400, y: 160, label: "Dubai", delay: 6000 },
  { x: 250, y: 130, label: "London", delay: 7000 },
  { x: 150, y: 140, label: "New York", delay: 8000 },
  { x: 700, y: 200, label: "Singapore", delay: 9000 },
  { x: 750, y: 220, label: "Sydney", delay: 10000 },
];

const FranchiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [cityCount, setCityCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCityCount(prev => {
        if (prev >= 500) { clearInterval(interval); return 500; }
        return prev + Math.ceil((500 - prev) / 20);
      });
    }, 100);
    return () => clearInterval(interval);
  }, [inView]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "" });

  return (
    <section ref={sectionRef} className="section-dark py-20 md:py-32 border-t border-dark-foreground/10 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text + Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-text text-primary mb-4 tracking-[0.3em]">Global Expansion</p>
            <h2 className="font-display text-5xl md:text-7xl text-dark-foreground leading-[0.9] mb-4">
              Own a <span className="gradient-text">PowerFit</span>
            </h2>
            <p className="font-body text-dark-muted text-base md:text-lg leading-relaxed mb-4">
              Join India's fastest-growing fitness franchise. Proven business model, 
              premium equipment, ongoing support, and a brand that commands loyalty.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="font-display text-5xl text-primary red-glow-text">{cityCount}+</div>
              <div className="label-text text-dark-muted text-xs">Cities<br />Targeted</div>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); alert("Franchise inquiry submitted!"); }}
              className="bg-dark-card rounded-2xl p-6 md:p-8 border border-dark-foreground/10 space-y-3"
            >
              {[
                { name: "name", placeholder: "Full Name", type: "text" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "phone", placeholder: "Phone Number", type: "tel" },
                { name: "city", placeholder: "Your City", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                  className="w-full bg-dark text-dark-foreground px-5 py-3.5 rounded-xl font-body text-sm placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary/50 border border-dark-foreground/10 transition-shadow"
                />
              ))}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-full label-text font-bold shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
              >
                Apply for Franchise
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Animated Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <svg
              viewBox="0 0 900 450"
              className="w-full h-auto"
              style={{ filter: "drop-shadow(0 0 20px hsla(355, 78%, 56%, 0.1))" }}
            >
              {/* Simplified world map outline */}
              <path
                d="M120,120 Q140,100 180,110 Q200,105 220,115 Q240,108 260,118 L280,105 Q300,95 320,108 Q340,100 360,110 L380,105 Q400,98 420,108 Q440,105 460,112 Q480,108 500,115 Q520,110 540,120 Q560,115 580,125 Q600,118 620,128 Q640,122 660,130 Q680,125 700,132 Q720,128 740,135 L750,140 Q740,160 730,175 Q720,190 715,210 Q710,230 720,245 L700,250 Q680,245 660,248 Q640,252 620,248 L600,255 Q580,260 560,255 Q540,258 520,252 Q500,258 480,255 L460,260 Q440,265 420,260 Q400,262 380,258 Q360,262 340,258 L320,262 Q300,265 280,260 Q260,264 240,260 Q220,262 200,258 Q180,262 160,260 L140,255 Q130,240 125,220 Q122,200 125,180 Q120,160 118,140 Z"
                fill="none"
                stroke="hsl(0, 0%, 20%)"
                strokeWidth="0.8"
                opacity="0.5"
              />
              {/* India outline */}
              <path
                d="M565,155 Q575,150 590,148 Q605,150 620,155 Q630,160 635,170 Q638,180 635,190 Q630,200 620,205 Q610,210 600,208 Q590,210 580,205 Q575,195 572,185 Q568,175 565,165 Z"
                fill="hsl(355, 78%, 56%)"
                opacity="0.08"
                stroke="hsl(355, 78%, 56%)"
                strokeWidth="0.5"
              />

              {/* City dots */}
              {inView && cities.map((city) => (
                <MapDot key={city.label} {...city} />
              ))}

              {/* Grid lines */}
              {[100, 150, 200, 250, 300, 350].map(y => (
                <line key={`h${y}`} x1="50" y1={y} x2="850" y2={y} stroke="hsl(0, 0%, 15%)" strokeWidth="0.3" />
              ))}
              {[100, 200, 300, 400, 500, 600, 700, 800].map(x => (
                <line key={`v${x}`} x1={x} y1="80" x2={x} y2="380" stroke="hsl(0, 0%, 15%)" strokeWidth="0.3" />
              ))}
            </svg>

            <div className="absolute bottom-4 right-4 bg-dark-card/80 backdrop-blur-sm border border-dark-foreground/10 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary sonar-ring" />
                <span className="label-text text-dark-muted text-[10px]">Live Expansion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
