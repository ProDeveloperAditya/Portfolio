import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    title: "Content Creator Toolkit",
    description: "Gen AI-powered app for YouTube creators. Generates titles, descriptions, and motivational content using OpenRouter APIs.",
    tags: ["Python", "Streamlit", "OpenRouter", "GenAI"],
    liveUrl: "https://content-creator-genai.streamlit.app/",
    githubUrl: "https://github.com/ProDeveloperAditya/content-creator-toolkit-safe.git",
    tagClasses: "bg-secondary/10 text-secondary",
    glowColor: "from-secondary/30 to-background",
  },
  {
    title: "Search Me! – Custom Search Engine",
    description: "Built a lightweight search engine with map/image/web support and optimized DOM rendering.",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3"],
    liveUrl: "#",
    githubUrl: "https://github.com/ProDeveloperAditya",
    tagClasses: "bg-accent/10 text-accent",
    glowColor: "from-accent/30 to-background",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  },
};

const contentVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const Projects = () => {
  return (
    <section id="projects">
      <div className="text-center">
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">A glimpse into my passion for building and problem-solving.</p>
      </div>
      <motion.div 
        className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
      >
        {projects.map((project) => (
          <Tilt key={project.title} tiltMaxAngleX={3} tiltMaxAngleY={3} perspective={1000}>
            <motion.div
              variants={cardVariants}
              className="group relative flex h-full min-h-[400px] flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary"
            >
              {/* Animated Glow Background */}
              <div className={cn(
                "absolute -inset-4 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-[size:200%_200%]",
                project.glowColor
              )}
              style={{ animation: `aurora-bg 10s ease-in-out infinite alternate` }}
              />

              <motion.div 
                className="flex flex-1 flex-col"
                variants={contentVariants}
              >
                <motion.h3 variants={itemVariants} className="font-heading text-2xl font-bold text-foreground">{project.title}</motion.h3>
                <motion.p variants={itemVariants} className="mt-4 flex-1 text-gray-300">{project.description}</motion.p>
                <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={cn(
                        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                        project.tagClasses
                    )}>
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-6 flex items-center gap-6"
                variants={itemVariants}
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-secondary">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 transition-colors hover:text-accent">
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </motion.div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>
    </section>
  );
};
