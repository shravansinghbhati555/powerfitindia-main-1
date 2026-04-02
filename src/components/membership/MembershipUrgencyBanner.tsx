import { motion, useReducedMotion } from "framer-motion";

export default function MembershipUrgencyBanner() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-10 bg-red-600 overflow-hidden relative flex items-center z-60">
      <motion.div
        className="flex gap-8 whitespace-nowrap absolute left-0 top-0 h-10 items-center"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((di) => (
          <div key={di} className="flex items-center gap-8 pr-8">
            <span className="text-white text-xs font-black tracking-wider">🔥 LIMITED SLOTS</span>
            <span className="text-red-200 text-xs">·</span>
            <span className="text-white text-xs font-black">Jaipur batches filling fast</span>
            <span className="text-red-200 text-xs">·</span>
            <span className="text-white text-xs font-black">⚡ Join today</span>
            <span className="text-red-200 text-xs">·</span>
            <span className="text-white text-xs font-black">🏆 500+ members already transformed</span>
            <span className="text-red-200 text-xs">·</span>
            <span className="text-white text-xs font-black">💬 WhatsApp now: +91 86195 27263</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

