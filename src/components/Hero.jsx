import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl  mx-auto h-auto mt-12 flex flex-col gap-12 w-full">
      <div className="top_content text-end mt-12">
        <h3>Web Design</h3>
        <h3>Web Development</h3>
        <h3>Website Speed Optimization</h3>
        <h3>Youtube Video SEO</h3>
      </div>

      <div className="bottom_content flex items-end justify-between gap-12">
        <div className="left">
          <div className="text-9xl font-bold flex items-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "8.5vw" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
              className="w-[10vw] h-[6.7vw] rounded-md relative top-[0.8vw] overflow-hidden"
            >
              <img
                src="https://i.pinimg.com/564x/63/b6/5a/63b65aa0652a6500dcbfbbc458e3c218.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </motion.div>
            <h1>WEB</h1>{" "}
          </div>
          <h1 className="text-9xl font-bold">DEVELOPER </h1>
        </div>

        <div className="right w-[30%]">
          <p>
            Let's collaborate to turn your vision into reality. <br /> Together,
            we'll create a stunning website that not only meets but exceeds your
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;