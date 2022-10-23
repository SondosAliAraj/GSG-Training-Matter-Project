import React, { useState } from "react";
import QuickViewPopup from "../QuickViewPopup";
import NewTag from "./NewTag";
import styles from "./style.module.css";
import Modal from "react-modal";

const ProductCard = ({
  title,
  images,
  price,
  description,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  size,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Card}>
        <img
          className={styles.productImage}
          src={thumbnail}
          alt="product img"
        />
        <NewTag tagTitle="new" />
        <div className={styles.QVBtn}>
          {/* <BlackButton title="quickView" /> */}
          <button
            className={styles.quickViewBtn}
            onClick={() => setModalIsOpen(true)}
          >
            quick view
          </button>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={{
                overlay: {
                  backgroundColor: "grey",
                },
              }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setModalIsOpen(false)}
              >
                X
              </button>
              <QuickViewPopup
                title={title}
                images={images}
                price={price}
                description={description}
                rating={rating}
                category={category}
                discountPercentage={discountPercentage}
                stock={stock}
                brand={brand}
                size={size}
              />
            </Modal>
          </div>
        </div>
        <p className={styles.productDescription}>{title}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
