import React from "react";
import styles from "./Main.module.css";

export default function Main({ children }) {
  const { main } = styles;
  return (
    <main className={main}>
      {children}
    </main>
  );
}
