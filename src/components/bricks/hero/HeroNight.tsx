import React from 'react';
// import { useEffect } from 'react';
import { Line, Text, type TextProps } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { range } from 'ramda';

import Brick from '@/components/bricks/Brick';
import { t } from '@/locales';

const HeroTitle = () => {
  const three = useThree();
  const { viewport } = three;
  // const { gl } = three;
  const h = viewport.height;
  const w = viewport.width;
  const sm = window.innerWidth < 768;

  const l = sm ? -w / 4.8 : -2.7;
  const r = sm ? w / 10 : 2;
  const yStep = sm ? w / 8 : 0.95;
  const y = range(0, 7).map(i => 2.1 - yStep * i);

  const textProps: Partial<TextProps> = {
    fontSize: sm ? w / 8.5 : h / 8,
    fontWeight: 700,
    color: '#272727',
    anchorY: 'middle',
    font: '/fonts/bold.woff',
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     const link = document.createElement('a');
  //     link.setAttribute('download', 'hero-night-mobile.png');
  //     link.setAttribute(
  //       'href',
  //       gl.domElement
  //         .toDataURL('image/png')
  //         .replace('image/png', 'image/octet-stream')
  //     );
  //     link.click();
  //   }, 2000);
  // }, []);

  return (
    <group>
      <group
        scale={sm ? h / 18 : h / 12}
        position={[0, 0.28, 2]}
        rotation={[0, 0, -0.3]}
      >
        <Brick speed={0.006} />
      </group>

      <Text {...textProps} anchorX="center" position={[l, y[0], 0]}>
        {t('hero.night_date')}
      </Text>
      <Text {...textProps} anchorX="center" position={[l, y[1], 0]}>
        {t('hero.night_date')}
      </Text>
      <Text {...textProps} anchorX="center" position={[l, y[2], 0]}>
        {t('hero.night_date')}
      </Text>
      <Text {...textProps} anchorX="center" position={[r, sm ? y[3] : y[1], 0]}>
        {t('hero.night')}
      </Text>
      <Text {...textProps} anchorX="center" position={[r, sm ? y[4] : y[2], 0]}>
        {t('hero.night')}
      </Text>
      <Text {...textProps} anchorX="center" position={[r, sm ? y[5] : y[3], 0]}>
        {t('hero.night')}
      </Text>
      <Text
        {...textProps}
        fontSize={sm ? w / 28 : h / 35}
        fontWeight={400}
        font="/fonts/regular.woff"
        anchorX={sm ? 'center' : 'center'}
        position={[sm ? w / 9 : 3.5, sm ? y[6] : y[4] + 0.25, 0]}
      >
        {t('hero.subtitle')}
      </Text>
      <Line
        points={[
          [sm ? -w / 2.35 : -0.62, sm ? y[6] : y[4] + 0.25, 0],
          [sm ? -w / 4.2 : 1.4, sm ? y[6] : y[4] + 0.25, 0],
        ]}
        color="#272727"
        lineWidth={1}
      />
    </group>
  );
};

export default HeroTitle;
