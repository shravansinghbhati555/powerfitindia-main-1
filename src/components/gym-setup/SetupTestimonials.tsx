import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "PowerFit set up our society gym in Mansarovar in just 6 days. The quality of equipment is outstanding — our residents are thrilled. The AMC means we never have to worry about maintenance.",
    author: "RWA Secretary, Jaipur Housing Society",
    stars: 5,
  },
  {
    quote: "I wanted a home gym but had no idea where to start. PowerFit's team visited, planned the entire layout, and set it up in 2 days. Every rupee was worth it.",
    author: "Home Gym Owner, Vaishali Nagar, Jaipur",
    stars: 5,
  },
  {
    quote: "We set up a corporate wellness room for our 80-person office. PowerFit handled everything — design, equipment, flooring. Employee engagement has gone up significantly.",
    author: "HR Manager, IT Company, Jaipur",
    stars: 5,
  },
];

const doubled = [...testimonials, ...testimonials];

const SetupTestimonials = () => (
  <section className="py-24 overflow-hidden" style={{ background: "#0A0A0A" }}>
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black text-white font-['Oswald'] text-center"
      >
        What Our Setup Clients Say
      </motion.h2>
    </div>

    <div className="relative group">
      <div className="flex gap-6 animate-[scroll-x_30s_linear_infinite] group-hover:[animation-play-state:paused] w-max px-4">
        {doubled.map((t, i) => (
          <div
            key={i}
            className="w-[380px] flex-shrink-0 rounded-2xl p-6 border border-white/5"
            style={{ background: "#141414" }}
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <span key={j} className="text-primary text-lg">⭐</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
            <p className="text-white font-semibold text-sm">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SetupTestimonials;
