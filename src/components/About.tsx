import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
          I’m Aditya, a CS undergrad at VIT, passionate about building useful tools with AI, logic, and clean design. From hackathons with 600+ devs to tools for YouTubers, I bring a builder mindset and love solving real-world stuff.
        </p>
      </div>
    </motion.section>
  );
};
