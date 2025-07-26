import { motion } from "framer-motion";
import { Code, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "C++", "Java", "C", "R", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: ["React.js", "Flask", "Streamlit", "Microsoft Fabric", "Git", "Notion"],
  },
  {
    title: "Concepts",
    icon: Cpu,
    skills: ["DSA", "OOPs", "DBMS", "OS", "Computer Networks", "Regression", "Classification", "Anomaly Detection"],
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1,
    },
  }),
};

export const Skills = () => {
  return (
    <section id="skills">
      <div className="text-center">
        <h2 className="section-heading">My Toolkit</h2>
        <p className="section-subheading">The technologies and concepts I use to bring ideas to life.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            className="group rounded-lg border border-border bg-card p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-primary-glow"
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="flex items-center gap-4">
              <category.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-secondary" />
              <h3 className="font-heading text-xl font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
