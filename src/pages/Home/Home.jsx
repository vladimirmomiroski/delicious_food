import React from "react";
import styles from "./Home.module.css";
import HomeProducts from '../Home/HomeProducts/HomeProducts'
import Pagination from "../../components/Layout/Pagination/Pagination";
import FilterByTags from "../../components/Layout/FilterByTags/FilterByTags";

export default function Home() {

  return (
    <div className={styles["home-wrapper"]}>
      <FilterByTags/>
      <HomeProducts />
      <Pagination/>
    </div>
  );
}
