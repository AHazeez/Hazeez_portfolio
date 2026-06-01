import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';

function InteractiveWorkspace() {
  const coreRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const serverGridRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    
    // Core spin
    if (coreRef.current) {
      coreRef.current.rotation.y = elapsed * 0.4;
      coreRef.current.rotation.x = elapsed * 0.2;
    }

    // Double rings counter-rotation
    if (ringRef1.current) {
      ringRef1.current.rotation.z = elapsed * 0.2;
      ringRef1.current.rotation.x = elapsed * 0.1;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z = -elapsed * 0.25;
      ringRef2.current.rotation.y = elapsed * 0.15;
    }

    // Floating server stack grid
    if (serverGridRef.current) {
      serverGridRef.current.rotation.y = elapsed * 0.1;
      serverGridRef.current.position.y = Math.sin(elapsed) * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Ambient lighting inside canvas */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00f0ff" />
      <pointLight position={[-5, -5, -5]} intensity={1.2} color="#9d4edd" />

      {/* Floating Central Core of Workspace */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshPhysicalMaterial
            color="#00f0ff"
            emissive="#005080"
            wireframe
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Inner Tech Ring */}
      <mesh ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.04, 8, 48]} />
        <meshBasicMaterial color="#9d4edd" wireframe opacity={0.6} transparent />
      </mesh>

      {/* Outer Tech Ring */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.03, 8, 64]} />
        <meshBasicMaterial color="#00f0ff" wireframe opacity={0.4} transparent />
      </mesh>

      {/* Volumetric Server Cubes Grid (representing Backend / Full Stack) */}
      <group ref={serverGridRef} position={[0, -0.2, 0]}>
        {[-0.8, 0.8].map((x, xi) =>
          [-0.8, 0.8].map((z, zi) => (
            <mesh key={`cube-${xi}-${zi}`} position={[x, -1.2, z]}>
              <boxGeometry args={[0.4, 0.6, 0.4]} />
              <meshStandardMaterial
                color={xi === zi ? '#00f0ff' : '#9d4edd'}
                roughness={0.2}
                metalness={0.8}
                wireframe
              />
            </mesh>
          ))
        )}
      </group>

      {/* Cybernetic Tech Particle Stars inside workspace */}
      <Stars radius={40} depth={20} count={300} factor={4} saturation={0.5} fade speed={1.5} />
    </group>
  );
}

export default function SceneWorkspace() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative select-none cursor-grab active:cursor-grabbing interactive-3d">
      {/* 3D Scene HUD Borders */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-cyber-primary tracking-widest pointer-events-none uppercase opacity-80 bg-slate-900/60 p-2 border border-cyber-primary/20 backdrop-blur-md rounded">
        SYSTEM: ACTIVE // 3D_WORK_COGNITIVE
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-cyber-secondary tracking-widest pointer-events-none opacity-60">
        [DRAG TO ROTATE SCENE]
      </div>

      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
        <InteractiveWorkspace />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}
