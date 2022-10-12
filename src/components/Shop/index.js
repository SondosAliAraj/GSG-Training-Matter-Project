import React from "react";
import ShopProductCard from "./ShopProductCard";
import TopicTitle from "../TopicTitle";
import styles from "./style.module.css";

const Shop = () => {
  const shopProductArray = [
    {
      img: "./images/pants.jpg",
      productType: "Pants",
    },
    {
      img: "./images/jumpsuits.jpg",
      productType: "Jumpsuits",
    },
    {
      img: "./images/tops.jpg",
      productType: "Tops",
    },
    {
      img: "./images/accessories.jpg",
      productType: "Accessories",
    },
  ];
  return (
    <>
      <TopicTitle title="Shop" />
      <div className={styles.cardsContainer}>
        {shopProductArray.map((item) => (
          <ShopProductCard {...item} />
        ))}
      </div>
    </>
  );
};

export default Shop;
