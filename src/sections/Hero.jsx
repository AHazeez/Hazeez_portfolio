import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, FileCode2, Send, MapPin } from 'lucide-react';
import SceneWorkspace from '../components/SceneWorkspace';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const navigate = useNavigate();
  const fullText = "Transforming ideas into scalable web applications through Java, React, and modern technologies.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden"
    >
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] radial-glow-cyan pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] radial-glow-purple pointer-events-none z-0" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 cyber-grid-bg opacity-[0.4] z-0" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
        {/* Left Side text layout */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          {/* Location Badge HUD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 border border-cyber-primary/20 bg-cyber-primary/5 px-3 py-1.5 rounded-full font-mono text-[11px] text-cyber-primary shadow-cyan-glow uppercase tracking-widest"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Mangalore, Karnataka, IN</span>
          </motion.div>

          {/* Name & Title */}
          <div className="flex flex-col gap-2">
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-cyber-primary font-bold text-[14px] uppercase tracking-[0.3em] font-medium"
            >
              INITIATE // INTERFACE
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black tracking-tight"
            >
              <span className="font-extrabold font-mono">ABDUL</span>{' '}
              <span className="bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent -webkit-background-clip-text text-transparent bg-clip-text">
                HAZEEZ
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold font-mono tracking-wide text-cyber-textMuted mt-1"
            >
              &gt; Java Full Stack Developer
            </motion.h2>
          </div>

          {/* Typing terminal summary */}
          <div className="min-h-[60px] max-w-[550px] font-mono text-[14px] leading-relaxed text-cyber-textMuted border-l-2 border-cyber-primary/40 pl-4 py-1">
            <span className="text-cyber-primary">&gt;_ </span>
            <span className="caret-blink">{typedText}</span>
          </div>

          {/* Call to Actions Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto"
          >
            {/* View Projects CTA */}
            <button
              onClick={() => navigate('/projects')}
              className="group relative flex items-center gap-2 border border-cyber-primary/40 px-6 py-3 rounded-lg text-[13px] font-bold font-mono uppercase text-cyber-primary hover:text-cyber-bg bg-cyber-primary/5 hover:bg-cyber-primary shadow-cyan-glow transition-all duration-300"
            >
              <FileCode2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>View Projects</span>
            </button>

            {/* Contact Me CTA */}
            <button
              onClick={() => navigate('/contact')}
              className="group relative flex items-center gap-2 border border-cyber-secondary/40 px-6 py-3 rounded-lg text-[13px] font-bold font-mono uppercase text-cyber-secondary hover:text-cyber-bg bg-cyber-secondary/5 hover:bg-cyber-secondary shadow-purple-glow transition-all duration-300"
            >
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Contact Me</span>
            </button>

            {/* Download Resume CTA */}
            <a
              href="/resume.pdf"
              download="Abdul_Hazeez_Resume.pdf"
              className="group relative flex items-center gap-2 border border-cyber-accent/40 px-6 py-3 rounded-lg text-[13px] font-bold font-mono uppercase text-cyber-accent hover:text-cyber-bg bg-cyber-accent/5 hover:bg-cyber-accent shadow-pink-glow transition-all duration-300"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side 3D Interactive Canvas Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-[450px] lg:max-w-none glass-card rounded-2xl p-2 relative">
            <span className="absolute top-3 left-4 w-2 h-2 rounded-full bg-cyber-primary animate-ping" />
            <SceneWorkspace />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
