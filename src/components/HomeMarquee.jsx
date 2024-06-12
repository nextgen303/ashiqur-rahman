import React from "react";
import { motion } from "framer-motion";

const HomeMarquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.01"
      className="w-full py-10 -mt-6 pb-28 bg-[#000] rounded-tl-3xl rounded-tr-3xl text-white"
    >
      <div className="text flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold pr-10'
        >
          WEB DESIGN WEB DEVELOEPMENT SPEED OPTIMIZATION
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className='text-[16vw] leading-none font-["Founders Grotesk X-condensed"]  font-bold'
        >
          WEB DESIGN WEB DEVELOEPMENT SPEED OPTIMIZATION
        </motion.h1>
      </div>
    </div>
  );
};

export default HomeMarquee;
