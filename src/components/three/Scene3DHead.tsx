"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function RobotHead({
  targetIndex,
  total,
}: {
  targetIndex: number;
  total: number;
}) {
  const headRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const normalized = total > 1 ? targetIndex / (total - 1) : 0.5;
    target.current.x = (normalized - 0.5) * 0.5; // slight up/down tilt
    target.current.y = (normalized - 0.5) * 0.9; // turn left/right toward the list
  }, [targetIndex, total]);

  useFrame((state, delta) => {
    if (headRef.current) {
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        target.current.x,
        delta * 3
      );
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        target.current.y,
        delta * 3
      );
      headRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
    }
  });

  return (
    <group ref={headRef}>
      <RoundedBox args={[1.6, 1.9, 1.5]} radius={0.25} smoothness={4}>
        <meshStandardMaterial color="#141414" metalness={0.6} roughness={0.35} />
      </RoundedBox>

      {/* Visor strip */}
      <mesh position={[0, 0.15, 0.76]}>
        <boxGeometry args={[1.3, 0.35, 0.05]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.32, 0.15, 0.8]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color="#a8d977" emissive="#6ba83a" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0.32, 0.15, 0.8]}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshStandardMaterial color="#a8d977" emissive="#6ba83a" emissiveIntensity={2} />
      </mesh>

      <pointLight position={[-0.32, 0.15, 1.1]} color="#a8d977" intensity={0.6} distance={2} />
      <pointLight position={[0.32, 0.15, 1.1]} color="#a8d977" intensity={0.6} distance={2} />

      {/* Antenna */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
        <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.28, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#a8d977" emissive="#6ba83a" emissiveIntensity={1.5} />
      </mesh>

      {/* Side panel details */}
      <mesh position={[-0.85, -0.2, 0]}>
        <boxGeometry args={[0.08, 0.6, 0.9]} />
        <meshStandardMaterial color="#1f1f1f" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.85, -0.2, 0]}>
        <boxGeometry args={[0.08, 0.6, 0.9]} />
        <meshStandardMaterial color="#1f1f1f" metalness={0.5} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function Scene3DHead({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1} />
      <directionalLight position={[-3, -2, 2]} intensity={0.3} />
      <RobotHead targetIndex={activeIndex} total={total} />
    </Canvas>
  );
}