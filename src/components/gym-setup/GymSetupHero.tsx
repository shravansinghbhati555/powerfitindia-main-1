import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const heroImages = [
  { src: "/gym-hero-1.jpg", alt: "Premium dark-lit PowerFit gym interior with red accent lighting" },
  { src: "/gym-hero-2.jpg", alt: "Professional home gym setup by PowerFit India in Jaipur" },
  { src: "/gym-hero-3.jpg", alt: "Modern society apartment gym with commercial equipment by PowerFit" },
];

const headlineWords = "We Don't Just Supply Equipment. We Build Your Dream Gym.".split(" ");

const GymSetupHero = () => {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveImg((p) => (p + 1) % heroImages.length), 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(232,0,14,0.3) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(232,0,14,0.3) 50px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(232,0,14,0.06)] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
        {/* Left text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">India's #1 Gym Setup Service</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 font-['Oswald']">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, scale: 1.1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
          >
            From a compact 200 sq ft home gym to a 10,000 sq ft society fitness center — PowerFit designs, supplies, installs, and maintains professional gym setups across India. Affordable. Reliable. World-Class.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => scrollTo("quote")}
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => scrollTo("locations")}
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:border-white/60 transition-all"
            >
              See Our Studio Locations
            </button>
            <a
              href="https://wa.me/918619527263?text=Hi%20PowerFit!%20I%20want%20to%20enquire%20about%20gym%20setup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#20bd5a] transition-all flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.388A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.344 0-4.507-.802-6.222-2.146l-.345-.282-3.577 1.063 1.107-3.438-.309-.368A9.955 9.955 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
              WhatsApp Us Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-6 text-sm text-gray-400"
          >
            <span>🏆 Est. 2017</span>
            <span>📍 400+ Setups Delivered</span>
            <span>⭐ Rajasthan's #1 Gym Builder</span>
          </motion.div>
        </div>

        {/* Right morphing images */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden hidden lg:block">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              width={1280}
              height={720}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: activeImg === i ? 1 : 0 }}
              {...(i === 0 ? {} : { loading: "lazy" as const })}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          {/* Image dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`w-2 h-2 rounded-full transition-all ${activeImg === i ? "bg-primary w-6" : "bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymSetupHero;
