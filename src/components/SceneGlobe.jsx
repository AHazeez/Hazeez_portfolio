import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function InteractiveGlobe() {
  const globeRef = useRef();
  const cloudRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Rotate globe and clouds in opposite directions
    if (globeRef.current) {
      globeRef.current.rotation.y = elapsed * 0.12;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y = -elapsed * 0.05;
      cloudRef.current.rotation.x = elapsed * 0.03;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.8} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1.2} color="#9d4edd" />

      {/* Main Wireframe digital Globe body */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#002d40"
          roughness={0.2}
          metalness={0.9}
          wireframe
        />
      </mesh>

      {/* Outer cloud layer showing digital node linkages */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.7, 16, 16]} />
        <meshBasicMaterial
          color="#9d4edd"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Primary local network connection node representing Mangalore, India */}
      <mesh position={[0.7, 0.9, 0.9]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color="#ec4899" />
      </mesh>

      {/* Orbiting Tech Particles around the globe */}
      <Stars radius={20} depth={10} count={100} factor={2} saturation={0.5} speed={1.0} />
    </group>
  );
}

export default function SceneGlobe() {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative border border-white/5 rounded-2xl bg-cyber-bg/25 overflow-hidden select-none cursor-grab active:cursor-grabbing interactive-3d">
      <div className="absolute top-3 left-4 font-mono text-[9px] text-cyber-primary tracking-widest pointer-events-none uppercase opacity-80">
        NETWORK_ROUTING: MANGALORE_IN // ACTIVE
      </div>
      <div className="absolute bottom-3 left-4 font-mono text-[8px] text-cyber-textMuted pointer-events-none opacity-60">
        GLOBAL LATENCY: 24ms
      </div>

      <Canvas camera={{ position: [0, 0, 3.2], fov: 60 }}>
        <InteractiveGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
