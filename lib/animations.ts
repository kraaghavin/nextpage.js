const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      bottom: "-10%",
      scale: 0.8,
      // delay: 0.5,
      ease: [0.1, 0.82, 0.165, 0.11],

    },
    animate: {
      opacity: 0.6,
      bottom: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      left: "20%",
      scale: 0.8,
      // delay: 0.5
    }
  },
  transition: {
    duration: 2
  }
};

export const animations = [
  slideRight
];
