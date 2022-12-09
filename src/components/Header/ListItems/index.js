import React from 'react'
import styles from "./style.module.css"
import {FaAngleDown} from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListItems = () => {
  const menuItems = ["shop", "fabric", "journal", "about"];
  return (
    <div className={styles.menuItems}>
      <Link className={styles.backToHome} to={`/`}>
        <h2>matter</h2>
      </Link>
      <div className={styles.toggleButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      {menuItems.map((item) => (
        <>
          <Link className={styles.ProductsLink} to={`productListing`}>
            <div className={styles.item}>
              {item}
              <FaAngleDown className={styles.arrowIcon} />
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default ListItems