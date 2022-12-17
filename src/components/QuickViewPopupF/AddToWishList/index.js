import React from "react";
import styles from "./style.module.css";
import { BsQuestionSquare } from "react-icons/bs";

const AddToWishList = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.icon}>
        <BsQuestionSquare />
      </div>

      <a href="#" className={styles.button}>
        Add to wish list
      </a>
    </div>
  );
};

export default AddToWishList;
