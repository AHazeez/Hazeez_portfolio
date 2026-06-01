import { Cpu } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-cyber-bg/95 py-12 relative overflow-hidden">
      {/* HUD scanning grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,240,255,0.01)_1px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        {/* Brand System */}
        <div className="flex items-center gap-2 font-mono">
          <Cpu className="w-5 h-5 text-cyber-primary animate-pulse" />
          <span className="font-extrabold text-[14px] bg-gradient-to-r from-cyber-primary to-cyber-secondary -webkit-background-clip-text text-transparent bg-clip-text">
            HAZEEZ.SYS // TERMINAL_v3.0
          </span>
        </div>

        {/* Copyright Details */}
        <div className="font-mono text-[11px] text-cyber-textMuted select-none">
          <span>&copy; {year} Abdul Hazeez. All rights reserved.</span>
        </div>

        {/* Security / System metrics */}
        <div className="font-mono text-[9px] text-cyber-textMuted uppercase tracking-widest bg-white/5 border border-white/5 px-3 py-1.5 rounded">
          <span>ENCRYPTION: SHIELD_ON</span>
        </div>
      </div>
    </footer>
  );
}
