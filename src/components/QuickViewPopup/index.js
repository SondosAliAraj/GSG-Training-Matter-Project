import React, { useState } from "react";
import styles from "./style.module.css";
import { productsArray } from "./Response";
import Modal from "react-modal";
import BlackButton from "../BlackButton";
import RatingStars from "./RatingStars";
import Size from "./Size";
import ItemQuantity from "./ItemQuantity";
import AddToWishList from "./AddToWishList";
import { BiX } from "react-icons/bi";

const QuickViewPopup = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [Image, setImage] = useState(0);
  const { products } = productsArray;
  return (
    <div className={styles.QVPopupContainer}>
      <Modal isOpen={true}>
        {products.map((item) => (
          <>
            <div className={styles.headerContainer}>
              <p>{item.title}</p>
              <BiX />
              {/* <img
                className={styles.closeIcon}
                src="./images/rectangle-xmark-solid.svg"
                alt=""
              /> */}
            </div>
            <div className={styles.detailsContainer} key={item._id}>
              <div className={styles.box}>
                <div className={styles.row}>
                  <div className={styles.thumb}>
                    {item.images.map((img, index) => (
                      <img
                        src={img}
                        alt=""
                        key={index}
                        onClick={() => setImage(index)}
                      />
                    ))}
                  </div>
                  <div className={styles.bigImage}>
                    <img src={item.images[Image]} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.detailsDescription}>
                <h3>{item.title}</h3>
                <div className={styles.priceRatingContainer}>
                  <span>${item.price}</span>
                  <RatingStars rating={item.rating} />
                </div>
                <div className={styles.des}>
                  <h5>Description</h5>
                  <p>{item.description}</p>
                </div>
                <div className={styles.moreDetails}>
                  <h5>Artisan Employment</h5>
                  <p>{item.category}</p>
                </div>
                <div className={styles.moreDetails}>
                  <h5>Partnership</h5>
                  <p>{item.category}</p>
                </div>
                <div className={styles.moreDetails}>
                  <h5>In Collab</h5>
                  <p>{item.category}</p>
                </div>
                <Size />
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
      </Modal>
    </div>
  );
};

export default QuickViewPopup;
