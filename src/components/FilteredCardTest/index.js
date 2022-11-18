import React, { useState } from "react";
import QuickViewPopup from "../QuickViewPopup";
import NewTag from "../ProductCard/NewTag";
import styles from "./style.module.css";
import Modal from "react-modal";

const FilteredCardTest = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  category,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Card}>
        <img className={styles.productImage} src={image} alt="product img" />
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
                image={image}
                price={price}
                description={description}
                rating={rating.rate}
                category={category}
              />
            </Modal>
          </div>
        </div>
        <p className={styles.productDescription}>{title}</p>
        <p className={styles.productPrice}>${price}</p>
      </div>
    </div>
  );
};

export default FilteredCardTest;
