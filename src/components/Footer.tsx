import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "@/config/site";

const socialLinks = [
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
] as const;

const Footer = () => (
  <footer className="section-dark border-t border-dark-foreground/10 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    >
      {/* Big brand text */}
      <div className="section-container py-16 md:py-24">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <span className="font-display text-4xl md:text-5xl">
              <span className="text-primary red-glow-text">POWER</span>
              <span className="text-dark-foreground">FIT</span>
            </span>
            <p className="font-body text-dark-muted text-sm mt-4 max-w-sm leading-relaxed">
              India's fastest-growing fitness empire. From premium gyms to home setups, 
              we build fitness ecosystems that transform lives.
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-dark-foreground/10 flex items-center justify-center text-dark-muted hover:text-primary hover:border-primary/50 transition-all social-bounce"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="label-text text-dark-muted mb-4">Quick Links</p>
            <div className="space-y-2.5">
              {[
                { label: "Franchise", to: "/franchise" },
                { label: "Gym Setup", to: "/gym-setup" },
                { label: "Membership", to: "/membership" },
                { label: "Programs", to: "/programs" },
                { label: "Our Gyms", to: "/gyms" },
                { label: "About", to: "/#about" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/#contact" },
              ].map((l) => (
                <Link key={l.label} to={l.to} className="block font-body text-sm text-dark-muted hover:text-dark-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="label-text text-dark-muted mb-4">Contact</p>
            <p className="font-body text-sm text-dark-muted">contact@powerfitindia.com</p>
            <p className="font-body text-sm text-dark-muted mt-1.5">+91 9116838715</p>
            <p className="font-body text-sm text-dark-muted mt-1.5">Rajasthan, India</p>

            <p className="label-text text-dark-muted mb-4 mt-8">Programs</p>
            <div className="space-y-2">
              {[
                { label: "Strength & Muscle", to: "/programs/strength" },
                { label: "Cardio & Endurance", to: "/programs/cardio" },
                { label: "Mind & Body", to: "/programs/mind-body" },
                { label: "Specialty", to: "/programs/specialty" },
              ].map((p) => (
                <Link key={p.to} to={p.to} className="block font-body text-sm text-dark-muted hover:text-dark-foreground transition-colors">
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10">
        <div className="section-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-dark-muted">
            © 2026 PowerFit India. All rights reserved. Train Hard. Stay Strong.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="font-body text-xs text-dark-muted hover:text-dark-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="font-body text-xs text-dark-muted hover:text-dark-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
