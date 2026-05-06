// utils/animations.ts
import { Variants } from "framer-motion";

// Definindo a curva premium como uma constante para o TS não reclamar
const easePremium = [0.22, 1, 0.36, 1] as any;

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
    // MUDADO DE 'animate' PARA 'visible' para manter o padrão
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
    // MUDADO DE 'animate' PARA 'visible'
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
