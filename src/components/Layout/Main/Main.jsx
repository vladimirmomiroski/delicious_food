import React, { useContext } from "react";
import ReactDom from "react-dom";
import styles from "./Main.module.css";
import BackdropLoading from "../../Loading/BackdropLoading";
import Loading from "../../Loading/Loading";
import { Context } from "../../../context-food/context-food";


export default function Main({ children }) {
  const { main } = styles;

  const { loading } = useContext(Context)
  return (
    <main className={main}>
      {children}
      {loading &&
          ReactDom.createPortal(
            <BackdropLoading />,
            document.getElementById("backdrop-loading")
          )}
        {loading &&
          ReactDom.createPortal(
            <Loading />,
            document.getElementById("loading")
          )}
    </main>
  );
}
