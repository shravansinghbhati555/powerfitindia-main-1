import { motion } from "framer-motion";

const dayInLife = [
  {
    time: "5:45 AM",
    emoji: "⏰",
    title: "Wake up. Actually excited.",
    desc: "You used to dread mornings. Now your body wakes up before the alarm. Something shifted.",
    color: "#F59E0B",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400",
    imageAlt: "Early morning fitness motivation",
  },
  {
    time: "6:00 AM",
    emoji: "🏋️",
    title: "Morning batch at PowerFit",
    desc: "Your trainer is already there. The group energy is electric. 60 minutes that change everything.",
    color: "#E8000E",
    imageSrc:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400",
    imageAlt: "Morning gym session PowerFit Jaipur",
  },
  {
    time: "7:15 AM",
    emoji: "💪",
    title: "Post-workout high",
    desc: "Endorphins. A body that feels earned. Protein shake. Ready to dominate the day.",
    color: "#22C55E",
    imageSrc:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    imageAlt: "Post workout energy PowerFit member",
  },
  {
    time: "1:00 PM",
    emoji: "🥗",
    title: "Eating right — effortlessly",
    desc: "Your nutritionist planned this week's meals. You're not dieting — you're fueling.",
    color: "#7C3AED",
    imageSrc:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400",
    imageAlt: "Healthy meal plan nutrition PowerFit",
  },
  {
    time: "9:30 PM",
    emoji: "😴",
    title: "Deep sleep. Every night.",
    desc: "Your body is recovering, rebuilding, and getting stronger while you sleep. Tomorrow, we do it again.",
    color: "#3B82F6",
    imageSrc:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=400",
    imageAlt: "Deep sleep recovery fitness",
  },
];

export default function MembershipDayInLife() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[var(--content-max-width)] mx-auto px-4">
        <motion.h2
          className="text-4xl font-black text-white text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          A Day in the Life of a PowerFit Member
        </motion.h2>
        <motion.p
          className="text-zinc-500 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          This is what transformation looks like — one day at a time.
        </motion.p>

        <div className="space-y-10">
          {dayInLife.map((item, i) => (
            <motion.div
              key={item.time}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.07, type: "spring", stiffness: 120 }}
            >
              <div className="w-full lg:w-2/5">
                <motion.div
                  className="relative rounded-2xl overflow-hidden h-48"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-black text-sm text-black"
                    style={{ background: item.color }}
                  >
                    {item.time}
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-3/5">
                <div className="text-3xl mb-2" aria-hidden="true">
                  {item.emoji}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{item.desc}</p>

                {i < dayInLife.length - 1 && (
                  <div className="hidden lg:block w-px h-10 mt-6 ml-4" style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }} />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 text-lg mb-6">
            This is not a fantasy. This is what 500+ PowerFit members live every day.
            <br />
            <strong className="text-white">Your first day starts the moment you say yes.</strong>
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg text-white bg-red-600 hover:bg-red-500 hover:scale-105 transition-all shadow-[0_0_40px_rgba(232,0,14,0.3)]"
          >
            💪 Start My Transformation — View Plans
          </a>
        </motion.div>
      </div>
    </section>
  );
}

