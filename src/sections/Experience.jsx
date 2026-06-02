import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import CyberCard from '../components/CyberCard';

export default function Experience() {
  const internships = [
    {
      role: "Java Full Stack Development Intern",
      company: "JSpiders Training Institute",
      period: "Internship Term",
      highlights: [
        "Constructed complete enterprise web frameworks leveraging Core Java, OOP principles, and MVC architectures",
        "Formulated relational databases using MySQL with advanced SQL query joins, JDBC links, and table locks",
        "Engineered single page applications utilizing React.js, component flows, and styling frameworks",
        "Built responsive full-stack portals integrating secure client REST routes and database connections"
      ],
      tech: ["Core Java", "SQL", "React.js", "JDBC", "HTML5", "CSS3", "JavaScript"],
      color: "cyan"
    },
    {
      role: "PHP Full Stack Developer Intern",
      company: "Software Development Firm",
      period: "Internship Term",
      highlights: [
        "Developed structured content management backends in PHP with secure server-side logic",
        "Designed schema integrations using MySQL to enable fast user queries and session logging",
        "Styled highly responsive client interfaces using HTML5 and CSS3 Grid layouts",
        "Optimized website load speeds and streamlined server-side scripting runtimes"
      ],
      tech: ["PHP", "HTML5", "CSS3", "MySQL", "Apache"],
      color: "purple"
    },
    {
      role: "Odoo ERP Intern",
      company: "Enterprise Integration Agency",
      period: "Internship Term",
      highlights: [
        "Customized python-based Odoo modular schemas for corporate logistics management",
        "Automated administrative database workflows to improve team operations",
        "Created custom client PDF report parsers and dashboard statistics views",
        "Formulated workflow triggers to synchronize transaction entries automatically"
      ],
      tech: ["Odoo ERP", "Python", "PostgreSQL", "Workflow Automation"],
      color: "pink"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-[30%] left-[0%] w-[350px] h-[350px] radial-glow-cyan pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[0%] w-[350px] h-[350px] radial-glow-purple pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-16">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            04 // PROFESSIONAL RECORD
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">EXPERIENCE</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 flex flex-col gap-12 text-left">
          {/* Neon Cable Line */}
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-cyber-primary via-cyber-secondary to-cyber-accent shadow-[0_0_8px_#00f0ff]" />

          {internships.map((intern, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Pulsing Cable Node Node */}
              <div 
                className={`absolute left-[-31px] md:left-[-45px] top-4 w-4 h-4 rounded-full border border-cyber-bg z-20 flex items-center justify-center ${
                  intern.color === 'cyan' 
                    ? 'bg-cyber-primary shadow-[0_0_8px_#00f0ff]' 
                    : intern.color === 'purple' 
                      ? 'bg-cyber-secondary shadow-[0_0_8px_#9d4edd]' 
                      : 'bg-cyber-accent shadow-[0_0_8px_#ec4899]'
                }`}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>

              {/* Experience Info Card */}
              <CyberCard glowColor={intern.color} className="!p-6 select-none">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-cyber-text group-hover:text-cyber-primary">
                      {intern.role}
                    </h3>
                    <h4 className="font-mono text-xs text-cyber-primary font-black uppercase mt-1">
                      {intern.company}
                    </h4>
                  </div>

                  {/* Calendar Duration */}
                  <div className="flex items-center gap-1.5 text-cyber-textMuted font-mono text-[10px] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{intern.period}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <ul className="flex flex-col gap-2.5 pl-1 mb-6 font-medium text-[13px] text-cyber-textMuted leading-relaxed">
                  {intern.highlights.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-2 text-left">
                      <ChevronRight className="w-4 h-4 text-cyber-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Core Technologies Acquired */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {intern.tech.map((t) => (
                    <span 
                      key={t}
                      className="bg-slate-950/60 border border-white/5 text-cyber-primary font-mono text-[9px] px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
