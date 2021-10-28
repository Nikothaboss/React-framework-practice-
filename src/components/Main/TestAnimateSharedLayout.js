import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// const StyledSmallItem = styled.div`
//   background: white;
//   color: black;
// `;

// const StyledLargeItem = styled.div`
//   background: black;
//   color: white;
// `;

const TestAnimateSharedLayout = () => {
  return (
    <AnimateSharedLayout>
      <motion.div>
        <Item />
      </motion.div>
    </AnimateSharedLayout>
  );
};

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)} className='upper'>
      <motion.div layout>
        <motion.h2 layout>hello</motion.h2>
      </motion.div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.div>
  );
};

const Content = () => {
  return (
    <>
      <motion.div
        className='my-card'
        layout
        initial={{ x: '100%' }}
        animate={{ x: 'calc(100vw - 50%)' }}
        exit={{ width: 0, height: 0 }}
      >
        <h2>Large Item</h2>
        <h2>Large Item</h2>
        <h2>Large Item</h2>
      </motion.div>
    </>
  );
};

export default TestAnimateSharedLayout;
