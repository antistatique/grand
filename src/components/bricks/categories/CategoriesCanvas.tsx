import React from 'react';
import {
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Categories from './Categories';

const CategoriesCanvas = () => (
  <Canvas>
    <PerspectiveCamera fov={42} makeDefault position={[0, 0, 10]} />

    <color attach="background" args={['#EDEDED']} />
    <OrbitControls makeDefault />

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

    <Categories />
  </Canvas>
);
export default CategoriesCanvas;
