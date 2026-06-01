import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function BankingDashboard3D() {
  const coinsRef = useRef();
  const graphBarsRef = useRef();
  const pathRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Rotate the revolving coins stack
    if (coinsRef.current) {
      coinsRef.current.rotation.y = elapsed * 0.5;
    }

    // Oscillate graph bar heights to simulate real-time transactions
    if (graphBarsRef.current) {
      graphBarsRef.current.children.forEach((bar, index) => {
        bar.scale.y = 1 + Math.sin(elapsed * 2 + index * 1.5) * 0.4;
      });
    }

    // Rotate active transaction circuit
    if (pathRef.current) {
      pathRef.current.rotation.y = -elapsed * 0.3;
      pathRef.current.rotation.z = elapsed * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#9d4edd" />
      <pointLight position={[-5, -5, -5]} intensity={1.0} color="#00f0ff" />

      {/* Revolving Coins/Nodes Stack (Database Columns) */}
      <group ref={coinsRef} position={[-0.8, -0.2, 0]}>
        {[0, 0.4, 0.8].map((y, idx) => (
          <mesh key={`coin-${idx}`} position={[0, y - 0.4, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 0.25, 24]} />
            <meshStandardMaterial
              color="#9d4edd"
              emissive="#3a0ca3"
              roughness={0.1}
              metalness={0.9}
              wireframe
            />
          </mesh>
        ))}
      </group>

      {/* Futuristic 3D Financial Bar Charts */}
      <group ref={graphBarsRef} position={[0.8, -0.6, 0.4]}>
        {[-0.6, -0.2, 0.2, 0.6].map((x, idx) => (
          <mesh key={`bar-${idx}`} position={[x, 0.4, 0]}>
            <boxGeometry args={[0.15, 0.8, 0.15]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? '#00f0ff' : '#ec4899'}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Outer Floating Transaction Path Sphere */}
      <mesh ref={pathRef}>
        <sphereGeometry args={[1.5, 8, 8]} />
        <meshBasicMaterial color="#00f0ff" wireframe opacity={0.12} transparent />
      </mesh>

      {/* Interactive transaction beam sphere */}
      <mesh position={[0, 0.6, -0.4]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ec4899" roughness={0} emissive="#ff007f" />
      </mesh>
    </group>
  );
}

export default function ProjectBanking() {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* 3D Banking Scene Container */}
      <div className="w-full h-[260px] relative border border-white/10 rounded-lg bg-cyber-bg/40 select-none overflow-hidden cursor-grab active:cursor-grabbing interactive-3d">
        <div className="absolute top-2 left-3 font-mono text-[9px] text-cyber-secondary uppercase opacity-80">
          BANKING_SYSTEM_DATA_LEDGER_3D
        </div>
        <div className="absolute bottom-2 right-3 font-mono text-[8px] text-cyber-textMuted uppercase">
          SECURE_OOP_TRANS_MONITOR
        </div>
        <Canvas camera={{ position: [2.2, 1.2, 2.2], fov: 45 }}>
          <BankingDashboard3D />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.2} />
        </Canvas>
      </div>

      {/* Status HUD Metrics Panel */}
      <div className="w-full border border-white/10 rounded-lg p-3 bg-cyber-bg/40 flex flex-col gap-2 font-mono text-[10px] text-cyber-textMuted">
        <div className="flex justify-between items-center text-cyber-primary font-bold">
          <span>OOP CORE TRANSACTION BENCHMARK</span>
          <span className="text-green-400">STATUS: ACTIVE</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[9px] border-t border-white/5 pt-2">
          <div>&gt; EXCEPTION_HANDLING: READY</div>
          <div>&gt; TRANSACTION_LOCK: MULTITHREAD</div>
          <div>&gt; DATABASE_CONNECT: SECURE</div>
          <div>&gt; SESSION_MANAGER: SHA256</div>
        </div>
      </div>
    </div>
  );
}
