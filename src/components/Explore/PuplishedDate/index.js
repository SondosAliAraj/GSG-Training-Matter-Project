import React from 'react'
import styles from './style.module.css'

const PuplishedDate = (props) => {
  return (
    <div className={styles.description}>
        <p>fieldtested &#183; {props.date}</p>
    </div>
  )
}

export default PuplishedDate;