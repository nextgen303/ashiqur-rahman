import { motion } from "framer-motion";
import React from "react";
import Button from "./Button";

const fadeInAnimationVariants = {
  initial: {
    width: 0,
  },
  animate: (index) => ({
    width: "50%",
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
      className="py-20 px-20 bg-[#eaeaea] rounded-3xl -mt-10 -mb-5 z-50"
    >
      <h1 className=' group transition-all duration-600 ease-in-out text-black font-["Neue_Montreal"] text-[3.5vw] font-medium py-20 leading-[4vw]'>
        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          As a web developer, I specialize in delivering high-quality,
          professional websites tailored to meet the unique needs of each
          client. With a keen understanding of both design principles and
          technical expertise, I ensure that every website I create not only
          looks stunning but also functions flawlessly.
        </span>
      </h1>

      <div className="w-full flex gap-5 border-t mt-2 pt-10 border-[#0000005b]">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our approach:</h1>
          <Button label="About Me" />
        </div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="w-1/2 h-[400px] lg:h-[440px] md:h-[400px] sm:h-[400px] xs:h-[400px] bg-black rounded-3xl overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="https://scontent.fird6-1.fna.fbcdn.net/v/t39.30808-6/418816837_432172515799215_2459863824828881533_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGCAsEAmoPd-n7ywXu514O8NNTI1CFdfhk01MjUIV1-GZ8qNC8aZ4KK9wPIiN4tIqgXvTqDqA4qTgi49XjRxTvG&_nc_ohc=8MzeNrWBxQgQ7kNvgEtHtFM&_nc_ht=scontent.fird6-1.fna&oh=00_AYAHIFfhk5y7yt1QPOwWPLhYZypuaW0EWeXAtpPaghcQdQ&oe=666D406B"
            alt="AshiQur Rahman"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ShortDetails;
