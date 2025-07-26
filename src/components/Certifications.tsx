import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { name: "IBM GenAI using Watsonx", date: "Jun 2025", color: "primary" },
  { name: "Oracle OCI Gen AI Professional", date: "Jul 2025", color: "accent" },
  { name: "AWS Cloud Practitioner Essentials", date: "Jul 2025", color: "secondary" },
  { name: "Coursera Supervised Machine Learning", date: "Mar 2025", color: "primary" },
];

const cardVariants = {
  offscreen: { x: -50, opacity: 0 },
  onscreen: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
      delay: i * 0.15,
    },
  }),
};

export const Certifications = () => {
  return (
    <section id="certifications">
      <div className="text-center">
        <h2 className="section-heading">Certifications & Credentials</h2>
        <p className="section-subheading">My commitment to continuous learning and professional development.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
          >
            <Award className={`h-8 w-8 flex-shrink-0 text-${cert.color}`} />
            <div>
              <h3 className="font-semibold text-foreground">{cert.name}</h3>
              <p className="text-sm text-gray-400">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
