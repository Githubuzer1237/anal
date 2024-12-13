import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from './Loader.module.scss';

const Loader = ({ showAnimation, onComplete }) => {
  const logoVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
  };

  const logoTransition = { duration: 1.5, ease: "easeInOut" };

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          className={s.fullscreen_animation}
          variants={logoVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={logoTransition}
          onAnimationComplete={onComplete}
        >
          <div className={s.logo_container}>
            <img src="/weblogo2.svg" alt="Logo" className={s.logo} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
