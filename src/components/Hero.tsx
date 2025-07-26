import { motion } from "framer-motion";
import { Github, Linkedin, FileDown, BrainCircuit, Code, Database } from "lucide-react";
import { cn } from "../lib/utils";

const socialLinks = [
  { icon: Github, href: "https://github.com/ProDeveloperAditya" },
  { icon: Linkedin, href: "https://linkedin.com/in/aditya-raj-developer" },
];

const floatingIcons = [
  { icon: BrainCircuit, className: "top-1/4 left-1/4 w-12 h-12 text-primary" },
  { icon: Code, className: "top-1/2 right-1/4 w-16 h-16 text-secondary" },
  { icon: Database, className: "bottom-1/4 left-1/3 w-10 h-10 text-accent" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 -z-10">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={cn("absolute opacity-10", item.className)}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <item.icon />
          </motion.div>
        ))}
      </div>
      
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-20 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute inset-0 -z-30 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>


      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Aditya Raj
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Engineering ideas into real tools. GenAI, backend, and impact-focused builds.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Aditya_Raj_Resume.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-primary-glow"
            >
              <FileDown className="h-5 w-5" />
              Download Resume
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border text-gray-300 transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-primary-glow"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
