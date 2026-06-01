import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import CyberCard from '../components/CyberCard';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science & Engineering",
      institution: "KVG College of Engineering",
      grade: "CGPA: 7.78 / 10",
      details: "Studying advanced data structures, OOP analysis, compiler design, software paradigms, and distributed database nodes.",
      color: "cyan"
    },
    {
      degree: "12th Science (Pre-University)",
      field: "PCMB (Physics, Chemistry, Math, Biology)",
      institution: "Science College Board",
      grade: "Score: 70%",
      details: "Acquired analytical thinking, algebraic metrics, mechanics, electrical foundations, and logical skills.",
      color: "purple"
    },
    {
      degree: "10th SSLC (Secondary Education)",
      field: "General Curriculum",
      institution: "SSLC Board Karnataka",
      grade: "Score: 68.9%",
      details: "Formulated initial scientific principles, base mathematics, linguistic skills, and social sciences.",
      color: "pink"
    }
  ];

  const certificationsList = [
    {
      title: "Java Full Stack Development",
      provider: "JSpiders Training Institute",
      desc: "Comprehensive engineering curriculum detailing Core Java principles, JDBC database integrations, SQL procedures, dynamic React.js interfaces, and responsive web portals.",
      credentialId: "JSP-JFS-2026-809"
    },
    {
      title: "Full Stack Web Development",
      provider: "Udemy Certified",
      desc: "Structured full stack curriculum covering frontend scripting languages (JavaScript ES6+, HTML5, CSS3), backend routers, RESTful patterns, database engines, and project hosting.",
      credentialId: "UDM-FSW-9742-10"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glowing spheres */}
      <div className="absolute top-[30%] left-[0%] w-[300px] h-[300px] radial-glow-purple pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[0%] w-[300px] h-[300px] radial-glow-cyan pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-16">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            06 // ACADEMIC & CERTIFICATION PATHWAYS
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">EDUCATION & TRAINING</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Dual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Grid: Education Chronology (8 columns on large screens) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2 font-mono text-cyber-primary text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-5 h-5 text-cyber-primary" />
              <span>&gt; ACADEMIC QUALIFICATIONS</span>
            </div>

            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <CyberCard glowColor={edu.color} className="!p-5 relative select-none">
                  {/* Decorative numeric stamp */}
                  <span className="absolute top-3 right-4 font-mono text-[9px] text-cyber-textMuted font-bold">
                    [EDU_RECORD_0{idx + 1}]
                  </span>

                  <h3 className="text-lg font-bold font-mono text-cyber-text">
                    {edu.degree}
                  </h3>
                  <h4 className="font-mono text-xs text-cyber-primary font-bold uppercase mt-1">
                    {edu.field}
                  </h4>
                  <div className="flex justify-between items-center mt-2 pb-3 border-b border-white/5 font-mono text-[10px] text-cyber-textMuted">
                    <span>{edu.institution}</span>
                    <span className="text-cyber-accent font-black uppercase tracking-wide">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-[12px] text-cyber-textMuted leading-relaxed mt-3">
                    {edu.details}
                  </p>
                </CyberCard>
              </motion.div>
            ))}
          </div>

          {/* Right Grid: Certifications (6 columns on large screens) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2 font-mono text-cyber-secondary text-xs font-bold uppercase tracking-wider">
              <Award className="w-5 h-5 text-cyber-secondary" />
              <span>&gt; TECHNICAL CREDENTIALS</span>
            </div>

            {certificationsList.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <CyberCard glowColor={idx === 0 ? 'purple' : 'pink'} className="!p-5 relative select-none">
                  <span className="absolute top-3 right-4 font-mono text-[9px] text-cyber-textMuted font-bold">
                    [CERT_VALID_ID]
                  </span>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold font-mono text-cyber-text">
                        {cert.title}
                      </h3>
                      <h4 className="font-mono text-xs text-cyber-secondary font-black uppercase mt-1">
                        {cert.provider}
                      </h4>
                      <p className="text-[12px] text-cyber-textMuted leading-relaxed mt-3 mb-4">
                        {cert.desc}
                      </p>

                      {/* License ID */}
                      <span className="bg-slate-950/60 border border-white/5 font-mono text-[9px] text-cyber-textMuted px-2.5 py-1 rounded">
                        LIC_ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
