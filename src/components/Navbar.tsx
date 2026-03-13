import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CartDrawer } from "@/components/CartDrawer";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="font-display text-3xl md:text-4xl tracking-tight">
            <span className={scrolled ? "text-primary" : "text-primary"}>POWER</span>
            <span className={scrolled ? "text-foreground" : "text-dark-foreground"}>FIT</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`label-text transition-colors duration-200 hover:text-primary ${
                  scrolled ? "text-muted-foreground" : "text-dark-foreground/70 hover:text-dark-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/shop"
              className={`label-text transition-colors duration-200 hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-dark-foreground/70 hover:text-dark-foreground"
              }`}
            >
              Shop
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className={scrolled ? "text-foreground" : "text-dark-foreground"}>
              <CartDrawer />
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full label-text font-bold transition-shadow hover:shadow-lg hover:shadow-primary/25"
            >
              Join Now
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${scrolled ? "text-foreground" : "text-dark-foreground"}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/shop"
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl text-foreground hover:text-primary transition-colors"
              >
                Shop
              </Link>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.96 }}
                className="mt-4 inline-block text-center bg-primary text-primary-foreground px-8 py-4 rounded-full label-text font-bold"
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: scrolled ? 0 : 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/95 backdrop-blur-md border-t border-border"
      >
        <a
          href="#contact"
          className="block text-center bg-primary text-primary-foreground py-3 rounded-full label-text font-bold animate-pulse-glow"
        >
          Start Free Trial
        </a>
      </motion.div>
    </>
  );
};

export default Navbar;
