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

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}

function getSectionFromHash(hash) {
  if (!hash) return null;
  const sectionId = hash.replace('#', '');
  return SECTION_IDS.includes(sectionId) ? sectionId : null;
}

function getSectionFromPath(pathname) {
  if (!pathname) return null;
  const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const lastSegment = parts[parts.length - 1] || '';
  return SECTION_IDS.includes(lastSegment) ? lastSegment : null;
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      const scrollPosition = window.scrollY + 160;

      for (const sectionId of SECTION_IDS) {
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

    const sectionFromHash = getSectionFromHash(window.location.hash);
    if (sectionFromHash && sectionFromHash !== 'home') {
      setTimeout(() => scrollToId(sectionFromHash), 150);
    } else {
      const sectionFromPath = getSectionFromPath(window.location.pathname);
      if (sectionFromPath && sectionFromPath !== 'home') {
        window.location.hash = `#${sectionFromPath}`;
        setTimeout(() => scrollToId(sectionFromPath), 150);
      }
    }

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

export default function App() {
  try {
    return <AppContent />;
  } catch (error) {
    console.error('App rendering error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-bg text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Portfolio Loading...</h1>
          <p>Please refresh the page.</p>
        </div>
      </div>
    );
  }
}
