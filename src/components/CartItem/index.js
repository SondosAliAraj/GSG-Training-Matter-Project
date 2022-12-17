import React from "react";
import CartItemQuantity from "../CartItemQuantity";
import styles from "./style.module.css";

const CartItem = ({ image, title, price, quantity }) => {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.item}>
        <img className={styles.img} src={image} alt="" />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.price}>${price}</div>
      <div>
        <CartItemQuantity />
      </div>
      <img
        className={styles.removeIcon}
        src="https://assets.webiconspng.com/uploads/2017/01/Red-Trash-Transparent-Icon.png"
        alt="remove"
      />
    </div>
  );
};

export default CartItem;
