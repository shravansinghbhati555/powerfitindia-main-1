import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Kapoor",
    role: "Member since 2021",
    text: "PowerFit completely changed my relationship with fitness. The trainers are world-class and the atmosphere pushes you to be your best every single day.",
  },
  {
    name: "Sneha Patel",
    role: "CrossFit Enthusiast",
    text: "I've tried 6 different gyms in Mumbai. PowerFit is the only one that made me stay. The equipment quality and coaching are on another level.",
  },
  {
    name: "Arjun Reddy",
    role: "Franchise Owner, Hyderabad",
    text: "Opening a PowerFit franchise was the best business decision I've made. The support team is incredible and the brand practically sells itself.",
  },
  {
    name: "Meera Sharma",
    role: "Yoga & HIIT Member",
    text: "The variety of programs keeps me coming back. From intense HIIT sessions to calming yoga flows — it's all under one roof.",
  },
  {
    name: "Vikrant Singh",
    role: "Personal Training Client",
    text: "Lost 15kg in 4 months with my PT at PowerFit. The nutrition guidance and accountability made all the difference.",
  },
  {
    name: "Priya Nair",
    role: "Franchise Owner, Kochi",
    text: "The ROI has been phenomenal. PowerFit's brand recognition in the fitness space is unmatched in India right now.",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[340px] md:w-[400px] bg-dark-card rounded-2xl p-8 border border-dark-foreground/10 group hover:border-primary/30 transition-all duration-500 mx-3">
    <motion.div
      whileHover={{ scale: 1.3 }}
      className="text-primary text-5xl font-display leading-none mb-4 transition-transform"
    >
      &ldquo;
    </motion.div>
    <p className="font-body text-dark-foreground/80 text-sm leading-relaxed mb-6">{t.text}</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
        <span className="font-display text-primary text-lg">{t.name[0]}</span>
      </div>
      <div>
        <p className="font-body text-dark-foreground text-sm font-semibold relative inline-block">
          {t.name}
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
        </p>
        <p className="font-body text-dark-muted text-xs">{t.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="section-dark py-20 md:py-32 overflow-hidden border-t border-dark-foreground/10">
      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="label-text text-primary mb-4 tracking-[0.3em]">Testimonials</p>
          <h2 className="font-display text-5xl md:text-7xl text-dark-foreground">
            What They <span className="gradient-text">Say</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex conveyor-track" style={{ width: `${doubled.length * 420}px` }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
