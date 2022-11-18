import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Size from "../../QuickViewPopup/Size";

const CategoriesList = (props) => {
  // const [category, setCategory] = useState("");
  // const list = [
  //   "Smart Phones",
  //   "Laptops",
  // ];

  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState([]);
  const getData = async () => {
    setIsFetch(true);
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    // console.log(response, "res");

    setData(response.data);
    setIsFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isFetch) {
    return "Data is Loading ...";
  }
  console.log({ data });


  const handleOnClickEvent = (value) => {
    // console.log("categoryId", value);
      
      props.filterValue(value);
    };
  return (
    <>
      <div className={styles.filterResetContainer}>
        <p>Filter</p>
        <p onClick={() => handleOnClickEvent("all products")}>Reset</p>
      </div>

      <div
        className={styles.categoryItem}
        onClick={() => handleOnClickEvent(data[0])}
      >
        {data[0]}
      </div>
      <div
        className={styles.categoryItem}
        onClick={() => handleOnClickEvent(data[1])}
      >
        {data[1]}
      </div>
      <div
        className={styles.categoryItem}
        onClick={() => handleOnClickEvent(data[2])}
      >
        {data[2]}
      </div>
      <div
        className={styles.categoryItem}
        onClick={() => handleOnClickEvent(data[3])}
      >
        {data[3]}
      </div>

      <Size availableSize={[1, 2, 3, 4]} />

      {/* {data.map((item, index) => {
        return (
          <div key={ index} className={styles.categoriesContainer}onClick={handleOnClickEvent(item)}>
            <div  className={styles.categoryItem} >
              {item}
            </div>
          </div>
        );
      })} */}
    </>
  );
};

export default CategoriesList;
