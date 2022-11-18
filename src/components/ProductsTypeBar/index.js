import React from "react";
import SortBy from "../FilteredProductsBox/SortBy";
import styles from "./style.module.css";

const ProductsTypeBar = ({ productType }) => {
  return (
    <div className={styles.productTypeContainer}>
      <h4 className={styles.productType}>{productType}</h4>
      <SortBy />
    </div>
  );
};

export default ProductsTypeBar;
