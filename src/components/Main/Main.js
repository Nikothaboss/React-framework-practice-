import React from 'react';
import { useFetch } from '../../util/fetch';
import Loader from '../../util/Loader';
import { StyledMain } from './Main.styled';
import { HStack, VStack, Box } from '@chakra-ui/layout';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import Tilt from 'react-parallax-tilt';

const url = 'https://fakestoreapi.com/products?limit=8';

const Main = () => {
  const { response, loading } = useFetch(url);
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('#3d3d3d', '#f2f2f2');
  const bg = useColorModeValue('white.200', 'gray.800');

  if (loading) {
    return (
      <StyledMain>
        <header className='headline'>
          <h1>
            This is an example of light and dark mode in <br /> Chakra UI
          </h1>
        </header>
        <div className='when-loading'>{loading && <Loader />}</div>
      </StyledMain>
    );
  }
  return (
    <Box bg={bg}>
      <StyledMain>
        <header className='headline'>
          <h1>
            This is an example of light and dark mode in <br /> Chakra UI
          </h1>
        </header>
        {/* {loading && <Loader />} */}
        <article className='cards-container'>
          {response.map((item) => {
            const { id, title, image } = item;
            return (
              <Tilt
                className='card'
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                glareEnable={true}
              >
                <img src={image} alt='' />
                <Box key={id} color={color}>
                  <h3>{title}</h3>
                  <p>our desctiption</p>
                </Box>
              </Tilt>
            );
          })}
        </article>
      </StyledMain>
    </Box>
  );
};

export default Main;
