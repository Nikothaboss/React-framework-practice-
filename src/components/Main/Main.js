import React from 'react';
import { useFetch } from '../../util/fetch';
import Loader from '../../util/Loader';
import { StyledMain } from './Main.styled';
import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { motion } from 'framer-motion';
import Card from './card';
import { colors } from '../../app.styled';

const url = 'https://fakestoreapi.com/products?perPage=8&offset=8';

const pageAnimationVariant = {
  exit: {
    x: "-100%",
    transition: {ease: "easeInOut"}
  }
}

const Main = () => {
  const { response, loading } = useFetch(url);
  const MotionBox = motion(Box);

  const bg = useColorModeValue(`${colors.gradient}`, 'gray.800');

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
    <MotionBox bg={bg} variants={pageAnimationVariant} exit="exit">
      <StyledMain>
        <header className='headline'>
          <h1>
            This is an example of light and dark mode in <br /> Chakra UI
          </h1>
        </header>

        <motion.article
          className='cards-container'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {response.map((item) => {
            const { id, title, image } = item;
            return <Card key={id} id={id} title={title} image={image} />;
          })}
        </motion.article>
      </StyledMain>
    </MotionBox>
  );
};

export default Main;
