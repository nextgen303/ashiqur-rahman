import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-auto mt-12 flex flex-col gap-12 w-full">
      <div className="top_content text-end mt-12">
        <h3>Web Design</h3>
        <h3>Web Development</h3>
        <h3>Website Speed Optimization</h3>
        <h3>Youtube Video SEO</h3>
      </div>

      <div className="bottom_content flex items-end justify-between gap-12">
        <div className="left">
          <h1 className="text-9xl font-bold">WEB </h1>
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
