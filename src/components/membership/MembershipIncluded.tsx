import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Pexels — free stock video (Pexels License). Gym / training floor. */
const INCLUDED_VIDEO_SRC =
  "https://videos.pexels.com/video-files/3191574/3191574-hd_1920_1080_25fps.mp4";
/** Unsplash — poster + fallback feel */
const INCLUDED_POSTER =
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80";

const includedFeatures = [
  { icon: "🏋️", title: "Access to All Studios", desc: "Train at any PowerFit location in Jaipur or Sikar — same membership, all 5 studios." },
  { icon: "🎓", title: "Certified Trainer Guidance", desc: "Real coaches who correct your form, track your progress, and push you past plateaus." },
  { icon: "📊", title: "InBody Body Composition Scan", desc: "Monthly scan showing muscle mass, fat %, visceral fat — not just a weighing scale." },
  { icon: "🥗", title: "Nutrition Coaching (Elite+)", desc: "Certified nutritionist creates your Indian meal plan. Not generic advice — your plan." },
  { icon: "📱", title: "Program Tracking App", desc: "Log workouts, track progress, access your program from anywhere." },
  { icon: "💬", title: "WhatsApp Coach Access", desc: "Direct line to your trainer for questions, form checks, and motivation anytime." },
  { icon: "🤸", title: "13+ Fitness Programs", desc: "Yoga, HIIT, CrossFit, Calisthenics, Zumba, Strength Training, and more — unlimited access." },
  { icon: "🎯", title: "Monthly Goal Reviews", desc: "Sit down with your trainer monthly. Review progress. Reset targets. Stay on track." },
  { icon: "🔥", title: "Outdoor Fitness Bootcamps", desc: "Monthly outdoor bootcamp events — free for all members. Fresh air, community, results." },
  { icon: "💆", title: "Steam & Recovery (Elite+)", desc: "Post-workout steam room access at select studios for recovery and relaxation." },
];

export default function MembershipIncluded() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section className="py-16 md:py-24" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[var(--content-max-width)] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <motion.h2
              className="text-4xl font-black text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Every Membership Includes
            </motion.h2>
            <p className="text-zinc-400 mb-10 max-w-xl">
              Your membership is a complete fitness ecosystem — not just a gym pass.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition-colors border border-white/5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center text-xl flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm mb-0.5">{feat.title}</div>
                    <div className="text-zinc-500 text-xs leading-relaxed">{feat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-full min-h-[360px]" style={{ background: "#0F0F0F" }}>
            <video
              ref={videoRef}
              autoPlay={!reduce}
              muted
              loop
              playsInline
              preload="metadata"
              poster={INCLUDED_POSTER}
              className="w-full h-full object-cover opacity-90 min-h-[360px]"
            >
              <source src={INCLUDED_VIDEO_SRC} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            {/* Floating stat cards */}
            {[
              { val: "13+", label: "Programs", pos: "top-4 left-4" },
              { val: "5", label: "Studios", pos: "top-4 right-4" },
              { val: "500+", label: "Members", pos: "bottom-4 left-4" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                className={`absolute ${card.pos} bg-black/70 backdrop-blur-sm rounded-xl px-4 py-3 text-center border border-white/10`}
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 2 + i, repeat: Infinity, delay: i * 0.35 }}
              >
                <div className="text-red-400 font-black text-2xl">{card.val}</div>
                <div className="text-zinc-400 text-[11px]">{card.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

