import React from "react";
import styles from "./style.module.css";

const ImageBar = ({imageSrc}) => {
  return (
    <div className={styles.imageBarContainer}>
      <div className={styles.Description}>
        <h1>Apparels</h1>
        <p>
          White Gold began gaining popularity in the early 1900’s as an
          alternative to platinum.
        </p>
      </div>

        <img className={styles.coverImage} src={imageSrc} alt="cover" />

    </div>
  );
};

export default ImageBar;
