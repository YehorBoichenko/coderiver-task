/**
 * @file This file exports a Title React component
 * @module components/Title
 */

import React, { ReactNode } from "react";
import styles from "./Title.module.css";

/**
 * Props for the Title component
 */
interface TitleProps {
  /**
   * Child node(s) to be rendered within the Title component
   */
  children: ReactNode;
}

/**
 * A React component that renders a Title
 * @param {TitleProps} props - props for the Title component
 * @returns {JSX.Element} - Rendered Title component
 */
export default function Title({ children }: TitleProps): JSX.Element {
  return <h2 className={styles.title}>{children}</h2>;
}
