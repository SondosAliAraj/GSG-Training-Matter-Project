import React, { useState } from "react";
import styles from "./style.module.css";

const ItemQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  }
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  }
  return (
    <>
      <p className={styles.title}>quantity</p>
      <div className={styles.quantityContainer}>
        <div className={styles.minus} onClick={handleDecrement}>
          -
        </div>
        <div className={styles.quantityHolder}>{quantity}</div>
        <div className={styles.plus} onClick={handleIncrement}>
          +
        </div>
      </div>
    </>
  );
};

export default ItemQuantity;
