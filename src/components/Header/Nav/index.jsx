import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";

export default function Index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link to={href} className={styles.link}>
                  {title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              <a href={href} className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
