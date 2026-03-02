import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "8860491830", href: "tel:8860491830" },
    { icon: Mail, label: "Email", value: "Tusharsharma4141@gmail.com", href: "mailto:Tusharsharma4141@gmail.com" },
    { icon: MapPin, label: "Location", value: "Noida, India", href: "#" },
  ];

  return (
    <section id="contact" className="section-padding section-gradient-3" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            Contact Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-glass gradient-border rounded-xl p-6 text-center hover:gold-glow transition-all duration-500 block"
            >
              <Icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-display text-base font-semibold text-foreground mb-1">
                {label}
              </h3>
              <p className="text-muted-foreground text-sm font-body break-all">{value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/tushar41415", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/tushar-sharma-759a14233/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:Tusharsharma4141@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:gold-glow transition-all duration-300"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground text-sm font-body">
          © 2025 Tushar Sharma. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
