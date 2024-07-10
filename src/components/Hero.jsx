import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const defaultImage =
    "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [currentImage, setCurrentImage] = useState(defaultImage);
  const imageRef = useRef(null);

  const images = {
    "Web Design":
      "https://cdn.dribbble.com/userupload/13680119/file/original-a37c15b2c599936b23eb39f93191ca5c.png?resize=1200x900",
    "Web Development":
      "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    "Website Speed Optimization":
      "https://cdn.dribbble.com/userupload/5083222/file/original-b90bbf415ae3395e19fcca96a9012800.png?resize=1200x675&vertical=center",
  };

  const handleMouseEnter = (title) => {
    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      onComplete: () => {
        setCurrentImage(images[title]);
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        });
      },
    });
  };

  useEffect(() => {
    gsap.set(imageRef.current, { opacity: 1, scale: 1 });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="pb-12 pt-24 gap-12 w-full -mt-24 -z-10 bg-[#F3F3F5]"
    >
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto">
        <div className="flex flex-col max-sm:pt-6">
          <div className="flex flex-col items-end gap-2 text-xl rotate-6 z-20">
            {Object.keys(images).map((title) => (
              <h2
                key={title}
                className="bg-black text-white px-5 rounded-md py-1"
                onMouseEnter={() => handleMouseEnter(title)}
              >
                {title}
              </h2>
            ))}
          </div>

          <div className="pt-14 flex max-xl:flex-col gap-10 max-md:gap-3">
            <h1 className="font-black pb-4 text-[80px] leading-[80px] max-lg:leading-none max-sm:!text-[44px]">
              Innovate. <br /> Differentiate. <br /> Grow.
            </h1>

            <div className="h-[400px] max-sm:h-[230px] w-full object-cover rounded-2xl overflow-hidden change-image pointer-events-none">
              <img
                ref={imageRef}
                src={currentImage}
                alt=""
                className="transition-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
