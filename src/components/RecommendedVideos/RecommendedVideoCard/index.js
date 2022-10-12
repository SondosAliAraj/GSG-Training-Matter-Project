import React from "react";
import styles from "./style.module.css";

const RecommendedVideoCard = ({ imgSrc, description }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <img className={styles.imgPart} src={imgSrc} alt="video 1" />
        <p className={styles.descriptionPart}>{description}</p>
        <div className={styles.videoPlayerIcon}>
          <img src="./images/videoPlayerIcon.png" alt="video player icon" />
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideoCard;
