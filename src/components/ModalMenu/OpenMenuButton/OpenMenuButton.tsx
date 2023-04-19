/**

Represents a button used to open a menu.
@param openModal - A function that opens the menu.
@returns A React component that renders the open menu button.
*/
import { GrMenu } from "react-icons/gr";
import React from "react";
import styles from "./OpenMenuButton.module.css";
interface Props {
  openModal: () => void;
}

export function OpenMenuButton({ openModal }: Props): JSX.Element {
  return <GrMenu className={styles.openIcon} onClick={openModal} />;
}
