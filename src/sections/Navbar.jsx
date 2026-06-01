import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';

export default function Navbar({ activeSection, scrollProgress }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Achievements', to: '/achievements' },
    { label: 'Contact', to: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          onClick={() => {
            setIsOpen(false);
            navigate('/');
          }}
          className="flex items-center gap-2 font-black text-xl tracking-wider select-none focus:outline-none"
        >
          <Cpu className="w-6 h-6 text-cyber-primary animate-pulse" />
          <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary -webkit-background-clip-text text-transparent bg-clip-text font-black font-mono">
            HAZEEZ.SYS
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `relative px-1 py-2 font-medium tracking-wide uppercase transition-colors hover:text-cyber-primary select-none ${
                isActive ? 'text-cyber-primary font-bold' : 'text-cyber-textMuted'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              {(activeSection === item.to.replace(/^\//, '') || (item.to === '/' && activeSection === 'home')) && (
                <motion.span 
                  layoutId="activeTabMarker"
                  className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-cyber-primary shadow-[0_0_8px_#00f0ff] rounded"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </NavLink>
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
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `w-full text-left py-2 border-b border-white/5 uppercase transition-colors ${
                    isActive ? 'text-cyber-primary font-bold' : 'text-cyber-textMuted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  &gt; {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
