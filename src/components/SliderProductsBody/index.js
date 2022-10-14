import React from "react";
import styles from "./style.module.css";
import SliderArrow from "./SliderArrow";

const SliderProductsBody = () => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.coverImageContainer}>
        <img className={styles.coverImage} src={"./cover1.png"} alt="cover" />
      </div>
      <div className={styles.LeftRightSlidersContainer}>
        <div className={styles.LeftArrowSlider}>
          <SliderArrow />
        </div>
        <div className={styles.Description}>
          <p>Perfume Tips Tricks</p>
          <a href="#" id={styles.shopNowBtn}>
            shop now
          </a>
        </div>
        <div className={styles.RightArrowSlider}>
          <SliderArrow />
        </div>
      </div>
    </div>
  );
};

export default SliderProductsBody;
