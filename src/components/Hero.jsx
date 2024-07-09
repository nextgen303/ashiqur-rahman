import React, { useState } from "react";

const Hero = () => {
  const defaultImage = 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const [currentImage, setCurrentImage] = useState(defaultImage);

  const images = {
    'Web Design': 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Web Development': 'https://cdn.dribbble.com/userupload/6319486/file/original-4683d74d52c0e212e1c5b9237e0f88c0.png?resize=1200x900&vertical=center',
    'Website Speed Optimization': 'https://cdn.dribbble.com/users/282315/screenshots/16955669/media/bca5465b5ff5c9749a4d857e5b208c62.png?resize=1200x900&vertical=center'
  };

  const handleMouseEnter = (title) => {
    setCurrentImage(images[title]);
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="pb-16 pt-24 gap-12 w-full -mt-24 -z-10 bg-[#F3F3F5]"
    >
      <div className="max-w-screen-2xl px-20 max-xl:px-10 max-sm:!px-3 mx-auto">
        <div className="flex flex-col pt-12">
          <div className="magnetic-effect flex flex-col items-end gap-2 text-xl rotate-6">
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

          <div className="pt-12 flex max-xl:flex-col gap-10 max-md:gap-3">
            <h1 className="font-black pb-4 text-[80px] leading-[80px] max-lg:leading-none max-sm:!text-[44px]">
              Innovate. <br /> Differentiate. <br /> Grow.
            </h1>

            <div className="h-[400px] max-md:h-full w-full object-cover rounded-2xl overflow-hidden change-image">
              <img src={currentImage} alt="" className="transition-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
