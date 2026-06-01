import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Wheel3D() {
  const wheelRef = useRef();
  const chassisRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    // Rotate the wheelchair wheel continuously
    if (wheelRef.current) {
      wheelRef.current.rotation.z = elapsed * 0.8;
    }
    // Hover the chassis gently
    if (chassisRef.current) {
      chassisRef.current.position.y = Math.sin(elapsed * 2) * 0.1;
      chassisRef.current.rotation.y = elapsed * 0.3;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-5, -5, -5]} intensity={1.0} color="#ec4899" />

      {/* Futuristic Wheelchair Chassis */}
      <group ref={chassisRef}>
        {/* Support cage */}
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[1.5, 0.1, 1.2]} />
          <meshStandardMaterial color="#334155" roughness={0.1} metalness={0.9} wireframe />
        </mesh>
        
        {/* Chair back support */}
        <mesh position={[-0.6, 0.4, 0]}>
          <boxGeometry args={[0.1, 1.4, 1.0]} />
          <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} wireframe />
        </mesh>

        {/* Brainwave processing node/core under seat */}
        <mesh position={[0, -0.1, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#00f0ff" emissive="#005080" roughness={0.0} metalness={0.9} />
        </mesh>
      </group>

      {/* Main Wheel representing mechanical hardware */}
      <group ref={wheelRef} position={[0.3, -0.4, 0.7]}>
        {/* Outer Wheel rim */}
        <mesh>
          <torusGeometry args={[0.9, 0.08, 12, 48]} />
          <meshPhysicalMaterial color="#00f0ff" roughness={0.1} metalness={0.95} />
        </mesh>

        {/* Spokes (Torus grid) */}
        {Array.from({ length: 6 }).map((_, idx) => (
          <mesh key={idx} rotation={[0, 0, (Math.PI / 3) * idx]}>
            <boxGeometry args={[1.7, 0.03, 0.05]} />
            <meshStandardMaterial color="#9d4edd" roughness={0.2} metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Symmetrical Left Wheel */}
      <group ref={wheelRef} position={[0.3, -0.4, -0.7]}>
        <mesh>
          <torusGeometry args={[0.9, 0.08, 12, 48]} />
          <meshPhysicalMaterial color="#00f0ff" roughness={0.1} metalness={0.95} />
        </mesh>
        {Array.from({ length: 6 }).map((_, idx) => (
          <mesh key={`l-${idx}`} rotation={[0, 0, (Math.PI / 3) * idx]}>
            <boxGeometry args={[1.7, 0.03, 0.05]} />
            <meshStandardMaterial color="#9d4edd" roughness={0.2} metalness={0.9} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function ProjectWheelchair() {
  const eegRef = useRef(null);

  // Animated EEG Wave Visualization
  useEffect(() => {
    const canvas = eegRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let offset = 0;

    const resizeWave = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 70;
    };
    resizeWave();
    window.addEventListener('resize', resizeWave);

    const drawEEG = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#00f0ff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';

      // Draw mathematical simulated brainwaves (combining multiple frequencies)
      for (let x = 0; x < canvas.width; x++) {
        // Multi-frequency wave simulating Alpha, Beta, Delta EEG waves
        const wave1 = Math.sin(x * 0.04 + offset) * 15;
        const wave2 = Math.sin(x * 0.08 - offset * 1.5) * 8;
        const wave3 = Math.cos(x * 0.015 + offset * 0.5) * 5;
        const y = canvas.height / 2 + wave1 + wave2 + wave3;
        
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      ctx.shadowBlur = 0; // reset
      offset += 0.05;

      // Draw gridlines in background
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 0.5;
      for (let grid = 10; grid < canvas.width; grid += 30) {
        ctx.moveTo(grid, 0);
        ctx.lineTo(grid, canvas.height);
      }
      for (let grid = 10; grid < canvas.height; grid += 15) {
        ctx.moveTo(0, grid);
        ctx.lineTo(canvas.width, grid);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(drawEEG);
    };
    drawEEG();

    return () => {
      window.removeEventListener('resize', resizeWave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* 3D Wheelchair Model container */}
      <div className="w-full h-[260px] relative border border-white/10 rounded-lg bg-cyber-bg/40 select-none overflow-hidden cursor-grab active:cursor-grabbing interactive-3d">
        <div className="absolute top-2 left-3 font-mono text-[9px] text-cyber-primary uppercase opacity-80">
          PROSTHETIC_HARDWARE_3D
        </div>
        <Canvas camera={{ position: [2.5, 1, 2.5], fov: 45 }}>
          <Wheel3D />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>

      {/* Animated EEG Waves Oscilloscope container */}
      <div className="w-full border border-white/10 rounded-lg p-3 bg-cyber-bg/40 flex flex-col gap-2">
        <div className="flex justify-between items-center text-[10px] font-mono text-cyber-accent">
          <span>SIGNAL COGNITIVE EEG PROCESSING</span>
          <span className="animate-pulse-fast text-cyber-primary">● REAL_TIME</span>
        </div>
        <canvas ref={eegRef} className="w-full h-[70px] bg-slate-950/70 border border-cyber-primary/20 rounded" />
      </div>
    </div>
  );
}
