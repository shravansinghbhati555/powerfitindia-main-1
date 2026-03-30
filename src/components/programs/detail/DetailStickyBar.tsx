import { useEffect, useState } from "react";
import type { Program } from "@/data/programs";
import type { CategoryTheme } from "@/config/categoryThemes";

interface Props { program: Program; theme: CategoryTheme }

export default function DetailStickyBar({ program, theme }: Props) {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const waMsg = encodeURIComponent(`Hi PowerFit! I want to join ${program.name}. Please share details.`);

  useEffect(() => {
    const handle = () => {
      setShowTop(window.scrollY > window.innerHeight);
      setShowBottom(window.scrollY > 300);
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      {/* Top sticky bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showTop ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="section-container flex items-center justify-between h-14">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-white font-bold">{program.name}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-400">{program.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="tel:+918619527263" className="hidden sm:inline-flex items-center gap-1 text-zinc-400 hover:text-white text-sm transition-colors">
              📞 +91 86195 27263
            </a>
            <a href={`https://wa.me/918619527263?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-colors">
              💬 Join Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom sticky bar - mobile */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${showBottom ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex gap-2 p-3">
          <a href="tel:+918619527263" className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-zinc-800 text-white font-bold text-sm">
            📞 Call
          </a>
          <a href={`https://wa.me/918619527263?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            className="flex-[2] inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm transition-colors">
            💬 WhatsApp to Join
          </a>
        </div>
      </div>
    </>
  );
}
