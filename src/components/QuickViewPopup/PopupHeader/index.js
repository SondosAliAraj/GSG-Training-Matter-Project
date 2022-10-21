import React from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const PopupHeader = ({ productTitle }) => {
  return (
    <div className={styles.HeaderContainer}>
      <h3>{productTitle}</h3>
      <img className={styles.closeIcon} src="./images/rectangle-xmark-solid.svg" alt=""/> 
    </div>
  );
};

export default PopupHeader;
