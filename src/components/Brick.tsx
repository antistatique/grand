import { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import type { Mesh } from 'three';

const Brick = () => {
  const meshRef = useRef<Mesh | null>(null);
  const { nodes } = useGLTF('/3d/brick.gltf');
  const { viewport } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.00005;
      meshRef.current.rotation.y += 0.006;
      // meshRef.current.rotation.z += 0.00005;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={nodes.Cube.geometry}
      castShadow
      receiveShadow
      position={[0, 0, 0]}
      rotation={[-0, 0, 1.56]}
      scale={viewport.height / 10}
    >
      <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
    </mesh>
  );
};

export default Brick;
