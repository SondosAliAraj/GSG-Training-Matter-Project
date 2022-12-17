import React from "react";
import styles from "./style.module.css";

const EdittedShopCard = ({ img}) => {
  return (
    <>
      <div className={styles.Card}>
        <img id={styles.productImage} src={img} alt="product img" />
        <p className={styles.description}>Lorem ipsum dolor sit amet</p>
      </div>
    </>
  );
};

export default EdittedShopCard;
