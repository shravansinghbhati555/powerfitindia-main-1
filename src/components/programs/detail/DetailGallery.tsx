import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props {
  program: Program;
  visuals: ProgramVisual;
  theme: CategoryTheme;
}

export default function DetailGallery({ program, visuals, theme }: Props) {
  const imgs = visuals.galleryImages.slice(0, 4);
  const waMsg = encodeURIComponent(`Hi! I want to book a free trial for ${program.name} at PowerFit.`);

  return (
    <section className="relative overflow-hidden" style={{ height: 400 }} aria-label="Gallery">
      <div
        className="absolute inset-0"
        style={{
          display: "grid",
          gridTemplateColumns: "55% 22.5% 22.5%",
          gridTemplateRows: "60% 40%",
        }}
      >
        {imgs.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden relative"
            style={{
              gridColumn: i === 0 ? "1" : i === 3 ? "2 / span 2" : String(i + 1),
              gridRow: i === 0 ? "1 / span 2" : i === 3 ? "2" : "1",
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)` }} />

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white drop-shadow-lg">{program.name} at PowerFit</h2>
          <p className="text-zinc-300 text-sm drop-shadow">Real studio moments</p>
        </div>
        <a
          href={`https://wa.me/918619527263?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-[#25D366]/90 backdrop-blur-sm hover:scale-105 transition-all inline-flex items-center gap-2 border"
          style={{ borderColor: `${theme.accent}40` }}
        >
          📸 Book Free Trial
        </a>
      </div>
    </section>
  );
}
