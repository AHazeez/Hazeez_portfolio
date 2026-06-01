import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .interactive-3d');
      targets.forEach(target => {
        target.addEventListener('mouseenter', handleHoverStart);
        target.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addHoverListeners();
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Re-bind on dynamic content changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  // Disable on mobile/touch screens
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Holographic Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          borderColor: hovered ? '#ec4899' : '#00f0ff',
          boxShadow: hovered 
            ? '0 0 12px #ec4899, inset 0 0 6px #ec4899'
            : '0 0 12px #00f0ff, inset 0 0 6px #00f0ff',
          scale: clicked ? 0.8 : hovered ? 1.8 : 1,
          backgroundColor: clicked ? 'rgba(0, 240, 255, 0.1)' : 'rgba(0, 240, 255, 0.02)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      {/* Core Laser Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: 12,
          translateY: 12,
          backgroundColor: hovered ? '#ec4899' : '#9d4edd',
          boxShadow: hovered ? '0 0 8px #ec4899' : '0 0 8px #9d4edd',
        }}
      />
    </>
  );
}
