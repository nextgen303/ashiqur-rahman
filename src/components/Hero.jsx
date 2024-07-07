import React from "react";
import { GoArrowRight } from "react-icons/go";
import Magnetic from "../components/MagnetEffect";
import Bgone from ".././assets/images/home/bg-1.png";
import Bgtwo from ".././assets/images/home/bg-2.png";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="pb-28 pt-12 flex flex-col gap-12 w-full -mt-12 -z-10 bg-[#F3F3F5]"
    >
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto overflow-hidden">
        <div className="main flex flex-col items-center justify-center gap-4 pt-20 relative">
          <h4 className="text-[18px] pb-14 max-lg:pb-0">Hi! There, i’m AshıQur Rahman, </h4>

          <h1 className="font-custom font-black text-[120px] leading-3 max-lg:text-[88px] max-lg:leading-none text-center max-sm:!text-[54px]">
            Web Designer
          </h1>
          <h1 className="text-[120px]  max-lg:leading-none  text-center max-lg:text-[88px] font-black font-custom max-sm:!text-[54px]">
            & <span className="text-stroke font-thin">Developer</span>
          </h1>

          <p className="pt-0 pb-3 text-center text-[24px] max-lg:pt-4 max-lg:text-[20px">
            I design beautifully simple things and i love what i do. <br />
            Just simple like that!
          </p>

          <Magnetic>
            <a
              href=""
              className="bg-[#000000f5] box-shadow-custom text-white w-[140px] px-6 py-2 rounded-full  flex items-center justify-between"
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
