import React from 'react'
import styles from './style.module.css'

const BlackButton = ({title}) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.seeJournalBtn}>{title}</button>
    </div>
  );
}

export default BlackButton;