import { motion } from "framer-motion";
import React from "react";
import HeroImg from ".././assets/images/home/hero-img.jpg";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className=" bg-[#eaeaea]  pb-28 pt-12 flex flex-col gap-12 w-full -mt-12 -z-10"
    >
      <div className=" max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto">
        <div className="top_content text-end pt-12">
          <h3>Web Design</h3>
          <h3>Web Development</h3>
          <h3>Website Speed Optimization</h3>
          <h3>Youtube Video SEO</h3>
        </div>

        <div className="bottom_content flex max-sm:flex-col max-sm:items-start max-sm:gap-1  items-end justify-between gap-12">
          <div className="left">
            <div className="text-[9vw] leading-7 font-bold flex items-center gap-4 max-md:mt-12">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8.5vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="w-[10vw] h-[6.7vw] rounded-md relative top-[0.8vw] overflow-hidden"
              >
               <img src={HeroImg} className="w-full h-full object-cover"/>
              </motion.div>
              <h1>WEB</h1>
            </div>
            <h1 className="text-[9vw] leading-[130px] font-bold">DEVELOPER </h1>
          </div>

          <div className="right w-[30%] max-sm:w-[100%]">
            <p>
              Let's collaborate to turn your vision into reality. <br />{" "}
              Together, we'll create a stunning website that not only meets but
              exceeds your expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
