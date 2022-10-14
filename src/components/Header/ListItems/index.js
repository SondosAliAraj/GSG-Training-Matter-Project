import React from 'react'
import styles from "./style.module.css"
import {FaAngleDown} from "react-icons/fa";

const ListItems = () => {
  const menuItems = ["shop", "fabric", "journal", "about"];
  return (
    <div className={styles.menuItems}>
      <h2>matter</h2>
      <div className={styles.toggleButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      {menuItems.map((item) => (
        <>
          <div className={styles.item}>
            {item}
            <FaAngleDown className={styles.arrowIcon} />
          </div>
        </>
      ))}
    </div>
  );
};

export default ListItems