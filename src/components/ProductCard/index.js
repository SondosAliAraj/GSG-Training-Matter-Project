import React from "react";
import NewTag from "./NewTag";
import styles from "./style.module.css";

const ProductCard = ({ img, description, price }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Card}>
        <img id={styles.productImage} src={img} alt="product img" />
        <NewTag tagTitle="new" />
        {/* <OnHoverButton title="quick view" /> */}
        {/* <div
          className={style.btnContainer}
          style={{
            border: "1px solid gray",
            height: "10px",
          }}
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <button className={styles.quickViewBtn} style={style}>
            quick view
          </button>
        </div> */}
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
