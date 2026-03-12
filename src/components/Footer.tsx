const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="section-container">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <span className="font-display text-2xl font-bold">
            <span className="gradient-text">POWER</span>
            <span className="text-foreground">FIT</span>
          </span>
          <p className="font-body text-muted-foreground text-sm mt-3">
            Where strength meets discipline.
          </p>
        </div>
        <div>
          <p className="label-text text-xs text-muted-foreground mb-3">Quick Links</p>
          <div className="space-y-2">
            {["About", "Programs", "Trainers", "Gallery", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="label-text text-xs text-muted-foreground mb-3">Contact</p>
          <p className="font-body text-sm text-muted-foreground">hello@powerfitindia.com</p>
          <p className="font-body text-sm text-muted-foreground mt-1">+91 99999 99999</p>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 PowerFit India. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
