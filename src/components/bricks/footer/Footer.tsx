import React from 'react';
import { useThree } from '@react-three/fiber';

import Brick from '@/components/bricks/Brick';

const Footer = () => {
  useThree();
  const sm = window.innerWidth < 950;

  return (
    <group
      scale={sm ? 0.5 : 1.2}
      position={[sm ? -0.8 : -1.8, sm ? 1 : -2.5, -2]}
      rotation={[0, 0, 0.35]}
    >
      <Brick speed={0.006} />
    </group>
  );
};

export default Footer;
