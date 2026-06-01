import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, BrainCircuit } from 'lucide-react';
import CyberCard from '../components/CyberCard';

export default function About() {
  const stats = [
    { label: 'College CGPA', value: '7.78/10', sub: 'BE Computer Science' },
    { label: 'Hackathons Joined', value: '10+', sub: 'National & Global' },
    { label: 'Dual Internships', value: '2', sub: 'Full Stack & ERP' },
    { label: 'Global Ranking', value: '#4', sub: 'NASA Space Apps' },
  ];

  const coreFocus = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyber-primary" />,
      title: "Academic Background",
      desc: "Computer Science Engineering Graduate (2026 Passout) from KVG College of Engineering. Formulating solid grounds in software methodologies."
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyber-secondary" />,
      title: "Core Expertise & Passions",
      desc: "Deep knowledge in Java, SQL relational structures, and React.js ecosystem. Passionate about AI solutions, data security, and systemic problem-solving."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-cyber-accent" />,
      title: "Professional Focus",
      desc: "Dedicated to designing highly scalable Full Stack Web Applications, automation workflows, ERP modules, and interactive user interfaces."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-[30%] right-[0%] w-[350px] h-[350px] radial-glow-purple pointer-events-none z-0" />
      <div className="absolute bottom-[30%] left-[0%] w-[350px] h-[350px] radial-glow-cyan pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-16">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            01 // BIOGRAPHICAL DATA
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">ABOUT ME</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Stylized Cybernetic Avatar Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-[280px] h-[350px] glass-card p-2 rounded-2xl border-cyber-primary/25 border"
            >
              {/* Corner brackets */}
              <span className="absolute top-2 left-2 text-cyber-primary font-mono text-[9px]">[SYS_ACT]</span>
              <span className="absolute bottom-2 right-2 text-cyber-secondary font-mono text-[9px]">2026_CS</span>

              {/* Glowing decorative radar ring */}
              <div className="absolute inset-2 border border-dashed border-white/5 rounded-xl pointer-events-none" />

              {/* Profile Image with fallback */}
              <div className="w-full h-full bg-slate-950/60 rounded-xl overflow-hidden flex items-center justify-center relative">
                <img 
                  src="profile.jpg" 
                  alt="Abdul Hazeez"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback avatar */}
                <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-cyber-primary gap-2">
                  <BrainCircuit className="w-16 h-16 animate-bounce" />
                  <span className="font-mono text-xs font-bold tracking-widest">HAZEEZ_AVATAR</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio details */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold font-mono text-cyber-primary">
                &gt; SYSTEM USER: ABDUL HAZEEZ
              </h3>
              <p className="text-cyber-textMuted leading-relaxed text-[15px] font-medium">
                I am a highly motivated Computer Science Engineering student specialized in Java Full Stack development. 
                My focus lies in building reliable backend infrastructures paired with highly responsive, elegant user interfaces.
              </p>
              <p className="text-cyber-textMuted leading-relaxed text-[15px]">
                I operate at the intersection of robust backend principles (Java, Object-Oriented Design, Relational Databases) 
                and dynamic frontend technologies (React.js, Tailwind, animation engines). Whether it is creating brainwave-activated hardware 
                or secure financial software, I am dedicated to solving complex problems through clean architecture.
              </p>
            </div>

            {/* Tech details cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              {coreFocus.map((focus, idx) => (
                <CyberCard key={idx} glowColor={idx === 0 ? 'cyan' : idx === 1 ? 'purple' : 'pink'} className="!p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {focus.icon}
                    <h4 className="font-mono text-xs font-black uppercase text-cyber-text tracking-wide">
                      {focus.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-cyber-textMuted leading-relaxed">
                    {focus.desc}
                  </p>
                </CyberCard>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Counters Row (with Framer Motion triggers) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/5 relative z-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-4 glass-card rounded-xl border border-white/5 select-none"
            >
              <span className="text-3xl md:text-4xl font-extrabold font-mono bg-gradient-to-r from-cyber-primary to-cyber-accent -webkit-background-clip-text text-transparent bg-clip-text shadow-cyan-glow">
                {stat.value}
              </span>
              <span className="text-xs font-black font-mono text-cyber-text uppercase tracking-wider mt-2">
                {stat.label}
              </span>
              <span className="text-[9px] font-mono text-cyber-textMuted uppercase mt-1">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
