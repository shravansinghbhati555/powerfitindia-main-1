import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    <section className="section-dark py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-text text-primary mb-3">Testimonials</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground">
            Real Members. <span className="gradient-text">Real Results.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="bg-dark-card rounded-2xl p-8 md:p-12 text-center border border-dark-foreground/5"
            >
              <Quote className="text-primary/30 mx-auto mb-6" size={40} />
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="font-body text-dark-foreground text-lg md:text-xl leading-relaxed mb-8">
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
              className="w-12 h-12 rounded-full bg-dark-card flex items-center justify-center text-dark-foreground hover:text-primary transition-colors border border-dark-foreground/10"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-dark-muted/30"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-dark-card flex items-center justify-center text-dark-foreground hover:text-primary transition-colors border border-dark-foreground/10"
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
