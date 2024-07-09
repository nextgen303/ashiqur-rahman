import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Button from "./Button";
import ProfileImg from "../assets/images/home/ashiqur-rahman.jpg";

gsap.registerPlugin(ScrollTrigger);

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
  const textRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "words" });
    gsap.set(splitText.words, { color: "#888", opacity: 0, scale: 0.8 });

    gsap.fromTo(
      splitText.words,
      { color: "#888", opacity: 0, scale: 0.8 },
      {
        color: "#000",
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );

    return () => {
      splitText.revert();
    };
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.08"
      className="py-10 px-20 max-sm:px-5 z-50 rounded-tl-3xl rounded-tr-3xl bg-[#F3F3F5]"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h1
          ref={textRef}
          className="transition-all duration-600 ease-in-out text-4xl max-md:text-xl leading-[50px] py-20"
        >
          As a web developer, I specialize in delivering high-quality,
          professional websites tailored to meet the unique needs of each
          client. With a keen understanding of both design principles and
          technical expertise, I ensure that every website I create not only
          looks stunning but also functions flawlessly.
        </h1>

        <div className="w-full flex max-sm:flex-col gap-5 border-t mt-2 pt-10 border-[#0000005b]">
          <div className="w-[80%] max-sm:w-full">
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
