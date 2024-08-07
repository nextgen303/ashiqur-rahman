import React from "react";
import { motion } from "framer-motion";
import { CiLocationArrow1 } from "react-icons/ci";

const HomeMarquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.01"
      className="w-full py-10 -mt-6 pb-32 pt-20 max-sm:pt-12 max-sm:pb-24 bg-[#000] rounded-tl-3xl rounded-tr-3xl text-white"
    >
      <div className="text flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className='text-[196px] max-lg:text-[120px] text-white  max-sm:!text-[96px] leading-none font-custom  font-bold pr-10'
        >
          WEB DESIGN  WEB DEVELOEPMENT SPEED OPTIMIZATION
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className='text-[196px] max-lg:text-[120px] max-sm:!text-[86px] leading-none font-custom font-bold'
        >
          WEB DESIGN WEB DEVELOEPMENT SPEED OPTIMIZATION
        </motion.h1>
      </div>
    </div>
  );
};

export default HomeMarquee;
