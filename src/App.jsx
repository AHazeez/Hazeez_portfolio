import { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBg from './components/ParticleBg';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-cyber-text bg-cyber-bg overflow-x-hidden">
      <CustomCursor />
      <ParticleBg />
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
