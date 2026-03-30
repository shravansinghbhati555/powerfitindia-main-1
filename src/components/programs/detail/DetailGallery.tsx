import { motion } from "framer-motion";
import type { Program } from "@/data/programs";
import type { ProgramVisual } from "@/config/programVisuals";

interface Props { program: Program; visuals: ProgramVisual }

export default function DetailGallery({ program, visuals }: Props) {
  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0D0D" }} aria-label="Gallery">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="font-display text-3xl md:text-5xl text-white mb-10"
        >
          {program.name} at PowerFit — Real Studio Moments
        </motion.h2>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {visuals.galleryImages.slice(0, 4).map((img, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer"
            >
              <img src={img.url} alt={img.alt} loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-500 text-sm mt-4 text-center">📸 Photos from PowerFit studios in Jaipur and Sikar.</p>
      </div>
    </section>
  );
}
