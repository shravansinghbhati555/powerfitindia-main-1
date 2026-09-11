import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";
import { MostPopularBadge } from "@/components/ui/MostPopularBadge";
import BrandLogo from "@/components/BrandLogo";

const MotionLink = motion(Link);

const navLinks = [
  { label: "Franchise", to: "/franchise" },
  { label: "Gym Setup", to: "/gym-setup" },
  { label: "Membership", to: "/membership" },
  {
    label: "Programs",
    to: "/programs",
    mega: true,
    items: [
      { label: "Strength & Muscle", to: "/programs/strength" },
      { label: "Cardio & Endurance", to: "/programs/cardio" },
      { label: "Mind & Body", to: "/programs/mind-body" },
      { label: "Specialty", to: "/programs/specialty" },
      { label: "Online Coaching", to: "/programs/online" },
    ],
  },
  { label: "Our Gyms", to: "/gyms" },
  { label: "About", to: "/#about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/98 backdrop-blur-xl shadow-2xl shadow-dark/50 py-0"
            : "bg-transparent py-1"
        }`}
      >
        {/* Red sweep underline on scroll */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
        />

        <div className="section-container flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="relative z-10 flex items-center" aria-label="PowerFit India home">
            <BrandLogo priority className="h-10 md:h-12" />
          </Link>

          <div className="hidden lg:flex items-center gap-6" ref={megaRef}>
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.mega ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMegaOpen(megaOpen === link.label ? null : link.label);
                    }}
                    className="label-text text-dark-foreground/60 hover:text-dark-foreground transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${megaOpen === link.label ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="label-text text-dark-foreground/60 hover:text-dark-foreground transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
                  </Link>
                )}

                {/* Mega menu dropdown */}
                <AnimatePresence>
                  {link.mega && megaOpen === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-80 bg-dark-card border border-dark-foreground/10 rounded-xl overflow-hidden shadow-2xl shadow-dark/50"
                    >
                      {link.label === "Programs" && (
                        <div className="border-b border-zinc-800 pb-3 mb-1 px-2 pt-2">
                          <Link
                            to="/program/calisthenics"
                            onClick={() => setMegaOpen(null)}
                            className="flex items-center gap-3 px-3 py-3 rounded-xl transition-all hover:scale-[1.02] group"
                            style={{
                              background: "linear-gradient(135deg, rgba(234,179,8,0.15), rgba(232,0,14,0.1))",
                              border: "1px solid rgba(234,179,8,0.3)",
                            }}
                          >
                            <span className="text-2xl">🤸</span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-white font-black text-sm">Calisthenics</span>
                                <MostPopularBadge size="sm" animated={false} className="!py-0.5 !text-[10px]" />
                              </div>
                              <div className="text-zinc-500 text-xs">India&apos;s #1 bodyweight training program</div>
                            </div>
                            <span className="text-yellow-400 font-bold text-xs shrink-0">#1</span>
                          </Link>
                        </div>
                      )}
                      {link.items?.map((item, i) => (
                        <MotionLink
                          key={item.label}
                          to={item.to}
                          onClick={() => setMegaOpen(null)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.2 }}
                          className="block px-5 py-3 label-text text-dark-muted hover:text-dark-foreground hover:bg-primary/10 transition-all duration-200 border-b border-dark-foreground/5 last:border-0"
                        >
                          {item.label}
                        </MotionLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* <Link to="/shop" className="label-text text-dark-foreground/60 hover:text-dark-foreground transition-colors">
              Shop
            </Link>
            <div className="text-dark-foreground">
              <CartDrawer />
            </div> */}
            <MotionLink
              to="/membership"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full label-text font-bold transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Get Started
            </MotionLink>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-dark-foreground relative z-50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-40 bg-dark"
          >
            <div className="flex flex-col justify-center h-full px-8 py-24">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className="block font-display text-5xl text-dark-foreground hover:text-primary transition-colors py-2 border-b border-dark-foreground/5"
                    >
                      {link.label}
                      {link.mega && <span className="text-primary text-2xl ml-2">+</span>}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Link
                    to="/shop"
                    onClick={() => setMobileOpen(false)}
                    className="block font-display text-5xl text-dark-foreground hover:text-primary transition-colors py-2"
                  >
                    Shop
                  </Link>
                </motion.div>
              </div>
              <MotionLink
                to="/#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 inline-block text-center bg-primary text-primary-foreground px-8 py-4 rounded-full label-text font-bold red-pulse"
              >
                Start Your Journey
              </MotionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
