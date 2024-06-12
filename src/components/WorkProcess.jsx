import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./WorkProcess.css";

const workProcessData = [
  {
    number: "01",
    title: "Application provision",
    description:
      "Simplifies software deployment, management, and scalability. Make app management effortless with us.",
  },
  {
    number: "02",
    title: "Hardware solutions",
    description: "Ensuring your business stays at the forefront of technology.",
  },
  {
    number: "03",
    title: "IT consultation",
    description:
      "Drive your success with strategic guidance and practical solutions, optimizing your technology for peak performance.",
  },
  {
    number: "04",
    title: "IT services",
    description:
      "From network management to cybersecurity, we cover all your tech needs.",
  },
  {
    number: "05",
    title: "IT services",
    description:
      "From network management to cybersecurity, we cover all your tech needs.",
  },
  {
    number: "06",
    title: "IT services",
    description:
      "From network management to cybersecurity, we cover all your tech needs.",
  },
  {
    number: "07",
    title: "IT services",
    description:
      "From network management to cybersecurity, we cover all your tech needs.",
  },

  {
    number: "08",
    title: "IT services",
    description:
      "From network management to cybersecurity, we cover all your tech needs.",
  },
];

const WorkProcess = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="work-process px-20 bg-[#eaeaea] pb-24" ref={ref}>
      <div className="mx-auto max-w-screen-2xl">
        <div className="titles flex justify-between">
          <h1 className="text-[4vw] w-1/3">Work Process</h1>
          <p className="w-1/3 pt-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            laboriosam a numquam, magni ipsam repellendus laborum minima dei ab
            eius earum
          </p>
        </div>

        <div className="services">
          {workProcessData.map((item, index) => (
            <motion.div
              key={index}
              className="service__list-box w-1/4"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h4 className="number">{item.number}</h4>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
