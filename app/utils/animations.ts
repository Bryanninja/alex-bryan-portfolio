// utils/animations.ts
import { Variants, BezierDefinition } from "framer-motion";

// 1. Definindo a curva premium com o tipo correto.
// Isso substitui o "as any" e o TS entende perfeitamente os 4 números.
const easePremium: BezierDefinition = [0.22, 1, 0.36, 1];

export const containerStagger: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const stepVariants: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easePremium,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.4,
      ease: easePremium,
    },
  },
};

export const childFadeUp: Variants = {
  initial: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easePremium,
    },
  },
};

export const imageReveal: Variants = {
  initial: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      delay: 0.6,
      ease: easePremium,
    },
  },
};

export const slowFadeIn: Variants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.8,
      delay: 0.8,
      ease: "linear",
    },
  },
};

export const itemScale: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: easePremium,
    },
  },
};
