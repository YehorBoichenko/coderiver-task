import React from "react";
import AndroidLogo from "../Logos/AndroidLogo/AndroidLogo";
import AppleLogo from "../Logos/AppleLogo/AppleLogo";
import styles from "./Platforms.module.css";

/**
 * Represents a list of platforms, currently including the Apple and Android platforms.
 */
export default function Platforms(): JSX.Element {
  return (
    <ul className={styles.platforms}>
      <li className={styles.platformsItem}>
        <AppleLogo />
      </li>
      <li className={styles.platformsItem}>
        <AndroidLogo />
      </li>
    </ul>
  );
}
