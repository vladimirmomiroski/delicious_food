import React, { useContext } from "react";
import { Context } from "../../../context-food/context-food";
import styles from "./Pagination.module.css";
import PaginationButton from "./PaginationButton/PaginationButton";

export default function Pagination() {

    const { dataState } = useContext(Context)

  return <div className={styles['buttons-wrapper']}>
    {Array.from(Array(dataState.numberForButtons).keys()).map(number => (
    <PaginationButton activeClass={dataState.page} key={number} number={number} />
  ))}
  </div>;
}
