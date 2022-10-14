import React from "react";
import NewTag from "./NewTag";
import styles from "./style.module.css";

const ProductCard = ({ img, description, price }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Card}>
        <img id={styles.productImage} src={img} alt="product img" />
        <NewTag tagTitle="new" />
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
