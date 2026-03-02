import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    institute: "Hi-Tech Institute Of Engineering & Technology",
    score: "69%",
    period: "Aug 2019 – Aug 2023",
  },
  {
    degree: "Higher Secondary (XII)",
    institute: "C.S.H.P. Public School",
    score: "71%",
    period: "Apr 2019",
  },
  {
    degree: "Secondary (X)",
    institute: "C.S.H.P. Public School",
    score: "74%",
    period: "Apr 2017",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-gradient-2" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            My Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ x: 6 }}
              className="bg-glass gradient-border rounded-xl p-6 flex items-start gap-4 hover:gold-glow transition-all duration-500"
            >
              <GraduationCap className="text-primary shrink-0 mt-1" size={24} />
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground text-sm font-body">{edu.institute}</p>
                <p className="text-muted-foreground text-xs font-body mt-1">{edu.period}</p>
              </div>
              <span className="text-primary font-display font-bold text-lg">{edu.score}</span>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-glass-warm gradient-border rounded-xl p-6 flex items-center gap-4 gold-glow"
        >
          <Award className="text-primary shrink-0" size={28} />
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Full Stack Developer Certification
            </h3>
            <p className="text-muted-foreground text-sm font-body">Ducat India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
