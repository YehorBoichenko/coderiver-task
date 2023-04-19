import React from "react";
import styles from "./BuyButton.module.css";
import { Link } from "react-router-dom";
/**
 * A button component that animates when the mouse cursor hovers over it.
 */
export function BuyButton(): JSX.Element {
  /**
   * An event handler that animates the button when the mouse cursor hovers over it.
   */
  function handleMouseOver(): void {
    const buttonRef = document.querySelector(
      `.${styles.buyButton}`
    ) as HTMLElement;
    buttonRef.className = `${styles.buyButton} ${styles.buyButtonAnimated}`;

    setTimeout(() => {
      buttonRef.className = `${styles.buyButton}`;
    }, 1000);
  }

  return (
    <Link to="/cart">
      <button
        type="button"
        className={styles.buyButton}
        onMouseOver={handleMouseOver}
      >
        Buy
      </button>
    </Link>
  );
}
