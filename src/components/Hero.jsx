import React from "react";
import { GoArrowRight } from "react-icons/go";
import Magnetic from "../components/MagnetEffect";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="pb-28 pt-12 flex flex-col gap-12 w-full -mt-12 -z-10 bg-[#F3F3F5]"
    >
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto">
          <div className="main flex flex-col items-center justify-center gap-4 pt-20">
          <h4 className="text-[18px]">Hi! There, i’m AshıQur Ʀahman, </h4>

          <h1 className="font-custom text-[10vw] max-md:text-[7vw] leading-[180px]">Web Designer </h1>
          <h1 className=" text-[10vw] leading-[100px] max-md:text-[7vw]  font-black font-custom"> & <span className=" text-stroke font-thin">Developer</span> </h1>

          <p className="pt-12 pb-3 text-center text-[24px]">
          I design beautifully simple things and i love what i do. <br />
          Just simple like that!
          </p>

          <Magnetic>
          <a
            href=""
            className="bg-[#000000f5] box-shadow-custom text-white w-[140px] px-6 py-2 rounded-full max-md:hidden flex items-center justify-between"
          >
            Let’s Talk
            <span className="mt-[2px]">
              <GoArrowRight />
            </span>
          </a>
        </Magnetic>
          </div>
      </div>
    </div>
  );
};

export default Hero;
