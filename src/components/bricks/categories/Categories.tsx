import React from 'react';
import { Line, Text, type TextProps } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { range } from 'ramda';

import Brick from '@/components/bricks/Brick';
import { t } from '@/locales';

const Categories = () => {
  const { viewport } = useThree();
  const h = viewport.height;
  const w = viewport.width;
  const sm = window.innerWidth < 950;

  const categories = t('pages.categories.categories') as { name: string }[];
  const yStep = 0.768;
  const y = range(0, categories.length).map(i => 3.46 - yStep * i);
  const l = -w / 2;

  const textProps: Partial<TextProps> = {
    fontSize: sm ? w / 16 : w / 23,
    fontWeight: 700,
    color: '#272727',
    anchorY: 'middle',
    font: '/fonts/regular.woff',
  };

  return (
    <group>
      <group
        scale={sm ? h / 20 : w / 20}
        position={[sm ? 0.5 : 1.2, sm ? h / 10 : 1, 2]}
        rotation={[0, 0, sm ? 0.3 : -0.3]}
      >
        <Brick speed={0.006} />
      </group>

      {categories.map((category, i) => (
        <Text
          key={`category-${i}`}
          {...textProps}
          anchorX="left"
          position={[l, y[i], 0]}
        >
          {category.name}
        </Text>
      ))}

      {categories.map((_c, i) => (
        <Line
          key={`line-${i}`}
          points={[
            [l, y[i] - 0.38, 0],
            [6, y[i] - 0.38, 0],
          ]}
          color="#272727"
          lineWidth={sm ? 1 : 3}
        />
      ))}
    </group>
  );
};

export default Categories;
