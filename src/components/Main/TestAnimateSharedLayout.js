import { auto } from '@popperjs/core';
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
    <motion.div onClick={() => setIsOpen(!isOpen)}>
      {!isOpen ? (
        <motion.div
          className='my-wrapper'
          initial={{ width: 100, height: 100 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
        >
          <h2>Header</h2>
        </motion.div>
      ) : (
        <motion.div
          className='my-wrapper'
          initial={{ width: 100, height: 100 }}
          animate={{
            width: 300,
            height: 300,
          }}
          exit={{ width: 100, height: 100 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
        >
          <h2>Header</h2>
          <Content />
        </motion.div>
      )}
    </motion.div>
  );
};

const Content = () => {
  return (
    <>
      <motion.div className='my-card'>
        <h2>Large Item</h2>
        <h2>Large Item</h2>
        <h2>Large Item</h2>
      </motion.div>
    </>
  );
};

export default TestAnimateSharedLayout;
