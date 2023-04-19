/**

A button component that displays a close icon and triggers a function to close a modal when clicked.
*/
import React from "react";
import { GrClose } from "react-icons/gr";
import styles from "./CloseMenuButton.module.css";
interface CloseMenuBtnProps {
  /** A function that will be called when the close button is clicked */
  closeModal: () => void;
}

export default function CloseMenuButton({
  closeModal,
}: CloseMenuBtnProps): JSX.Element {
  return <GrClose className={styles.closeIcon} onClick={closeModal} />;
}
