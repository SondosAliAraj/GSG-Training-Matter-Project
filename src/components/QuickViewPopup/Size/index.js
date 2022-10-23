import React from "react";
import styles from "./styles.module.css";

const Size = ({availableSize}) => {
  
  return (
    <>
      <p className={styles.title}>Size</p>
      <div className={styles.mainContainer}>
        <div className={styles.sizeContainer}>
          
            <>
              {availableSize.map((size) => (
                <div className={styles.sizeBox}>{size}</div>
              ))}
            </>
          
        </div>
        <p>Size Guidelines</p>
      </div>
      <p className={styles.modelDetails}>
        Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.
      </p>
    </>
  );
};

export default Size;
