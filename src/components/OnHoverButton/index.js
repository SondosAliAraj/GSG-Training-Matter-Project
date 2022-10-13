import React, { useState } from "react";
import styles from './style.module.css'
const OnHoverButton = ({ title }) => {
    const [style, setStyle] = useState({ display: "none" });
  return (
    <div
      className={styles.btnContainer}
    //   style={{
    //     border: "1px solid gray",
    //     height: "10px",
    //   }}
    //   onMouseEnter={(e) => {
    //     setStyle({ display: "block" });
    //   }}
    //   onMouseLeave={(e) => {
    //     setStyle({ display: "none" });
    //   }}
    >
      <button className={styles.onHoverBtn} style={style}>{title}</button>
    </div>
  );
};

export default OnHoverButton;