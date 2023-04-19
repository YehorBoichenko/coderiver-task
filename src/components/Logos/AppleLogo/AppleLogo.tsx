import React from "react";
import styles from "./AppleLogo.module.css";
import { Fade } from "react-awesome-reveal";
/**
 * Renders an SVG of the Apple logo.
 */

export default function AppleLogo(): JSX.Element {
  return (
    <Fade direction="left" delay={400} triggerOnce={true} cascade>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        className={styles.appleLogo}
      >
        <g clipPath="url(#a)">
          <path d="M18.523.5c-1.532.103-3.17 1.015-4.185 2.244-.889 1.082-1.633 2.67-1.35 4.32-.254-.078-.484-.086-.76-.185-.753-.268-1.614-.557-2.683-.557-2.124 0-4.299 1.263-5.67 3.375-1.995 3.067-1.595 8.465 1.434 13.078.534.81 1.156 1.694 1.924 2.396.768.703 1.696 1.239 2.785 1.249.93.01 1.577-.3 2.16-.557.582-.257 1.124-.485 2.143-.49h.017c1.014-.008 1.54.216 2.109.473.57.258 1.21.582 2.143.574 1.11-.008 2.052-.616 2.835-1.367.783-.75 1.426-1.673 1.957-2.48.762-1.16 1.068-1.794 1.654-3.089a.541.541 0 0 0-.304-.726c-1.919-.725-3.014-2.423-3.172-4.218-.158-1.795.601-3.643 2.514-4.691a.543.543 0 0 0 .275-.365.543.543 0 0 0-.106-.445c-1.373-1.707-3.305-2.717-5.197-2.717-1.207 0-2.093.285-2.819.557-.12.046-.208.042-.32.084a5.827 5.827 0 0 0 1.873-1.552c.886-1.137 1.57-2.755 1.316-4.455A.54.54 0 0 0 18.523.5Zm-.574 1.282c-.036 1.091-.41 2.158-1.03 2.954-.65.835-1.742 1.413-2.8 1.586a4.872 4.872 0 0 1 1.062-2.903c.663-.801 1.76-1.38 2.768-1.637Zm-8.404 5.62c.871 0 1.57.226 2.312.49.742.263 1.525.573 2.447.573.9 0 1.613-.312 2.312-.574.698-.261 1.394-.49 2.43-.49 1.352 0 2.814.703 3.965 1.925-1.843 1.301-2.706 3.33-2.531 5.298a6.044 6.044 0 0 0 3.341 4.86c-.426.928-.706 1.542-1.333 2.498-.517.787-1.13 1.647-1.805 2.295-.675.647-1.39 1.057-2.11 1.063-.694.006-1.088-.2-1.687-.473-.6-.272-1.374-.584-2.565-.573-1.19.006-1.975.306-2.582.573-.608.268-1.006.48-1.705.473-.738-.006-1.423-.365-2.075-.962-.652-.597-1.24-1.411-1.755-2.194-2.835-4.32-3.063-9.395-1.435-11.897C5.963 8.45 7.86 7.402 9.545 7.402Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path d="M.5.5h27v27H.5z" />
          </clipPath>
        </defs>
      </svg>
    </Fade>
  );
}
