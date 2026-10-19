import { motion } from "framer-motion";
import { Check } from "lucide-react";

const columns = [
  {
    title: "Business Setup",
    items: [
      "Franchise Territory Rights (Exclusive)",
      "Brand License & Usage Rights",
      "Interior Design Consultation & Supervision",
      "Equipment Procurement Guidance & Vendor Access",
      "Gym Management Software License",
    ],
  },
  {
    title: "Training & Operations",
    items: [
      "7-Day Franchisee & Staff Training Program",
      "Complete Operations Manual (SOPs for every process)",
      "Trainer Certification Support",
      "Member Management System Setup",
    ],
  },
  {
    title: "Marketing & Growth",
    items: [
      "Grand Opening Marketing Campaign",
      "Social Media Launch Kit",
      "Local Digital Ad Playbook",
      "National Brand Campaigns (you benefit automatically)",
      "PowerFit App listing for your studio",
    ],
  },
  {
    title: "Ongoing Support",
    items: [
      "Dedicated Franchise Manager (Year 1)",
      "Quarterly Business Review Calls",
      "Access to PowerFit Franchise Owner Community",
      "Continuous Product & Training Updates",
    ],
  },
];

const WhatsIncluded = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl text-dark-foreground text-center mb-16"
      >
        Everything Included. <span className="text-primary">Nothing Hidden.</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {columns.map((col, ci) => (
          <div key={ci}>
            <h3 className="font-display text-xl text-dark-foreground mb-4">{col.title}</h3>
            <ul className="space-y-3">
              {col.items.map((item, ii) => (
                <motion.li
                  key={ii}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.1 + ii * 0.06 }}
                  className="flex items-start gap-3 font-body text-sm text-dark-muted"
                >
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="font-body text-sm text-primary italic text-center mt-12"
      >
        This isn't just a license. It's a fully loaded business system.
      </motion.p>
    </div>
  </section>
);

export default WhatsIncluded;
