import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import CategoriesList from "./CategoriesList";
import SortBy from "./SortBy";
import axios from "axios";
import FilteredCardTest from "../FilteredCardTest";
import { data } from "../../api";
import "@fortawesome/fontawesome-free/js/all.js";

const FilteredProductsBox = () => {
  const ProductPerRow = 12;
  const [next, setNext] = useState(ProductPerRow);
  const handleMoreProducts = () => {
    setNext(next + ProductPerRow);
  };

  const [filterTextValue, setFilterTextValue] = useState("all products");
  const [filterTextValueS, setFilterTextValueS] = useState("all");

  // const [data, setData] = useState([]);

  // const [isFetch, setIsFetch] = useState([]);

  // const getData = async () => {
  //   setIsFetch(true);
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   // console.log(response, "res");

  //   setData(response.data);
  //   setIsFetch(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  const [newProductList, setNewProductList] = useState(data);

  // if (isFetch) {
  //   return "Data is Loading ...";
  // }
  console.log({ data });
  const HighestToLowestPriceSorting = [...data].sort(
    (a, b) => b.price - a.price
  );
  const RatingSorting = [...data].sort((a, b) => b.rating.rate - a.rating.rate);

  console.log({ HighestToLowestPriceSorting });
  console.log({ RatingSorting });

  const filteredProductList = newProductList.filter((item) => {
    if (filterTextValue === "electronics") {
      return item.category === "electronics";
    } else if (filterTextValue === "jewelery") {
      return item.category === "jewelery";
    } else if (filterTextValue === "women's clothing") {
      return item.category === "women's clothing";
    } else if (filterTextValue === "men's clothing") {
      return item.category === "men's clothing";
    } else if (filterTextValue === "all product") {
      return item;
    } else if (filterTextValueS === "all") {
      return item;
    } else if (filterTextValueS === "price") {
     return HighestToLowestPriceSorting.map(item => { return item });
      // for (let i = 0; i < HighestToLowestPriceSorting.length; i++){
      //   return (item = HighestToLowestPriceSorting[i]);
      // }
      // setNewProductList(HighestToLowestPriceSorting);
    } else if (filterTextValueS === "rating") {
      return RatingSorting.map((item) => {
        return item;
      });
      // return item.rating.rate > 4;
      // setNewProductList(RatingSorting);
    } else {
      return item;
    }
  });


 




  // const filteredProductListBySort = filteredProductList.filter((item) => {
  //   if (filterTextValueS === "all") {
  //     return item;
  //   } else if (filterTextValueS === "price") {
  //     return item.price === 55.99 && 999.99;
  //   } else if (filterTextValueS === "color") {
  //     return item.category === "electronics";
  //   } else {
  //     return item;
  //   }
  // });

  function selectedValue(value) {
    console.log(value);
    setFilterTextValue(value);
  }
  function selectedValueS(value) {
    console.log(value);
    setFilterTextValueS(value);
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.filterHeaderBar}>
          <div className={styles.productTypeContainer}>
            <h1 className={styles.productType}>{filterTextValue}</h1>
          </div>
          <SortBy filterValue={selectedValueS} />
        </div>
        <div className={styles.filteredProductBox}>
          <div className={styles.categoryContainer}>
            <CategoriesList
              filterValue={selectedValue}
              className={styles.CategoriesList}
            />
          </div>

          <div className={styles.productsCardsContainer}>
            {filteredProductList?.slice(0, next)?.map((item, index) => (
              <FilteredCardTest key={index} {...item} />
            ))}
          </div>
        </div>
        {next < filteredProductList?.length && (
          <button className={styles.loadMoreBtn} onClick={handleMoreProducts}>
            <i class="fa fa-refresh"></i>Load more
          </button>
        )}
      </div>
    </>
  );
};

export default FilteredProductsBox;
