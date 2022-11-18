import React from "react";
import styles from "./styles.module.css";

const SortBy = (props) => {
  const handleOnChangeEvent = (event) => {
    // console.log(event.target.value);
    props.filterValue(event.target.value);
  }
  return (
    <div>
      <div className={styles.productTypeContainer}>
        <h1 className={styles.productType}>{props.filterValue}</h1>
      </div>
      <div className={styles.selectorContainer}>
        <h4 className={styles.sortBy}>Sort by</h4>
        <select
          className={styles.selector}
          name="sortType"
          id="sortType"
          onChange={handleOnChangeEvent}
        >
          <option value="all">All</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
