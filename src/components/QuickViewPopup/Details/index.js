import React from "react";
import styles from "./style.module.css";

const Details = ({ title, info }) => {
  return (
    <div className={styles.moreDetails}>
      <h5>{title}</h5>
      <p>{info}</p>
    </div>
  );
};

export default Details;
