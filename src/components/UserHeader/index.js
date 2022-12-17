import React from 'react'
import styles from "./style.module.css"
import ListItems from './ListItems'
import RightAccountIcons from './RightAccountIcons'
const UserHeader = () => {
  return (
    <div className={styles.headerContainer}>
         <ListItems/>
         <RightAccountIcons/>
    </div>
  )
}

export default UserHeader;