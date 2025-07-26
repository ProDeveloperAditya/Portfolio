import { motion } from "framer-motion";
import { Mail, FileDown } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subheading">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:adityarajloyola@gmail.com"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-md bg-secondary px-6 py-3 font-semibold text-background transition-all duration-300 hover:shadow-secondary-glow"
          >
            <Mail className="h-5 w-5" />
            Contact Me
          </a>
          <a
            href="/Aditya_Raj_Resume.pdf"
            download
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 overflow-hidden rounded-md border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <FileDown className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};
