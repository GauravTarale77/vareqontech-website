"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GazeOrb({
  targetIndex,
  total,
}: {
  targetIndex: number;
  total: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0.5 });

  useEffect(() => {
    const normalized = total > 1 ? targetIndex / (total - 1) : 0.5; // 0 = top, 1 = bottom
    target.current.x = (normalized - 0.5) * 0.7; // tilt up/down toward the box
    target.current.y = 0.55; // stays turned toward the list on the right
  }, [targetIndex, total]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        target.current.x,
        delta * 3
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        target.current.y,
        delta * 3
      );
      groupRef.current.rotation.z = Math.sin(Date.now() * 0.0003) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer translucent wireframe shell */}
      <mesh>
        <sphereGeometry args={[1.6, 24, 24]} />
        <meshBasicMaterial color="#6ba83a" wireframe transparent opacity={0.35} />
      </mesh>
      {/* Inner glowing "iris" — offset forward so rotation reveals direction */}
      <mesh position={[0, 0, 1.1]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshBasicMaterial color="#a8d977" />
      </mesh>
      <pointLight position={[0, 0, 1.6]} intensity={1.4} color="#a8d977" distance={4} />
    </group>
  );
}

export function Scene3DGaze({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <GazeOrb targetIndex={activeIndex} total={total} />
    </Canvas>
  );
}