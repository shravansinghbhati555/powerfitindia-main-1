import { motion } from "framer-motion";

const Footer = () => (
  <footer className="section-dark border-t border-dark-foreground/10 py-12">
    <div className="section-container">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <span className="font-display text-3xl">
            <span className="text-primary">POWER</span>
            <span className="text-dark-foreground">FIT</span>
          </span>
          <p className="font-body text-dark-muted text-sm mt-3">
            Where strength meets discipline.
            <br />
            India's premium fitness brand.
          </p>
        </div>
        <div>
          <p className="label-text text-dark-muted mb-4">Quick Links</p>
          <div className="space-y-2.5">
            {["About", "Programs", "Trainers", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block font-body text-sm text-dark-muted hover:text-dark-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="label-text text-dark-muted mb-4">Contact</p>
          <p className="font-body text-sm text-dark-muted">hello@powerfitindia.com</p>
          <p className="font-body text-sm text-dark-muted mt-1.5">+91 99999 99999</p>
          <p className="font-body text-sm text-dark-muted mt-1.5">Mumbai, India</p>
        </div>
      </div>
      <div className="border-t border-dark-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-dark-muted">
          © 2026 PowerFit India. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-dark-muted hover:text-dark-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="font-body text-xs text-dark-muted hover:text-dark-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
