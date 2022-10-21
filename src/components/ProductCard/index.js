import React,{useState} from "react";
import BlackButton from "../BlackButton";
import QuickViewPopup from "../QuickViewPopup";
import NewTag from "./NewTag";
import styles from "./style.module.css";
import Modal from "react-modal";

const ProductCard = ({ img, description, price }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.Card}>
        <img className={styles.productImage} src={img} alt="product img" />
        <NewTag tagTitle="new" />
        <div className={styles.QVBtn}>
          {/* <BlackButton title="quickView" /> */}
          <button
            className={styles.quickViewBtn}
            onClick={() => setModalIsOpen(true)}
          >
            quick view
          </button>
          {/* <QuickViewPopup isOpen={modalIsOpen}/> */}
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
              style={
                {
                  overlay: {
                    backgroundColor: 'grey'
                }}
              }
            >
              <button
                className={styles.closeBtn}
                onClick={() => setModalIsOpen(false)}
              >
                X
              </button>
              <QuickViewPopup />
            </Modal>
          </div>
        </div>
        <p className={styles.productDescription}>{description}</p>
        <p className={styles.productPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
