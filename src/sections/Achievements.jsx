import { motion } from 'framer-motion';
import { Award, Globe, Rocket, Landmark } from 'lucide-react';
import CyberCard from '../components/CyberCard';

export default function Achievements() {
  const achievements = [
    {
      title: "NASA Space Apps Challenge",
      value: "4th Place Globally",
      icon: <Rocket className="w-6 h-6 text-cyber-primary" />,
      desc: "Secured 4th place globally in the prestigious NASA Space Apps Challenge. Collaborated within an agile engineering squad to design space technology prototypes and parse astrophysical data parameters.",
      color: "cyan"
    },
    {
      title: "Active Hackathon Competitor",
      value: "10+ Hackathons",
      icon: <Globe className="w-6 h-6 text-cyber-secondary" />,
      desc: "Competed in over 10 national and global hackathons. Engineered high-fidelity mockups, real-time IoT setups, and cognitive AI systems in fast-paced 24-48 hour intervals.",
      color: "purple"
    },
    {
      title: "Dual Core Internships",
      value: "Dual Internships",
      icon: <Award className="w-6 h-6 text-cyber-accent" />,
      desc: "Simultaneously balanced dual core internships specializing in Java Full Stack Development (JSpiders) and Odoo ERP systems customization. Proven capability in multi-tasking across environments.",
      color: "pink"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-[20%] right-[0%] w-[350px] h-[350px] radial-glow-cyan pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[0%] w-[350px] h-[350px] radial-glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-16">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            05 // HONORARY MILESTONES
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">ACHIEVEMENTS</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Achievements Cards (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <CyberCard 
                glowColor={ach.color} 
                className="h-full flex flex-col justify-between p-6 select-none"
              >
                <div>
                  {/* Icon & Milestone Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                      {ach.icon}
                    </div>
                    <span className="font-mono text-[9px] text-cyber-textMuted uppercase font-bold">
                      MILESTONE_0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Value */}
                  <h3 className="text-xl font-bold font-mono text-cyber-text mb-1">
                    {ach.title}
                  </h3>
                  <div className="font-mono text-[14px] text-cyber-primary font-black uppercase tracking-wide mb-4">
                    &gt; {ach.value}
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-cyber-textMuted leading-relaxed">
                    {ach.desc}
                  </p>
                </div>

                {/* Sub decorative tech line */}
                <div className="w-full h-[1px] bg-white/5 mt-6 pt-4 flex justify-between items-center text-[9px] font-mono text-cyber-textMuted">
                  <span>SYSTEM STATUS: VERIFIED</span>
                  <span>NODE_0{idx * 13}</span>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
