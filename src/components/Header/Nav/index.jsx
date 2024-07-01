import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";

export default function Nav({ onLinkClick }) {
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
                <Link
                  to={href}
                  className={styles.link}
                  onClick={onLinkClick}
                >
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
            <motion.a
              href={href}
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              onClick={onLinkClick}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
