import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  const activeSection = useMemo(() => {
    const route = location.pathname.replace(/^\/+/, '');
    return route || 'home';
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen text-cyber-text bg-cyber-bg overflow-x-hidden">
      <CustomCursor />
      <ParticleBg />
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />

      <main className="relative z-10 w-full">
        <Routes>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="education" element={<Education />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
