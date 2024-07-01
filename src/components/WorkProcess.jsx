import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./WorkProcess.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay, Navigation } from 'swiper/modules';


const workProcessData = [
  {
    number: "01",
    title: "Planning",
    description:
      "Define project scope, goals, and requirements. Create wireframes and mockups to visualize the layout and functionality.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Craft visually appealing and user-friendly interfaces. Ensure consistency with brand guidelines and optimize for usability.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Write clean, efficient code using modern web technologies. Implement responsive design and ensure cross-browser compatibility.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Conduct rigorous testing to identify and fix bugs. Perform usability testing to ensure the site or application meets user expectations.",
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "Deploy the website or application to the live server. Configure servers and databases for optimal performance and security.",
  },
  {
    number: "06",
    title: "Maintenance",
    description:
      "Monitor site performance and security. Update content, plugins, and frameworks to maintain functionality and security.",
  },
];


const WorkProcess = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="work-process max-w-screen-2xl mx-auto px-20 max-sm:px-5 pb-36 pt-32  bg-[#F3F3F5]" ref={ref}>
      <div className="mx-auto max-w-screen-2xl">
        <div className="titles flex justify-between mb-20">
          <h1 className="text-[4vw] w-1/3">Work Process</h1>
          <p className="w-1/3 max-sm:w-full pt-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            laboriosam a numquam, magni ipsam repellendus laborum minima dei ab
            eius earum
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Navigation]}
        
        navigation={true}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3.4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {workProcessData.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="service__list-box text-black rounded-lg  p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h4 className="number text-lg font-bold">{item.number}</h4>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-base">{item.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkProcess;
