// src/components/Marquee.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ logos }) => {
  const marqueeVariants = {
    animate: {
      x: [0, -logos.length * 200], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div className="overflow-hidden whitespace-nowrap py-8">
      <motion.div
        className="flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto mx-4"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
