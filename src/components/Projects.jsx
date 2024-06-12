import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import styles from "./project.module.scss"; // Import the CSS module

const images = [
  "https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/287662/pexels-photo-287662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3747096/pexels-photo-3747096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/287662/pexels-photo-287662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3747096/pexels-photo-3747096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/287662/pexels-photo-287662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3747096/pexels-photo-3747096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3521937/pexels-photo-3521937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Projects = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
};

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <img src={src} alt={`image ${i}`} className={styles.image} />
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
