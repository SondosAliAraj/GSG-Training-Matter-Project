import React from "react";
import SubscribeButton from "../SubscribeButton";
import styles from "./style.module.css";

const SubscribeToNewsletter = () => {
  return (
    <div className={styles.mainContainer}>
      <h4 className={styles.title}>Subscribe to newsletter</h4>
      <div className={styles.submitContainer}>
        <input
          type="email"
          id={styles.email}
          name="email"
          placeholder=" Enter your email"
        />
        <SubscribeButton/>
      </div>
      <div className={styles.socialContactsContainer}>
        <img
          id={styles.icon}
          src="./images/FacebookIcon.svg"
          alt="facebook icon"
        />
        <img
          id={styles.icon}
          src="./images/TwitterIcon.svg"
          alt="facebook icon"
        />
      </div>
    </div>
  );
};

export default SubscribeToNewsletter;
