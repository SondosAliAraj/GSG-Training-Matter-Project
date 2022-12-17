import React from "react";
import styles from "./style.module.css";
const ImageDetails = ({ image }) => {
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.bigImage}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
