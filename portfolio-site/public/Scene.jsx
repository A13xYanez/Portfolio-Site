import { useThree, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');
  const { size, viewport, mouse } = useThree();

  const { scale, position } = useMemo(() => {
    const isMobile = size.width < 600;
    const isTablet = size.width >= 600 && size.width < 1024;

    let scale = 4;
    if (isMobile || isTablet) scale = 3;

    const yOffset = -viewport.height / 2 + scale * -4.5;

    return {
      scale,
      position: [2, yOffset, 0],
    };
  }, [size.width, viewport.height]);

  useFrame(() => {
    if (modelRef.current) {
      const targetRotation = mouse.x * 0.05;
      modelRef.current.rotation.y += (targetRotation - modelRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group {...props} dispose={null} position={position}>
      <group ref={modelRef} rotation={[-1, 0, 0]} scale={scale}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.aiStandardSurface1SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.aiStandardSurface2SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.aiStandardSurface3SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.aiStandardSurface4SG} />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');