export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 10 : -10,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    scale: 0.9,
    rotateY: direction < 0 ? 10 : -10,
  }),
}

export const contentVariants = {
  enter: {
    y: 20,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.08,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
}

export const itemVariants = {
  enter: { y: 15, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -15, opacity: 0 },
}