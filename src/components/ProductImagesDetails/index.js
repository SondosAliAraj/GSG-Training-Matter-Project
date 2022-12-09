import React, { useState } from "react";
import styles from "./style.module.css";
const ProductImagesDetails = ({ images }) => {
  const [Image, setImage] = useState(0);
  return (
    <div className={styles.box}>
      <div className={styles.row}>
        <div className={styles.thumb}>
          {images.map((img, index) => (
            <img src={img} alt="" key={index} onClick={() => setImage(index)} />
          ))}
        </div>
        <div className={styles.bigImage}>
          <img src={images[Image]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductImagesDetails;
