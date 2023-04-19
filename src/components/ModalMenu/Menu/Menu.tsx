import React from "react";
import { Link } from "react-router-dom";
import CloseMenuButton from "../CloseMenuButton/CloseMenuButton";
import { AppLogo } from "../../Logos/AppLogo/AppLogo";
import styles from "./Menu.module.css";

interface MenuProps {
  closeModal: () => void;
}

/**
 * Represents the Menu component which displays a modal window containing the website menu.
 * @param {object} props - The props object containing closeModal function.
 * @param {Function} props.closeModal - The function to close the menu modal.
 * @returns {JSX.Element} - The JSX code for the Menu component.
 */
export function Menu({ closeModal }: MenuProps): JSX.Element {
  /**
   * Handles click on the menu items and calls the closeModal function if the click is on a Link component.
   * @param {React.MouseEvent<HTMLUListElement, MouseEvent>} event - The click event on the menu list.
   */
  function handleMenuItemClick(
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) {
    if ((event.target as HTMLElement).nodeName === "A") {
      closeModal();
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.wrapper}>
        <AppLogo />
        <CloseMenuButton closeModal={closeModal} />
      </div>
      <ul className={styles.menuList} onClick={handleMenuItemClick}>
        <li className={styles.menuItem}>
          <Link to="/clothes">Clothes</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/sneakers">Sneakers</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/bags">Bags</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/accessorize">Accessories</Link>
        </li>
      </ul>
    </div>
  );
}
