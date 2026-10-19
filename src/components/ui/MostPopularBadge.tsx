import { motion } from "framer-motion";

interface MostPopularBadgeProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const sizes = {
  sm: "px-2.5 py-1 text-xs gap-1.5",
  md: "px-4 py-1.5 text-sm gap-2",
  lg: "px-5 py-2 text-base gap-2.5",
} as const;

export const MostPopularBadge = ({
  size = "md",
  animated = true,
  className = "",
}: MostPopularBadgeProps) => {
  return (
    <motion.div
      animate={
        animated
          ? {
              boxShadow: [
                "0 0 0px rgba(255, 180, 0, 0)",
                "0 0 20px rgba(255, 180, 0, 0.6)",
                "0 0 40px rgba(255, 180, 0, 0.3)",
                "0 0 0px rgba(255, 180, 0, 0)",
              ],
            }
          : undefined
      }
      transition={{ duration: 2.5, repeat: animated ? Infinity : 0, ease: "easeInOut" }}
      className={`inline-flex items-center font-black rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black shadow-lg ${sizes[size]} ${className}`}
    >
      <motion.span
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 3, repeat: animated ? Infinity : 0, ease: "linear" }}
        className="inline-block"
      >
        ⭐
      </motion.span>
      MOST POPULAR
      <motion.span
        animate={animated ? { rotate: -360 } : undefined}
        transition={{ duration: 3, repeat: animated ? Infinity : 0, ease: "linear" }}
        className="inline-block"
      >
        ⭐
      </motion.span>
    </motion.div>
  );
};

export const MostPopularRibbon = () => (
  <div className="absolute top-0 right-0 z-20 overflow-hidden w-24 h-24 pointer-events-none">
    <motion.div
      animate={{
        boxShadow: [
          "0 0 10px rgba(255,180,0,0.4)",
          "0 0 25px rgba(255,180,0,0.8)",
          "0 0 10px rgba(255,180,0,0.4)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-4 right-[-24px] w-32 py-1.5 text-center text-xs font-black text-black bg-gradient-to-r from-yellow-400 to-orange-400 rotate-45 shadow-lg"
    >
      🔥 #1 PICK
    </motion.div>
  </div>
);

export const MostPopularCrown = ({ compact = false }: { compact?: boolean }) => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: [0, -4, 0], opacity: 1 }}
    transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.3 } }}
    className={`absolute ${compact ? "-top-4 left-3" : "-top-5 left-4"} z-20`}
  >
    <div
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-black bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black shadow-[0_0_20px_rgba(255,180,0,0.5)] ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      👑 MOST POPULAR
    </div>
  </motion.div>
);
