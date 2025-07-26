import { motion } from "framer-motion";
import { Users, Target, Trophy, Puzzle } from "lucide-react";

const leadershipRoles = [
  {
    icon: Users,
    title: "Senior Core, IEEE-CS",
    description: "Led social media for 5+ chapter events, boosting engagement and increasing reach by 60%.",
  },
  {
    icon: Target,
    title: "Senior Core, TAG",
    description: "Led a FIFA tournament with 200+ participant in University wide event.",
  },
  {
    icon: Trophy,
    title: "Hackathon Organizer",
    description: "Managed a 36-hour hackathon with 600+ participants and 5 sponsors.",
  },
  {
    icon: Puzzle,
    title: "Cryptic Hunt Organizer",
    description: "Orgainized a university-wide cryptic hunt event, coordinating over 150+ particpants with self made questions to be solved by the participants.",
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

export const Leadership = () => {
  return (
    <section id="leadership">
      <div className="text-center">
        <h2 className="section-heading">Leadership & Initiatives</h2>
        <p className="section-subheading">Beyond the code, I focus on community, collaboration, and impact.</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {leadershipRoles.map((role, i) => (
          <motion.div
            key={role.title}
            custom={i}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            className="flex gap-6 rounded-lg border border-border bg-card p-6"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
              <role.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{role.title}</h3>
              <p className="mt-2 text-gray-400">{role.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
