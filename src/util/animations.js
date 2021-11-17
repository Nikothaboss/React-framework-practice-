export const parentBoxVar = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const childrenBoxVar = {
  initial: {
    opacity: 0,
    height: 150,
    width: 250,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const stripesVariations = {
  initial: {
    background: '#b00b69',
    height: 10,
    width: 100,
    x: 100,
    y: -40,
    rotate: -45,
  },
};
