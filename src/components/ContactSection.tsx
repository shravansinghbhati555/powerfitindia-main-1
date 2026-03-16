import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-dark py-20 md:py-32 border-t border-dark-foreground/10">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text text-primary mb-4 tracking-[0.2em]">Get Started</p>
            <h2 className="font-display text-5xl md:text-7xl text-dark-foreground leading-[0.9]">
              Start Your
              <br />
              <span className="gradient-text">Fitness Journey</span>
            </h2>
            <p className="font-body text-dark-muted text-base md:text-lg mt-6 leading-relaxed max-w-md">
              Book a free trial session and experience what makes PowerFit India the best choice for your fitness goals.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Send, text: "hello@powerfitindia.com" },
                { icon: Phone, text: "+91 99999 99999" },
                { icon: MapPin, text: "Mumbai, India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-card border border-dark-foreground/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="font-body text-sm text-dark-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            className="bg-dark-card rounded-2xl p-8 md:p-10 border border-dark-foreground/10 space-y-4"
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
                className="w-full bg-dark text-dark-foreground px-5 py-4 rounded-xl font-body text-sm placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary/50 border border-dark-foreground/10 transition-shadow"
              />
            ))}
            <textarea
              placeholder="Your Message (optional)"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full bg-dark text-dark-foreground px-5 py-4 rounded-xl font-body text-sm placeholder:text-dark-muted focus:outline-none focus:ring-2 focus:ring-primary/50 border border-dark-foreground/10 transition-shadow resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full label-text font-bold shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
            >
              Get Started
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
        style={{ background: "#25D366" }}
      >
        <MessageCircle className="text-primary-foreground" size={24} />
      </motion.a>
    </section>
  );
};

export default ContactSection;
