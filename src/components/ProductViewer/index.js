import React from "react";
import ProductCard from "../ProductCard";
import styles from "./style.module.css";
import { data } from "../../Response";
import TopicTitle from "../TopicTitle";

const ProductViewer = () => {
  return (
    <div className={styles.mainContainer}>
      <TopicTitle title="Featured" />
      <div className={styles.productsCardsContainer}>
        {data.map((item) => (
          <ProductCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductViewer;
