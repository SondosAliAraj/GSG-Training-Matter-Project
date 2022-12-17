import React, { useLocation } from "react";
import CartItem from '../components/CartItem'
import { data } from "../api";

const CartPage = () => {
    //   const location = useLocation();
    //   const itemId = location.pathname.split("/")[2];
  return (
      <div>
          <hr></hr>
      <h3>My Cart</h3>
      {/* <hr></hr> */}
      {/* <div className={styles.tableHeaderContainer}>
              <div className={styles.tableLabels}>item</div>
              <div className={styles.tableLabels}>price</div>
              <div className={styles.tableLabels}>quantity</div>
              <div className={styles.tableLabels}>remove</div>
            </div> */}
      {data.map((item) => {
        return <CartItem {...item} />;
      })}
    </div>
  );
}

export default CartPage;