import { motion } from 'framer-motion';

export default function CyberCard({ children, className = '', glowColor = 'cyan', delay = 0 }) {
  const glowClasses = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-glow',
    purple: 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-glow',
    pink: 'border-pink-500/20 hover:border-pink-500/50 hover:shadow-pink-glow',
  };

  const cornerGlows = {
    cyan: 'bg-cyber-primary shadow-[0_0_8px_#00f0ff]',
    purple: 'bg-cyber-secondary shadow-[0_0_8px_#9d4edd]',
    pink: 'bg-cyber-accent shadow-[0_0_8px_#ec4899]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card relative overflow-hidden rounded-xl border p-6 ${glowClasses[glowColor]} ${className}`}
    >
      {/* Cybernetic HUD Corner Details */}
      <span className={`absolute top-0 left-0 w-[8px] h-[1px] ${cornerGlows[glowColor]}`} />
      <span className={`absolute top-0 left-0 w-[1px] h-[8px] ${cornerGlows[glowColor]}`} />
      
      <span className={`absolute top-0 right-0 w-[8px] h-[1px] ${cornerGlows[glowColor]}`} />
      <span className={`absolute top-0 right-0 w-[1px] h-[8px] ${cornerGlows[glowColor]}`} />

      <span className={`absolute bottom-0 left-0 w-[8px] h-[1px] ${cornerGlows[glowColor]}`} />
      <span className={`absolute bottom-0 left-0 w-[1px] h-[8px] ${cornerGlows[glowColor]}`} />

      <span className={`absolute bottom-0 right-0 w-[8px] h-[1px] ${cornerGlows[glowColor]}`} />
      <span className={`absolute bottom-0 right-0 w-[1px] h-[8px] ${cornerGlows[glowColor]}`} />

      {/* Cybernetic Tech Scanlines inside card */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none opacity-50" />

      {/* Actual Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
