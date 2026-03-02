import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "REST APIs", "Responsive Design"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding section-gradient-2" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            What I Know
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            My Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="bg-glass gradient-border rounded-xl p-8 gold-glow"
            >
              <h3 className="font-display text-xl font-semibold text-primary mb-6">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.15 + si * 0.08 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 rounded-full border border-border text-sm font-body text-secondary-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
