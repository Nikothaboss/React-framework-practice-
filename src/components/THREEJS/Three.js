import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Box } from '@chakra-ui/layout';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

const Sphere = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  });

  const name = (type) => `./Textures/Rock029_1K_${type}.jpg`;
  const colorMap = useLoader(TextureLoader, name('Color'));

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[-1, 0, 0.8]} />
      <mesh ref={meshRef} position={[-1.5, 0, 0]}>
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};

const Three = () => {
  return (
    <>
      <Box h='100vh' w='100%'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Stars />
            <Sphere />
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
};

export default Three;
