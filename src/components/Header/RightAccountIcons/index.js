import React from 'react'
import styles from "./style.module.css"
import searchIcon from './search.svg'
import heartIcon from './heart.svg'
import shoppingBagIcon from './Shape.svg'
import useWindowSize from '../../../utils/useWindowSize'
import { Link } from 'react-router-dom'

const RightAccountIcons = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles.RightIconsContainer}>
      <Link to={`login`}>
        <a href="#" className={styles.item}>
          login
        </a>
      </Link>
      <img
        href="#"
        className={styles.item}
        src={searchIcon}
        alt="search icon"
      />
      <img href="#" className={styles.item} src={heartIcon} alt="heart icon" />
      <img
        href="#"
        className={styles.item}
        src={shoppingBagIcon}
        alt="shopping bag icon"
      />
    </div>
  );
}

export default RightAccountIcons;