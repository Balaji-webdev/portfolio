import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useScroll, MotionValue } from "framer-motion";
import * as THREE from "three";

interface SceneProps {
  scrollYProgress: MotionValue<number>;
}

const Scene: React.FC<SceneProps> = ({ scrollYProgress }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollYProgress.get() * Math.PI * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 32]} />
        <MeshDistortMaterial color="#7c3aed" distort={0.4} speed={2} />
      </mesh>
    </>
  );
};

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[300vh] -z-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <Canvas>
          <Scene scrollYProgress={scrollYProgress} />
        </Canvas>
      </div>
    </div>
  );
}
