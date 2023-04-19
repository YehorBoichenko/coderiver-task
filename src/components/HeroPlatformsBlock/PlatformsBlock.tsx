import React from "react";
import PlatformsList from "../PlatformsBlock/Platforms";
import styles from "./PlatformsBlock.module.css";

/**
 * A component that renders a hero platform section with a list of available platforms.
 */
export function PlatformsBlock(): JSX.Element {
  return (
    <div>
      <PlatformsList />
      <p className={styles.platformsText}>App available</p>
    </div>
  );
}
