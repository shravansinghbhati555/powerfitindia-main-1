import { motion } from "framer-motion";
import { PowerFitImage } from "@/components/ui/PowerFitImage";

const WA_PHONE = "919116838715";

const userSegments = [
  {
    emoji: "🏢",
    type: "The Busy Professional",
    pain: "No time, high stress, desk body",
    promise: "Results in 30 min sessions. Morning & evening batches. Stress gone in Week 1.",
    stats: "88% report more energy at work in 30 days",
    programs: ["HIIT", "Functional Fitness", "Meditation"],
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
    imageAlt: "Busy professional joining PowerFit gym Jaipur",
    ctaText: "This is me",
    whatsappMsg:
      "Hi! I am a busy professional looking for a gym membership at PowerFit. I need morning/evening batches.",
  },
  {
    emoji: "⚖️",
    type: "The Weight Loss Seeker",
    pain: "Tried everything. Nothing sticks.",
    promise: "Avg 8.3kg lost in 90 days. Nutritionist included. Real accountability.",
    stats: "78% of weight loss members keep it off at 6 months",
    programs: ["Weight Loss Program", "HIIT", "Zumba"],
    imageSrc: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400",
    imageAlt: "Weight loss transformation at PowerFit gym Jaipur",
    ctaText: "This is me",
    whatsappMsg:
      "Hi! I want to lose weight with PowerFit membership. Please share the Weight Loss program details.",
  },
  {
    emoji: "🤸",
    type: "The Beginner",
    pain: "Never been to a gym. Intimidated.",
    promise: "Certified trainer by your side from Day 1. Zero judgment. Real support.",
    stats: "94% of beginners feel confident within 2 weeks",
    programs: ["Strength Training", "Yoga", "Functional Fitness"],
    imageSrc: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400",
    imageAlt: "Beginner starting gym at PowerFit India",
    ctaText: "This is me",
    whatsappMsg:
      "Hi! I am a complete beginner and want to join PowerFit. I need guidance on where to start.",
  },
  {
    emoji: "💪",
    type: "The Fitness Enthusiast",
    pain: "Current gym lacks coaching & community.",
    promise: "Advanced programming. Expert coaches. Competitive community that pushes you.",
    stats: "89% hit a new personal record within 45 days",
    programs: ["CrossFit", "Calisthenics", "Strength Training"],
    imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400",
    imageAlt: "Advanced athlete training at PowerFit gym",
    ctaText: "This is me",
    whatsappMsg:
      "Hi! I am an experienced gym-goer looking to upgrade my training at PowerFit. Please share advanced program details.",
  },
  {
    emoji: "🌸",
    type: "The Woman Who Wants Safe Space",
    pain: "Regular gyms feel uncomfortable.",
    promise: "Female-only batches. Female trainers. Cycle-synced programs. No judgment.",
    stats: "96% of women feel more confident in 45 days",
    programs: ["Women's Fitness", "Yoga", "Zumba"],
    imageSrc: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400",
    imageAlt: "Women's fitness class at PowerFit Jaipur",
    ctaText: "This is me",
    whatsappMsg:
      "Hi! I am looking for a women's gym membership at PowerFit with female trainers. Please share details.",
  },
  {
    emoji: "🧘",
    type: "The Stress-Overwhelmed",
    pain: "Anxiety, poor sleep, burnout.",
    promise: "Yoga + Meditation combo. Cortisol drops 32% in 8 weeks. Sleep improves in 2 weeks.",
    stats: "94% report better sleep within 30 days",
    programs: ["Yoga", "Meditation", "Functional Fitness"],
    imageSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400",
    imageAlt: "Yoga and meditation membership PowerFit India",
    ctaText: "This is me",
    whatsappMsg:
      "Hi! I am dealing with stress and want a Yoga/Meditation membership at PowerFit. Please guide me.",
  },
];

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function MembershipWhoIsThisFor() {
  return (
    <section className="py-14 md:py-20" style={{ background: "#0A0A0A" }}>
      <div className="px-4">
        <div className="max-w-[var(--content-max-width)] mx-auto">
          <div className="text-center mb-10">
            <motion.p
              className="text-red-400 text-xs font-black tracking-widest uppercase mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              FIND YOURSELF
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-black text-white"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              PowerFit Is Built For You
            </motion.h2>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {userSegments.map((seg, i) => (
              <motion.div
                key={seg.type}
                className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 bg-zinc-900"
                style={{ minHeight: 420 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring" }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(232,0,14,0.3)" }}
              >
                <PowerFitImage
                  src={seg.imageSrc}
                  alt={seg.imageAlt}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 3}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="text-3xl mb-2">{seg.emoji}</div>
                  <h3 className="text-white font-black text-lg leading-tight mb-1">{seg.type}</h3>
                  <p className="text-zinc-400 text-xs mb-2 italic">"{seg.pain}"</p>
                  <p className="text-zinc-200 text-xs leading-relaxed mb-3">{seg.promise}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {seg.programs.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 rounded-full bg-red-600/30 border border-red-600/40 text-red-400 text-[11px] font-semibold"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-green-400 text-xs font-semibold">{seg.stats}</span>
                  </div>

                  <a
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(seg.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-black text-sm transition-transform duration-300 hover:scale-[1.01]"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> {seg.ctaText} — Join Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile snap row */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {userSegments.map((seg, i) => (
              <motion.div
                key={seg.type}
                className="relative rounded-2xl overflow-hidden flex-shrink-0 border border-white/5 bg-zinc-900"
                style={{ width: 280, height: 420 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring" }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(232,0,14,0.3)" }}
              >
                <PowerFitImage
                  src={seg.imageSrc}
                  alt={seg.imageAlt}
                  sizes="280px"
                  priority={i < 2}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="text-3xl mb-2">{seg.emoji}</div>
                  <h3 className="text-white font-black text-lg leading-tight mb-1">{seg.type}</h3>
                  <p className="text-zinc-400 text-xs mb-2 italic">"{seg.pain}"</p>
                  <p className="text-zinc-200 text-xs leading-relaxed mb-3">{seg.promise}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {seg.programs.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 rounded-full bg-red-600/30 border border-red-600/40 text-red-400 text-[11px] font-semibold"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-green-400 text-xs font-semibold">{seg.stats}</span>
                  </div>

                  <a
                    href={`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(seg.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-black text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> {seg.ctaText} — Join Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

