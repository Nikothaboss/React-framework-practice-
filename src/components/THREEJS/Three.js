import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Box } from '@chakra-ui/layout';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import { colors } from '../../app.styled';
import styled from 'styled-components';

const NotchedDiv = styled.div`
  position: absolute;
  top: 25%;
  right: 2rem;
  padding: 2rem;
  width: 50%;
  height: 25rem;
  background-color: ${colors.darkBlue};
  opacity: 0.7;
  border: 1px solid ${colors.pink};
  box-shadow: inset 0px 0px 10px ${colors.pink};
  clip-path: polygon(
    0 10%,
    10% 0,
    90% 0,
    100% 10%,
    100% 90%,
    90% 100%,
    10% 100%,
    0% 90%,
    0% 10%
  );
`;

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
      <mesh ref={meshRef} position={[-2, 0, 0]}>
        <sphereGeometry args={[1, 50, 50]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};

const Three = () => {
  return (
    <>
      <Box h='50rem' w='100%' position='relative' backgroundColor='#000'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Stars />
            <Sphere />
          </Suspense>
        </Canvas>
        <NotchedDiv
        //   h='50rem'
        //   w='50%'
        //   backgroundColor={colors.black}
        //   position='absolute'
        //   top='0'
        //   right='0'
        //   opacity='0.5'
        >
          <Box color='white'>
            <h2>Mars Facts</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis hic quos quaerat illo obcaecati harum alias repellat,
              quam minus libero.
            </p>
          </Box>
        </NotchedDiv>
      </Box>
    </>
  );
};

export default Three;
