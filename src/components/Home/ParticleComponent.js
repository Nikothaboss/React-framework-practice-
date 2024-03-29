import React from 'react';
import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import Particles from 'react-tsparticles';
const ParticleComponent = () => {
  const colorMode = useColorMode();
  const particlesInit = (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  useEffect(() => {
    particlesInit();
    particlesLoaded();
  }, []);
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: `${colorMode.colorMode === 'light' ? '#f2f2f2' : '#1A202C'}`,
          },
        },
        fpsLimit: 40,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onHover: {
              enable: false,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: `${colorMode.colorMode === 'light' ? '#3d3d3d' : '#f2f2f2'}`,
          },
          links: {
            color: `${colorMode.colorMode === 'light' ? '#3d3d3d' : '#f2f2f2'}`,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleComponent;
