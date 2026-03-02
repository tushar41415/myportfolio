import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Briefcase, label: "Internships", value: "3+" },
    { icon: GraduationCap, label: "B.Tech", value: "69%" },
    { icon: MapPin, label: "Location", value: "Noida" },
  ];

  return (
    <section id="about" className="section-padding section-gradient-1" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            Get To Know
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-glass gradient-border rounded-xl p-6 text-center gold-glow"
            >
              <Icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {value}
              </h3>
              <p className="text-muted-foreground text-sm font-body">{label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto font-body text-base md:text-lg"
        >
          Aspiring Full Stack Developer with a solid foundation in HTML, CSS, JavaScript, 
          and hands-on experience in React.js for building interactive, responsive web 
          interfaces. Proficient in Git for version control and collaborative development. 
          Continuously expanding backend knowledge with Node.js, Express, and MongoDB, 
          aiming to deliver seamless end-to-end solutions. Known for a growth mindset, 
          quick learning ability, and a passion for building real-world applications.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
