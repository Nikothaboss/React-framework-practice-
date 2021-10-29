import Tilt from 'react-parallax-tilt';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useState } from "react"


const CardContainer = styled(motion.div) `
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
        div {
            font-size: 18px;
            padding: 0 15px;
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

        &:after{
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: #00000016;
            
        }

    }  

` 


const Card = ({image, id, title}) => {
    const color = useColorModeValue('#3d3d3d', '#f2f2f2');
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => setIsOpen(!isOpen)
    const MotionBox = motion(Box)
    const openAnimation = {
        open : {
            y: 0, 
            opacity: 1,
            height: "200px",
            transition: {
                y: {
                    ease: "easeOut",
                    duration: .5
                },
                opacity: {
                    duration: "15s"
                },
                height: {
                    duration: .25
                }

            }
        },
        close: {
            y: 100,
            opacity: 0,
            height: 0,
            transition: {
                height: {
                    duration: .5,
                }
            }
        }
    }

    return (
        <CardContainer whileHover={{ scale: 1.04 }} whileTap={{ scale: 1 }} transition={{}} onClick={toggleOpen}>
            <Tilt
            className='card'
            tiltMaxAngleX={3}
            tiltMaxAngleY={7}
            glareEnable={true}
            
            >
                <img src={image} alt='' />
                <AnimatePresence>
                    {isOpen && (
                    <MotionBox
                        key={id}
                        variants={openAnimation}
                        initial={{y: -100, height: 0}}
                        animate={"open"}
                        exit={"close"}
                    
                        >
                        <Heading class='text' color={color}>{title}</Heading>
                        <Text color={color} class='text'>our desctiption</Text>
                    </MotionBox>)}
                </AnimatePresence>
            </Tilt>
        </CardContainer>
    )
}

export default Card
