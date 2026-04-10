import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PowerFitImage } from "@/components/ui/PowerFitImage";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const MotionPowerFitImage = motion(PowerFitImage);

const items = [
  { img: gallery1, title: "Iron Temple", tags: ["Strength"] },
  { img: gallery2, title: "Cardio Zone", tags: ["Endurance"] },
  { img: gallery3, title: "Team Spirit", tags: ["Community"] },
  { img: gallery4, title: "Beast Mode", tags: ["Training"] },
  { img: gallery5, title: "Personal Best", tags: ["Coaching"] },
  { img: gallery6, title: "Group Power", tags: ["Classes"] },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-dark py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-text text-primary mb-4 tracking-[0.3em]">Gallery</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground">
            Inside <span className="gradient-text">PowerFit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group shutter-flash"
            >
              <PowerFitImage
                src={item.img}
                alt={item.title}
                sizes="(max-width: 768px) 50vw, 33vw"
                priority={i < 3}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <h4 className="font-display text-2xl md:text-3xl text-dark-foreground text-center">{item.title}</h4>
                <div className="flex gap-2 mt-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="label-text text-[10px] text-primary bg-primary/10 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.button
              className="absolute top-6 right-6 text-dark-foreground"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </motion.button>
            <MotionPowerFitImage
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={items[selected].img}
              alt={items[selected].title}
              sizes="100vw"
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
