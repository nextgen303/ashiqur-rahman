import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";
import ProfileImg from ".././assets/images/home/ashiqur-rahman.jpg"

const fadeInAnimationVariants = {
  initial: {
    width: 0,
  },
  animate: (index) => ({
    width: "100%",
    transition: {
      ease: [0.83, 0, 0.17, 1],
      duration: 1.2,
      delay: 0.2,
    },
  }),
};

const ShortDetails = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.03"
      className="py-20 px-20 max-sm:px-5 rounded-3xl -mt-10 -mb-5 z-50"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h1 className=' group transition-all duration-600 ease-in-out text-black  text-4xl max-md:text-xl leading-[50px] py-20'>
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            As a web developer, I specialize in delivering high-quality,
            professional websites tailored to meet the unique needs of each
            client. With a keen understanding of both design principles and
            technical expertise, I ensure that every website I create not only
            looks stunning but also functions flawlessly.
          </span>
        </h1>

        <div className="w-full flex max-sm:flex-col gap-5 border-t mt-2 pt-10 border-[#0000005b]">
          <div className="w-[80%] max-sm:w-ful">
            <h1 className="text-[4vw]">Hey there,</h1>
            <Button label="About Me" href="/about" className="custom-class" />
          </div>

          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="w-[20%] max-sm:w-[100%] h-[480px] rounded-3xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={ProfileImg}
              alt="AshiQur Rahman"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ShortDetails;
