import React from 'react'
import styles from './style.module.css'
const NewTag = (props) => {
  return (
    <div className={styles.tag}>{props.tagTitle}</div>
  )
}

export default NewTag;