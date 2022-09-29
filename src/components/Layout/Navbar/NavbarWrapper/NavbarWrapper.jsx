import React from "react";
import styles from "./NavbarWrapper.module.css";

export default function NavbarWrapper({ children }) {
  return <div className={styles["navbar-wrapper"]}>{children}</div>;
}
