import React, { useState } from "react";
import styles from "./style.module.css";
import searchIcon from "./search.svg";
import heartIcon from "./heart.svg";
import shoppingBagIcon from "./Shape.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { data } from "../../../api";
import CartItem from "../../CartItem";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import axios from "axios";

const RightAccountIcons = () => {
  const [cookie, useCookie] = useCookies();
  const [userData, setUserData] = useState({});

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const myItems = data.slice(0, 2);

  useEffect(() => {
    axios
      .get(`http://restapi.adequateshop.com/api/users/${cookie.id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => setUserData(user.data));
  }, []);

  console.log(userData);
  return (
    <div className={styles.RightIconsContainer}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src={userData.profilepicture}
          alt="avatar"
        />
        <div className={styles.userName}>{userData.name}</div>
      </div>

      {/* <Link to={`/`}>
        <a href="#" className={styles.item}>
          logout
        </a>
      </Link> */}

      <Link to={""}>
        <img
          href="#"
          className={styles.item}
          src={searchIcon}
          alt="search icon"
        />
      </Link>
      <Link to={""}>
        <img
          href="#"
          className={styles.item}
          src={heartIcon}
          alt="heart icon"
        />
      </Link>
      
        <Link>
        <img
          href="#"
          className={styles.cartItem}
          src={shoppingBagIcon}
          alt="shopping bag icon"
          onClick={() => setModalIsOpen(true)}
        />
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: "grey",
              },
            }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setModalIsOpen(false)}
            >
              X
            </button>
            <h3>My Cart</h3>
            {/* <hr></hr> */}
            {/* <div className={styles.tableHeaderContainer}>
              <div className={styles.tableLabels}>item</div>
              <div className={styles.tableLabels}>price</div>
              <div className={styles.tableLabels}>quantity</div>
              <div className={styles.tableLabels}>remove</div>
            </div> */}
            {myItems.map((item) => {
              return <CartItem {...item} />;
            })}
          </Modal>
        </div>
        </Link>
        <div className={styles.numberOfItems}>0</div>
      
    </div>
  );
};

export default RightAccountIcons;
