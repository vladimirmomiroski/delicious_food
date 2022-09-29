import React from "react";
import styles from "./Home.module.css";
import HomeProducts from '../Home/HomeProducts/HomeProducts'

export default function Home() {
  return (
    <div className={styles["home-wrapper"]}>
      <HomeProducts />
    </div>
  );
}
