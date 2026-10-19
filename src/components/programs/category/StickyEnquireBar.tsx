import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhatsAppCTA from "@/components/programs/category/WhatsAppCTA";

export default function StickyEnquireBar({ whatsappText }: { whatsappText: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: scrolled ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950 border-t border-zinc-800 p-3 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
    >
      <a
        href="tel:+919116838715"
        className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white font-semibold rounded-xl py-3 text-sm min-h-[48px]"
      >
        📞 Call Now
      </a>
      <div className="flex-[1.25]">
        <WhatsAppCTA text="WhatsApp to Enquire" message={whatsappText} size="default" className="w-full px-4 py-3 text-sm rounded-xl" />
      </div>
    </motion.div>
  );
}

