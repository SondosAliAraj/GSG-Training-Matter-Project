import React from 'react'
import styles from './style.module.css'


const FooterList = ({ title, children }) => {
  return (
    <div className={styles.mainContainer}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.listItem}>{children}</div>
    </div>
  );
};

export default FooterList;