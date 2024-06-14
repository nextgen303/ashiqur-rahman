import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { perspective, slideIn } from "./anim";
import { links, footerLinks } from "./data";

export default function Index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.a
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className={styles.link}
              >
                {title}
              </motion.a>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              href={href}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              className={styles.footerLink}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
