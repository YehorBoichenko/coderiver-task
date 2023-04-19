import { useEffect } from "react";
import styles from "./AppLogo.module.css";
import React from "react";
import { Link } from "react-router-dom";

/**
 * Renders the application logo as a link to the landing page.
 */
export function AppLogo(): JSX.Element {
  /**
   * Plays the logo animation continuously.
   */
  useEffect(() => {
    function playAnimation() {
      const logoRef = document.querySelector(
        `.${styles.brandLogo}`
      ) as HTMLElement | null;
      if (logoRef) {
        logoRef.className = `${styles.brandLogo} ${styles.brandLogoAnimation}`;

        setTimeout(() => {
          logoRef.className = `${styles.brandLogo}`;
          setTimeout(playAnimation, 12000);
        }, 2000);
      }
    }
    playAnimation();
  }, []);

  /**
   * Handles the mouse over event for the logo element.
   */
  function handleLogoMouseOver() {
    const logoRef = document.querySelector(
      `.${styles.brandLogo}`
    ) as HTMLElement | null;
    if (logoRef) {
      logoRef.className = `${styles.brandLogo} ${styles.brandLogoAnimation}`;

      setTimeout(() => {
        logoRef.className = `${styles.brandLogo}`;
      }, 2000);
    }
  }

  return (
    <Link to="/" className={styles.brandLogo} onMouseOver={handleLogoMouseOver}>
      Landing
    </Link>
  );
}
