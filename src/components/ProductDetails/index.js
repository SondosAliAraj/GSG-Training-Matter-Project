import React, { useContext } from "react";
import styles from "./style.module.css";
import { productsArray } from "../QuickViewPopup/Response";
import BlackButton from "../BlackButton";
import RatingStars from "./RatingStars";
import ItemQuantity from "./ItemQuantity";
import AddToWishList from "./AddToWishList";
import Details from "./Details";
import ProductImagesDetails from "../ProductImagesDetails";
import MoreDetails from "./MoreDetails";
import ImageSlider from "../ImageSlider";
// import  productsContext from "../components/context/productsContext";

const ProductDetails = ({
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

  const slide = [{
    url: "./images/sliderImg7.png",
  }];

  return (
    <>
      <div className={styles.QVPopupContainer}>
        {products.map((item) => (
          <>
            <div className={styles.headerContainer}>
              <p>{title}</p>
            </div>
            <div className={styles.detailsContainer} key={item._id}>
              <ProductImagesDetails images={images} />
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
                <MoreDetails />
              </div>
            </div>
          </>
        ))}
      </div>
      {/* <img src="../images/sliderImg3.png" alt=""/> */}
    </>
  );
};

export default ProductDetails;
