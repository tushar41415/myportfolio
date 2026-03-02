import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Yiino (Live Project)",
    period: "2025 – 2026",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    desc: "I worked on this live multi-service platform at Cliffex Software Solutions Pvt Ltd, where I built and maintained the Admin Panel, Partner Panel, and Rider Panel. It included features like ride booking, food ordering, car rental, and package delivery.",
    link: "https://yiino.com",
  },
  {
    title: "Student Management System",
    period: "Feb 2025 – Mar 2025",
    tech: ["Node.js", "Express.js", "MongoDB", "Bootstrap"],
    desc: "Full-featured CRUD web application to manage student records with RESTful APIs for seamless data communication.",
    link: "https://student-management-system-pied.vercel.app/",
  },
  {
    title: "Mini Web Games",
    period: "June 2025",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    desc: "Multiple interactive browser-based games like Math Addition, Emoji Tap, Flip Card Memory, and Reflex Grid with smooth animations.",
    link: "https://mini-game-ashen.vercel.app/",
  },
  {
    title: "Weather Web App",
    period: "April 2025",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    desc: "Responsive weather app with real-time data from OpenWeatherMap API with city search functionality.",
    link: "http://weather-app-seven-beta-15.vercel.app/",
  },
  {
    title: "HKS World School Website",
    period: "2025",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    desc: "A complete school website with modern layout, responsive pages, and clear sections for academics, admissions, facilities, and updates.",
    link: "https://hks-world-school.vercel.app/",
  },
  {
    title: "Dr Derma Skin Care Clinic Website",
    period: "2025",
    tech: ["React", "JavaScript", "CSS3", "Vercel"],
    desc: "A clinic website built for online presence with service sections, clinic information, and a clean patient-friendly experience.",
    link: "https://gaurav-skin-clinic.vercel.app/",
  },
  {
    title: "Mad Muscles",
    period: "2025",
    tech: ["React", "JavaScript", "CSS3", "Vercel"],
    desc: "A fitness website that provides workout plans based on body composition, helping users choose plans according to their goals.",
    link: "https://mad-muscles.vercel.app/",
  },
  {
    title: "Kanban Web App",
    period: "2025",
    tech: ["React", "JavaScript", "State Management", "Vercel"],
    desc: "A task management board app with Kanban workflow for organizing work across different stages and improving productivity.",
    link: "https://kanban-app-sand.vercel.app/",
  },
  {
    title: "The Doctor Destination",
    period: "Jun 2023 – Aug 2023",
    tech: ["React", "CSS3", "JavaScript"],
    desc: "Responsive healthcare platform with real-time location tracking and availability features for booking appointments.",
  },
  {
    title: "Todo App",
    period: "Jun 2024 – Jul 2024",
    tech: ["React", "CSS3", "JavaScript"],
    desc: "Task management app with add, edit, and delete functionality built with React fundamentals.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding section-gradient-1" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">
            What I've Built
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-glass gradient-border rounded-xl p-6 group hover:gold-glow transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Code2 className="text-primary" size={28} />
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                    aria-label={`${project.title} link`}
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <ExternalLink className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-xs font-body mb-3">
                {project.period}
              </p>
              <p className="text-muted-foreground text-sm font-body mb-4 flex-1">
                {project.desc}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary text-xs font-body mb-4 inline-block hover:underline"
                >
                  {project.link.replace("https://", "")}
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-primary font-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
