import React from "react";
import styles from "./style.module.css";
import { productsArray } from "./Response";
import BlackButton from "../BlackButton";
import RatingStars from "./RatingStars";
import Size from "./Size";
import ItemQuantity from "./ItemQuantity";
import AddToWishList from "./AddToWishList";
import Details from "./Details";
import ImageDetails from "./ImageDetails";
import {data} from '../../api'

const QuickViewPopup = ({
  title,
  image,
  images,
  price,
  description,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  size
}) => {
  const { products } = productsArray;
  return (
    <div className={styles.QVPopupContainer}>
      {products.map((item) => (
        <>
          <div className={styles.headerContainer}>
            <p>{title}</p>
          </div>
          <div className={styles.detailsContainer} key={item._id}>
            <ImageDetails image={image} />
            <div className={styles.detailsDescription}>
              <h3>{title}</h3>
              <div className={styles.priceRatingContainer}>
                <span>${price}</span>
                <RatingStars rating={rating} />
              </div>
              <div className={styles.des}>
                <h5>Description</h5>
                <p>{description}</p>
              </div>
              <Details title="Category" info={category} />
              <Details title="Brand" info={brand} />
              <Details title="Stock" info={stock} />
              <Details title="Discount" info={discountPercentage + `%`} />
              {/* <Size availableSize={size} /> */}
              <div className={styles.footerContainer}>
                <ItemQuantity />
                <div className={styles.addToCart}>
                  <BlackButton title="Add to cart" />
                </div>
                <div className={styles.addToWishList}>
                  <AddToWishList />
                </div>
              </div>
            </div>
          </div>
          <BlackButton title="View Full product Details" />
        </>
      ))}
    </div>
  );
};

export default QuickViewPopup;
