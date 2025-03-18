import React from 'react';
import { Line, Text, type TextProps } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { range } from 'ramda';

import Brick from '@/components/Brick';
import { t } from '@/locales';

const HeroTitle = () => {
  const { viewport } = useThree();
  const h = viewport.height;
  const w = viewport.width;
  const sm = window.innerWidth < 950;

  const l = sm ? -w / 5 : -2.4;
  const r = sm ? w / 7 : 2;
  const yStep = sm ? w / 8 : 0.95;
  const y = range(0, 7).map(i => 2.1 - yStep * i);

  const textProps: Partial<TextProps> = {
    fontSize: sm ? w / 8.5 : h / 8,
    fontWeight: 700,
    color: '#272727',
    anchorY: 'middle',
    font: '/fonts/bold.woff',
  };

  return (
    <group>
      <group
        scale={sm ? w / 20 : h / 19}
        position={[0, 0.28, 2]}
        rotation={[0, 0, -0.3]}
      >
        <Brick />
      </group>

      <Text {...textProps} anchorX="center" position={[l, y[0], 0]}>
        {t('hero.date')}
      </Text>
      <Text {...textProps} anchorX="center" position={[l, y[1], 0]}>
        {t('hero.date')}
      </Text>
      <Text {...textProps} anchorX="center" position={[l, y[2], 0]}>
        {t('hero.date')}
      </Text>
      <Text {...textProps} anchorX="center" position={[r, sm ? y[3] : y[1], 0]}>
        {t('hero.title')}
      </Text>
      <Text {...textProps} anchorX="center" position={[r, sm ? y[4] : y[2], 0]}>
        {t('hero.title')}
      </Text>
      <Text {...textProps} anchorX="center" position={[r, sm ? y[5] : y[3], 0]}>
        {t('hero.title')}
      </Text>
      {!sm && (
        <Text
          {...textProps}
          fontSize={h / 35}
          fontWeight={400}
          font="/fonts/regular.woff"
          anchorX="center"
          position={[3.5, y[4], 0]}
        >
          {t('hero.subtitle')}
        </Text>
      )}
      {sm && (
        <>
          <Text
            {...textProps}
            fontSize={h / 45}
            fontWeight={400}
            font="/fonts/regular.woff"
            anchorX="left"
            position={[0.15, y[6], 0]}
          >
            {t('hero.subtitle_mobile1')}
          </Text>
          <Text
            {...textProps}
            fontSize={h / 45}
            fontWeight={400}
            font="/fonts/regular.woff"
            anchorX="left"
            position={[0.15, y[6] - yStep / 2.5, 0]}
          >
            {t('hero.subtitle_mobile2')}
          </Text>
        </>
      )}
      <Line
        points={[
          [sm ? -w / 7.5 : -0.25, sm ? y[6] : y[4], 0],
          [sm ? -w / 100 : 1.4, sm ? y[6] : y[4], 0],
        ]}
        color="#272727"
        lineWidth={1}
      />
    </group>
  );
};

export default HeroTitle;
