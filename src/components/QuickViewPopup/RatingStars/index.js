import React from "react";
import styles from "./style.module.css";

const RatingStars = ({rating}) => {
  return (
    <div className={styles.ratingContainer}>
      <div class={styles.rating}>
        <a>
          <input name="stars" id="e5" type="radio" />
          <label for="e5">★</label>
        </a>
        <a>
          <input name="stars" id="e4" type="radio" />
          <label for="e4">★</label>
        </a>
        <a>
          <input name="stars" id="e3" type="radio" />
          <label for="e3">★</label>
        </a>
        <a>
          <input name="stars" id="e2" type="radio" />
          <label for="e2">★</label>
        </a>
        <a>
          <input name="stars" id="e1" type="radio" />
          <label for="e1">★</label>
        </a>
      </div>
      <span>{rating} of 5</span>
    </div>
  );
};

export default RatingStars;
