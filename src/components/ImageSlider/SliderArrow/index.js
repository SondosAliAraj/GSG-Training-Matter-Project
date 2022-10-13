import React from 'react'
import styles from './style.module.css'
import {FaChevronLeft} from "react-icons/fa";

const SliderArrow = () => {
  return (
    <div className={styles.ArrowSlider}><a><FaChevronLeft id={styles.arrow}/></a> </div> 
  )
}

export default SliderArrow;