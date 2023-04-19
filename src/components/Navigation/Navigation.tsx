import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

/**
 * A component that renders a navigation menu with links to different pages or sections.
 * @returns The rendered Navigation component.
 */
export const Navigation: React.FC = () => {
  return (
    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <Link to="/clothes">Clothes</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/sneakers">Sneakers</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/bags">Bags</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/accessorize">Accessorize</Link>
      </li>
    </ul>
  );
};
