import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text text-sm text-primary mb-4 tracking-widest">Get Started</p>
            <h2 className="font-display text-5xl md:text-7xl gradient-text leading-none">
              Not Sure Yet? Try Us For Free
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mt-6 leading-relaxed max-w-md">
              Book a free trial session and experience what makes PowerFit India different. No commitment required.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Email Address", type: "email" },
              { name: "phone", placeholder: "Phone Number", type: "tel" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))}
                className="w-full bg-input text-foreground px-5 py-4 rounded-lg font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                style={{ boxShadow: "0 0 0 1px hsl(210,8%,20%)" }}
              />
            ))}
            <textarea
              placeholder="Your Message (optional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full bg-input text-foreground px-5 py-4 rounded-lg font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
              style={{ boxShadow: "0 0 0 1px hsl(210,8%,20%)" }}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full label-text text-sm font-bold shadow-lg"
            >
              Start My Fitness Journey
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 md:bottom-8 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: "hsl(142, 70%, 45%)" }}
      >
        <MessageCircle className="text-foreground" size={24} />
      </motion.a>
    </section>
  );
};

export default ContactSection;
