/**

Renders the 404 Not Found page with an image and a button to navigate back to the home page.
*/
import React from "react";
import styles from "./Notfound.module.css";
import NotFoundSvg from "../../assets/404.svg";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className={styles.bl_wrapper}>
      <img src={NotFoundSvg} alt="404 Not Found" />
      <Link className={styles.btn_home} to="/">
        Go HOME
      </Link>
    </div>
  );
};
