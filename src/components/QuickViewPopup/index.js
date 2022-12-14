import React, { useContext, useCookies, useState } from "react";
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
import ProductImagesDetails from "../ProductImagesDetails";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import  productsContext from "../components/context/productsContext";

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
  const navigate = useNavigate();
  const [item, setItem] = useState([])
  // const products = useContext(productsContext);



  return (
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
                  <BlackButton
                    onClick={console.log("hiiiiii")}
                    title="Add to cart"
                  />
                  <button onClick={()=>localStorage.setItem('productId',JSON.stringify(item.id))}>Add to cart</button>
                </div>
                <div className={styles.addToWishList}>
                  <AddToWishList />
                </div>
              </div>
            </div>
          </div>
          <Link to={`/ProductDetailsPage/${item.id}`}>
            <BlackButton title="View Full product Details" />
          </Link>
        </>
      ))}
    </div>
  );
};

export default QuickViewPopup;
