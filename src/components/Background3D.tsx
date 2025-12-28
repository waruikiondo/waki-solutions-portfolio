'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function StarField(props: any) {
  // FIX: Added 'null' as the initial value
  const ref = useRef<any>(null);
  
  // Generate 5000 random points inside a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  // Animation loop: Rotate the entire sphere of points
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00A9FF"  // Your Electric Blue Brand Color
          size={0.002}     // Tiny, subtle dots
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-background-dark">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
      {/* Gradient Overlay to fade particles into the black background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
    </div>
  );
};