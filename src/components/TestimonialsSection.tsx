import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Rahul K.", text: "PowerFit completely changed my life. I lost 25 kgs in 6 months with their structured fat loss program. The trainers are world-class.", rating: 5 },
  { name: "Ananya P.", text: "The group classes are insane! High energy, great music, and coaches who actually care about your form. Best gym I've been to.", rating: 5 },
  { name: "Dev M.", text: "I've trained at multiple gyms, but the equipment and atmosphere at PowerFit is unmatched. This is where serious training happens.", rating: 5 },
  { name: "Sneha R.", text: "As a beginner, I was nervous. The personal trainers at PowerFit made me feel comfortable and pushed me just the right amount.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-text text-sm text-primary mb-4 tracking-widest">Testimonials</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl gradient-text">
            Real Members. Real Results.
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 md:p-12 text-center"
              style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1), 0 4px 8px -2px hsla(0,0%,0%,0.2)" }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={20} />
                ))}
              </div>
              <p className="font-body text-foreground text-lg md:text-xl leading-relaxed mb-8">
                "{testimonials[current].text}"
              </p>
              <p className="font-display text-2xl gradient-text">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
              style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1)" }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors"
              style={{ boxShadow: "0 0 0 1px hsla(220,15%,50%,0.1)" }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
