import React from "react";
import styles from "./HeroTitleBlock.module.css";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
/**
 * A component that renders a hero title with a label and asterisk.
 */
export function HeroTitleBlock(): JSX.Element {
  return (
    <Fade direction="left" triggerOnce={true}>
      <h1 className={styles.heroTitle}>
        Choose your winter{" "}
        <motion.div
          animate={{ rotate: [15, -10, 15] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={styles.heroLabel}
        >
          look<sup className={styles.heroLabelStarred}>*</sup>
        </motion.div>{" "}
        apparel
      </h1>
    </Fade>
  );
}
