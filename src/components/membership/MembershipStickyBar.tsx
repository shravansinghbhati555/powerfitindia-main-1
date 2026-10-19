import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WA_PHONE = "919116838715";

export default function MembershipStickyBar() {
  const [showTop, setShowTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const waMsg = encodeURIComponent(
    "Hi! I want to join PowerFit. Please share membership details."
  );

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY || 0;
      setScrollY(y);
      setShowTop(y > window.innerHeight - 120);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const topOffsetPx =  56; // urgency(40) + navbar height(56)

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
        style={{ top: topOffsetPx, height: 56 }}
        animate={{ y: showTop ? 0 : -140 }}
        transition={{ duration: 0.25 }}
      >
        <div className="h-full flex items-center justify-between px-6 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-red-400 text-xs font-black animate-pulse">
              🔥 LIMITED SLOTS
            </span>
            <span className="text-white font-bold hidden sm:block">
              PowerFit Membership — Free Trial Available
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex text-sm font-bold text-zinc-400 hover:text-white transition-colors"
            >
              View Plans
            </a>
            <a
              href={`https://wa.me/${WA_PHONE}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white font-black text-sm hover:scale-[1.02] transition-all"
            >
              <span aria-hidden="true">💬</span>
              <span className="hidden sm:inline">WhatsApp to Join</span>
              <span className="sm:hidden">Join</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* Bottom sticky bar - mobile */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950 border-t border-zinc-800 p-3 flex gap-2"
        initial={{ y: 100 }}
        animate={{ y: scrollY > 300 ? 0 : 100 }}
        transition={{ duration: 0.25 }}
      >
        <a
          href="tel:+919116838715"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-zinc-800 text-white font-semibold rounded-xl py-3 text-sm"
        >
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${WA_PHONE}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 px-4 bg-[#25D366] text-white font-black rounded-xl py-3 text-sm hover:bg-[#20BA5C] transition-colors"
        >
          💬 WhatsApp to Join
        </a>
      </motion.div>
    </>
  );
}

