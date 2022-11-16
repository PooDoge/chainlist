import React from "react";
import { Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Header from "../header";
import styles from "../../styles/Home.module.css";
import classes from "./index.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Layout({ changeTheme, theme, children }) {
  const t = useTranslations("Common");
  const addNetwork = () => {
    window.open("https://github.com/ethereum-lists/chains", "_blank");
  };

  const addRpc = () => {
    window.open(
      "https://github.com/DefiLlama/chainlist/blob/main/constants/extraRpcs.json",
      "_blank"
    );
  };

  const url = '/logo.svg'

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          className={
            theme.palette.type === "dark"
              ? classes.containerDark
              : classes.container
          }
        >
          <div className={classes.copyContainer}>
            <div className={classes.copyCentered}>


            </div>
          </div>
          <div
            className={
              theme.palette.type === "dark"
                ? classes.listContainerDark
                : classes.listContainer
            }
          >
            <Header changeTheme={changeTheme} />
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
