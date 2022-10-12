import React from 'react'
import styles from "./style.module.css"
import searchIcon from './search.svg'
import heartIcon from './heart.svg'
import shoppingBagIcon from './Shape.svg'

const RightAccountIcons = () => {
  return (
    <div className={styles.RightIconsContainer}>
      <a href='#' className={styles.item}>login</a>
      <img href="#" className={styles.item} src={searchIcon} alt="search icon"/>
      <img href="#" className={styles.item} src={heartIcon} alt="heart icon"/>
      <img href="#" className={styles.item} src={shoppingBagIcon} alt="shopping bag icon"/>

    </div>
  )
}

export default RightAccountIcons;