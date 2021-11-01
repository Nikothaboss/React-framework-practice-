import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState } from 'react';

const CardContainer = styled(motion.div)`
  .card {
    cursor: pointer;
    position: relative;
    display: grid;
    justify-items: center;
    /* background: #def; */
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    .img-container {
      height: 350px;
      width: 100%;
      padding: 0;
      overflow: hidden;
      z-index: 9;
    }

    .card-description {
      width: 100%;
      z-index: 0;
    }
    div {
      font-size: 18px;
      /* padding: 0 15px; */
      display: grid;
      place-items: center;
      height: 150px;

      h2 {
        z-index: 99;
        margin-bottom: 1rem;
        /* color: #cf2626; */
        text-align: center;
        font-weight: 600;
        font-size: 24px;
      }

      p {
        z-index: 99;
        margin-bottom: 1rem;
        /* color: #f2f2f2; */
      }
    }

    /* &:after{
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #00000016;
            
        } */
  }
`;

const Card = ({ image, id, title }) => {
  const color = useColorModeValue('#3d3d3d', '#f2f2f2');
  const text = useColorModeValue('#f2f2f2', '#3d3d3d');
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const MotionBox = motion(Box);
  const openAnimation = {
    open: {
      y: 0,
      opacity: 1,
      height: '200px',
      transition: {
        y: {
          ease: 'easeOut',
          duration: 0.25,
        },
        opacity: {
          duration: '15s',
        },
        height: {
          duration: 0.25,
        },
      },
    },
    close: {
      y: -100,
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.25,
        },
      },
    },
  };

  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{}}
      onClick={toggleOpen}
    //   onMouseLeave={() => setTimeout(()=>{
    //       setIsOpen(false)
    //   }, 3000)}
    >
      <Tilt className='card' tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <motion.div className='img-container'>
          <img src={image} alt='' />
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              className='card-description'
              bg={color}
              key={id}
              variants={openAnimation}
              initial={{ y: -100, height: 0 }}
              animate={'open'}
              exit={'close'}
            >
              <Heading color={text}>
                {title.length < 40 ? title : `${title.substring(0, 40)}...`}
              </Heading>

              <Text color={text}>our desctiption</Text>
            </MotionBox>
          )}
        </AnimatePresence>
      </Tilt>
    </CardContainer>
  );
};

export default Card;
