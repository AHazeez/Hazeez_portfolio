import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, LayoutTemplate, Database, Terminal, Wrench } from 'lucide-react';
import CyberCard from '../components/CyberCard';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Fields', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'programming', label: 'Programming', icon: <Code2 className="w-3.5 h-3.5" /> },
    { id: 'frontend', label: 'Frontend', icon: <LayoutTemplate className="w-3.5 h-3.5" /> },
    { id: 'backend-db', label: 'Backend & DB', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'tools', label: 'Tools & IDEs', icon: <Wrench className="w-3.5 h-3.5" /> },
  ];

  const skillData = [
    // Programming
    { name: 'Java Core & OOP', level: 90, category: 'programming', icon: '☕' },
    { name: 'SQL Querying', level: 85, category: 'programming', icon: '📊' },
    
    // Frontend
    { name: 'React.js', level: 85, category: 'frontend', icon: '⚛️' },
    { name: 'JavaScript ES6+', level: 80, category: 'frontend', icon: '💛' },
    { name: 'HTML5 & Semantic Markup', level: 95, category: 'frontend', icon: '🌐' },
    { name: 'CSS3 & Tailwind Layouts', level: 90, category: 'frontend', icon: '🎨' },
    
    // Backend & DB
    { name: 'Java Database Connectivity (JDBC)', level: 85, category: 'backend-db', icon: '🔌' },
    { name: 'MySQL Relational Engine', level: 85, category: 'backend-db', icon: '🐬' },
    { name: 'Oracle SQL Server', level: 80, category: 'backend-db', icon: '🔴' },
    { name: 'Server-side concepts', level: 75, category: 'backend-db', icon: '⚙️' },
    
    // Tools
    { name: 'Git & Version Workflows', level: 85, category: 'tools', icon: '🐙' },
    { name: 'VS Code', level: 90, category: 'tools', icon: '💻' },
    { name: 'Odoo ERP System customization', level: 70, category: 'tools', icon: '💼' },
    { name: 'Eclipse IDE', level: 80, category: 'tools', icon: '⚙️' },
    { name: 'Arduino IDE & IoT Coding', level: 75, category: 'tools', icon: '🔌' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillData 
    : skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-[10%] left-[0%] w-[350px] h-[350px] radial-glow-cyan pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[0%] w-[350px] h-[350px] radial-glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-12">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            02 // TECHNICAL ABILITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">MY SKILLS</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Categories Tab Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[11px] font-bold uppercase border transition-all duration-300 ${
                activeTab === tab.id
                  ? 'border-cyber-primary text-cyber-bg bg-cyber-primary shadow-cyan-glow'
                  : 'border-white/10 text-cyber-textMuted hover:border-cyber-primary/40 hover:text-cyber-primary'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with Framer Motion Layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <CyberCard glowColor={skill.category === 'programming' || skill.category === 'frontend' ? 'cyan' : 'purple'} className="!p-5 flex flex-col justify-between h-full select-none">
                  {/* Skill title & icon header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl" role="img" aria-label={skill.name}>{skill.icon}</span>
                      <h4 className="font-mono text-[13px] font-bold text-cyber-text tracking-wide">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="font-mono text-xs text-cyber-primary font-black">
                      {skill.level}%
                    </span>
                  </div>

                  {/* High-tech Custom Glow Progress Bar */}
                  <div className="w-full bg-slate-950/80 border border-white/5 h-[8px] rounded-full overflow-hidden p-[1px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.0, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        skill.category === 'programming' || skill.category === 'frontend'
                          ? 'bg-gradient-to-r from-cyber-primary to-cyan-400 shadow-[0_0_8px_#00f0ff]'
                          : 'bg-gradient-to-r from-cyber-secondary to-purple-400 shadow-[0_0_8px_#9d4edd]'
                      }`}
                    />
                  </div>

                  {/* Cyber detail marker */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-cyber-textMuted mt-3">
                    <span>SECTOR_{skill.category.toUpperCase()}</span>
                    <span>ADDR_0x{(idx * 16).toString(16).toUpperCase()}</span>
                  </div>
                </CyberCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
