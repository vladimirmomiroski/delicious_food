import React from "react";
import styles from "./Home.module.css";
import HomeProducts from '../Home/HomeProducts/HomeProducts'
import Introduction from "../../components/Layout/Introduction/Introduction";

export default function Home() {

  return (
    <div className={styles["home-wrapper"]}>
      <Introduction/>
      <HomeProducts />
    </div>
  );
}
