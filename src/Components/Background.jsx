/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "../hooks/useMousePosition";

function ParticleField() {
  const points = useRef();
  const mousePosition = useMousePosition();

  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Validate positions to prevent NaN values
      for (let j = 0; j < 3; j++) {
        if (isNaN(positions[i3 + j])) {
          positions[i3 + j] = 0;
        }
      }
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    // Interactive rotation based on mouse position
    const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
    const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;

    points.current.rotation.x += mouseY * 0.001;
    points.current.rotation.y += mouseX * 0.001;

    // Wave animation
    const time = state.clock.getElapsedTime();
    points.current.rotation.z = time * 0.05;

    // Breathing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.1;
    points.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
