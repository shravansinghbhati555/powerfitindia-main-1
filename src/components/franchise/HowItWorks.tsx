import { motion } from "framer-motion";
import { Send, Phone, FileText, MapPin, Handshake, Hammer, Users, PartyPopper } from "lucide-react";

const steps = [
  { icon: Send, num: "01", title: "Submit Enquiry", desc: "Fill the form below. Takes 2 minutes." },
  { icon: Phone, num: "02", title: "Discovery Call", desc: "Our franchise expert calls you within 48 hours to understand your goals and city." },
  { icon: FileText, num: "03", title: "Receive Detailed Proposal", desc: "Custom financial projection, territory analysis, and franchise agreement overview." },
  { icon: MapPin, num: "04", title: "Site Selection Support", desc: "We help you identify and evaluate the best location in your city." },
  { icon: Handshake, num: "05", title: "Agreement & Onboarding", desc: "Sign the franchise agreement. Pay the franchise fee. You're officially a PowerFit owner." },
  { icon: Hammer, num: "06", title: "Setup & Build-Out", desc: "Our team oversees interior design, equipment installation, and tech setup — 45–60 days." },
  { icon: Users, num: "07", title: "Staff Hiring & Training", desc: "We run a 7-day intensive training for your trainers and managers." },
  { icon: PartyPopper, num: "08", title: "Grand Opening", desc: "Launch with our marketing support. First members walk in. Revenue begins." },
];

const HowItWorks = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-4"
      >
        From Interest to Opening Day — <span className="text-primary">In 8 Steps</span>
      </motion.h2>
      <p className="font-body text-dark-muted text-center mb-16 max-w-lg mx-auto">Your journey from investor to owner.</p>

      <div className="max-w-2xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-start gap-6 pb-10"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                className="absolute left-[27px] top-[56px] w-[2px] bg-primary/30"
                style={{ height: "calc(100% - 40px)", transformOrigin: "top" }}
              />
            )}

            {/* Number circle */}
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-primary/40 flex items-center justify-center" style={{ backgroundColor: "#111111" }}>
                <span className="font-display text-xl text-primary">{s.num}</span>
              </div>
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>

            {/* Content */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-1">
                <s.icon className="w-4 h-4 text-primary" />
                <h3 className="font-display text-lg text-dark-foreground">{s.title}</h3>
              </div>
              <p className="font-body text-sm text-dark-muted leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
