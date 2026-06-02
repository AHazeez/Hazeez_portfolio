import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';

export default function Navbar({ activeSection, scrollProgress }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  const scrollToId = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-bg/75 backdrop-blur-md border-b border-cyber-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div 
        className="h-[2px] bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent shadow-[0_0_8px_#00f0ff]" 
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToId('home')}
          className="flex items-center gap-2 font-black text-xl tracking-wider select-none focus:outline-none"
        >
          <Cpu className="w-6 h-6 text-cyber-primary animate-pulse" />
          <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary -webkit-background-clip-text text-transparent bg-clip-text font-black font-mono">
            HAZEEZ.SYS
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(item.id);
              }}
              className={`relative px-1 py-2 font-medium tracking-wide uppercase transition-colors hover:text-cyber-primary select-none ${
                activeSection === item.id ? 'text-cyber-primary font-bold' : 'text-cyber-textMuted'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeTabMarker"
                  className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-cyber-primary shadow-[0_0_8px_#00f0ff] rounded"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-white/10 hover:border-cyber-primary/40 hover:text-cyber-primary hover:shadow-cyan-glow transition-all"
            aria-label="Toggle Cyber Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-white/5"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-cyber-primary" /> : <Moon className="w-4 h-4 text-cyber-secondary" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-cyber-text"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-bg border-b border-cyber-primary/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 font-mono text-[14px] font-bold">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  className={`w-full text-left py-2 border-b border-white/5 uppercase transition-colors ${
                    activeSection === item.id ? 'text-cyber-primary font-bold' : 'text-cyber-textMuted'
                  }`}
                >
                  &gt; {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
