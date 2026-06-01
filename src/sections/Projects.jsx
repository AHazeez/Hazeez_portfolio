import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Terminal, CircuitBoard } from 'lucide-react';
import CyberCard from '../components/CyberCard';
import ProjectWheelchair from '../components/ProjectWheelchair';
import ProjectBanking from '../components/ProjectBanking';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'hardware-ai', label: 'IoT & AI Hardware', icon: <CircuitBoard className="w-3.5 h-3.5" /> },
    { id: 'software-java', label: 'Java & SQL Software', icon: <Terminal className="w-3.5 h-3.5" /> },
  ];

  const projects = [
    {
      id: 1,
      title: "Mind-Controlled Wheelchair",
      category: "hardware-ai",
      tech: ["Arduino", "Python", "Machine Learning", "EEG Signal Processing"],
      desc: "Designed and engineered an innovative brainwave-controlled assistive mobility solution for differently-abled individuals. The system intercepts EEG brainwaves and routes structural commands to high-power motors using real-time ML processing.",
      features: [
        "Direct brain signal-based wheelchair steering control",
        "Adaptive machine learning classification models",
        "Real-time movement feedback loop systems",
        "Arduino microcontroller hardware integration"
      ],
      interactiveScene: <ProjectWheelchair />
    },
    {
      id: 2,
      title: "Bank Management System",
      category: "software-java",
      tech: ["Core Java", "OOP", "MySQL", "JDBC"],
      desc: "Developed a comprehensive enterprise banking console utilizing strict Object-Oriented Programming (OOP) paradigms in Java. Features full relational database integration to manage safe currency operations and ledger locks.",
      features: [
        "Automated new account creation and secure hashing",
        "Atomized deposit and withdrawal pipelines",
        "Real-time balance enquiry and transaction ledger logs",
        "Thread-safe architecture and structured exception handling"
      ],
      interactiveScene: <ProjectBanking />
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Radial Glows */}
      <div className="absolute top-[20%] right-[0%] w-[400px] h-[400px] radial-glow-cyan pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[0%] w-[400px] h-[400px] radial-glow-purple pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-12">
          <span className="font-mono text-xs text-cyber-primary tracking-[0.25em] uppercase font-bold">
            03 // PROJECT PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-mono">FEATURED WORK</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded mt-2" />
        </div>

        {/* Project Filtering Nav Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-[11px] font-bold uppercase border transition-all duration-300 ${
                filter === tab.id
                  ? 'border-cyber-accent text-cyber-bg bg-cyber-accent shadow-pink-glow'
                  : 'border-white/10 text-cyber-textMuted hover:border-cyber-accent/40 hover:text-cyber-accent'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Project Cards (Framer Motion Grid Layout) */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <CyberCard 
                  glowColor={project.category === 'hardware-ai' ? 'cyan' : 'purple'} 
                  className="h-full flex flex-col justify-between"
                >
                  {/* Left-side / top content details */}
                  <div className="flex flex-col gap-4">
                    {/* Category tag */}
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-cyber-accent font-bold uppercase tracking-wider">
                        {project.category === 'hardware-ai' ? 'Hardware // Neural AI' : 'Software // Enterprise Java'}
                      </span>
                      <span className="text-cyber-textMuted font-mono">PROJECT_0{project.id}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold font-mono text-cyber-text">
                      {project.title}
                    </h3>

                    {/* Tech Stacks Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] font-mono text-cyber-textMuted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Project Description */}
                    <p className="text-[13px] text-cyber-textMuted leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Bullet features list */}
                    <ul className="flex flex-col gap-2 font-mono text-[11px] text-cyber-text mt-2 pl-1">
                      {project.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <span className="text-cyber-primary font-black">&gt;</span>
                          <span className="text-left">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right-side / bottom 3D scene representation */}
                  <div className="mt-8 border-t border-white/5 pt-6 w-full">
                    {project.interactiveScene}
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
