import React from 'react';
import {
  Environment,
  Lightformer,
  // OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Brick from '@/components/Brick';

const Hero = () => {
  const sm = window.innerWidth < 950;

  return (
    <Canvas>
      <PerspectiveCamera fov={42} makeDefault position={[0, 0, 10]} />

      <color attach="background" args={['#EDEDED']} />
      {/* <OrbitControls makeDefault /> */}

      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />

      <Environment preset="city" environmentIntensity={0.3}>
        <Lightformer
          intensity={8}
          position={[10, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={self => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <directionalLight intensity={5} position={[0, 3, 2]} />

      <group
        scale={sm ? 0.5 : 1.2}
        position={[sm ? -0.8 : -1.8, sm ? 1 : -2.5, -2]}
        rotation={[0, 0, 0.35]}
      >
        <Brick speed={0.006} />
      </group>
    </Canvas>
  );
};
export default Hero;
