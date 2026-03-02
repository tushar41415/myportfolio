import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Speqto Technologies Pvt. Ltd.",
    role: "Associate Software Developer",
    period: "Jan 2026 – Present",
    points: [],
  },
  {
    company: "Cliffex Software Consulting Pvt. Ltd.",
    role: "Software Developer Trainee",
    period: "July 2025 – Jan 2026",
    points: [],
  },
  {
    company: "Cliffex Software Consulting Pvt. Ltd.",
    role: "Software Developer Intern",
    period: "April 2025 – July 2025",
    points: [
      "Designed, developed, and maintained web applications using MERN stack.",
      "Implemented responsive UI with HTML, CSS, Bootstrap, and React.",
      "Integrated RESTful APIs for seamless data flow.",
      "Conducted bug fixing and troubleshooting for smooth performance.",
    ],
  },
  {
    company: "Xotiv Technology",
    role: "Web Developer Intern",
    period: "Feb 2023 – Mar 2023",
    points: [
      "Acquired knowledge of HTML, CSS, and JavaScript.",
      "Developed user interfaces utilizing React fundamentals.",
    ],
  },
  {
    company: "The Virtual Shop",
    role: "Intern",
    period: "Jul 2022 – Jan 2023",
    points: [
      "Developed efficient code and created user interfaces using HTML, CSS, and JavaScript.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding section-gradient-3" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            My Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{background: 'linear-gradient(180deg, hsla(40,80%,55%,0.4), hsla(300,50%,50%,0.3), hsla(220,60%,50%,0.3), hsla(40,80%,55%,0.2))'}} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex mb-12 ${
                i % 2 === 0
                  ? "md:justify-start md:pr-[52%]"
                  : "md:justify-end md:pl-[52%]"
              } pl-12 md:pl-0`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 top-2 gold-glow" />

              <div className="bg-glass-warm gradient-border rounded-xl p-6 w-full hover:gold-glow transition-shadow duration-500">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Building2 size={16} />
                  <span className="font-body text-sm font-semibold">{exp.company}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
                  <Calendar size={12} />
                  <span className="font-body">{exp.period}</span>
                </div>
                {exp.points.length > 0 && (
                  <ul className="space-y-2">
                    {exp.points.map((point, pi) => (
                      <li
                        key={pi}
                        className="text-muted-foreground text-sm font-body flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
