import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Model(props) {
  const scaleModel = Math.max(window.innerWidth / 1300, 0.5);
  const { nodes, materials } = useGLTF('/scene.gltf');
  const modelRef = useRef();
  const { pointer } = useThree();

  const rotationY = useRef(0);
  useFrame((state, delta) => {
    if (!modelRef.current) return;

    rotationY.current += delta * 0.05;

    const pointerX = pointer.x * 0.3;
    const pointerY = pointer.y * 0.3;

    modelRef.current.rotation.set(
      -pointerY,
      rotationY.current + pointerX,
      0
    );
  });

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={scaleModel}
      />
    </group>
  );
};

useGLTF.preload('/scene.gltf');