import React from 'react'
import PuplishedDate from '../PuplishedDate';
import styles from "./style.module.css"


const PostCard = ({title,description,image,children}) => {
  return (
      <div className={styles.cardContainer}>
          <PuplishedDate date="19 January, 2017" />
          {children}
          {/* <h3 className={styles.title}>{title}</h3>
          <p className={styles.description} >{description}</p>
          <img className={styles.postImage} src={image} /> */}
          
    </div>
  )
}

export default PostCard;