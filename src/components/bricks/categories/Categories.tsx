import React from 'react';
import { useThree } from '@react-three/fiber';

import Brick from '@/components/bricks/Brick';

const Categories = () => {
  const { viewport } = useThree();
  const w = viewport.width;
  const sm = window.innerWidth < 950;

  return (
    <group
      scale={sm ? w / 10 : w / 16}
      position={[sm ? 1 : 2, sm ? 1 : 1.4, 0]}
      rotation={[0, 0, sm ? 0.3 : -0.3]}
    >
      <Brick speed={0.006} />
    </group>
  );
};

export default Categories;
