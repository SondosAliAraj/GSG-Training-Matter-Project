import React from "react";
import CopyRightPart from "./CopyRightPart";
import FooterList from "./FooterList";
import styles from "./style.module.css";
import SubscribeButton from "./SubscribeButton";
import SubscribeToNewsletter from "./SubscribeToNewsletter";

const Footer = () => {
  const categoriesArray = [
    "About us",
    "Testimonials",
    "Contact ",
    "Journal",
    "Privacy Policy ",
  ];
  const partnersArray = [
    "Support",
    "Shipping & Returns",
    "Size Guide ",
    "Product Care",
  ];
  const contactUsArray = [
    "26A Pagoda St, TANGS,",
    "Singapore, 058187",
    "+65 6221 5462 ",
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.footerListsContainer}>
        <FooterList title="categories">
          {categoriesArray.map((item) => (
            <div className={styles.listItem}>{item}</div>
          ))}
        </FooterList>
        <FooterList title="partners">
          {partnersArray.map((item) => (
            <div className={styles.listItem}>{item}</div>
          ))}
        </FooterList>
        <FooterList title="contact us">
          {contactUsArray.map((item) => (
            <div className={styles.listItem}>{item}</div>
          ))}
        </FooterList>

        <SubscribeToNewsletter />
      </div>
      <CopyRightPart />
    </div>
  );
};

export default Footer;
