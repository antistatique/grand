import React from 'react';
import {
  ContactShadows,
  Environment,
  Lightformer,
  // OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Hero from './HeroDeadline';

const HeroCanvas = () => (
  <Canvas gl={{ preserveDrawingBuffer: true }}>
    <PerspectiveCamera fov={42} makeDefault position={[0, 0, 10]} />
    <color attach="background" args={['#EDEDED']} />

    {/* <OrbitControls makeDefault /> */}

    <ContactShadows
      scale={100}
      position={[0, -7.5, 0]}
      blur={1}
      far={100}
      opacity={0.85}
    />
    <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
    <Environment preset="city" environmentIntensity={0.05}>
      <Lightformer
        intensity={20}
        position={[10, 5, 0]}
        scale={[10, 50, 1]}
        onUpdate={self => self.lookAt(0, 0, 0)}
      />
    </Environment>
    <directionalLight intensity={150} position={[0, 3, 2]} />

    <Hero />
  </Canvas>
);

export default HeroCanvas;
