import React from 'react'
import styles from "./style.module.css"

const ShopProductCard = ({img,productType}) => {
  return (
    <div className={styles.Card}>
      <img id={styles.productImage} src={img} alt="product img" />
      <div className={styles.typeTag}>{productType}</div>
    </div>
  );
}

export default ShopProductCard;