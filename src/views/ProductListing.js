import React from "react";
import AdsBar from "../components/AdsBar";
import FilteredProductsBox from "../components/FilteredProductsBox";
import Header from "../components/Header";
import ImageBar from "../components/ImageBar";
import ProductsTypeBar from "../components/ProductsTypeBar";

const ProductListing = () => {
    
  return (
    <>
      {/* <AdsBar />
      <Header /> */}
      <ImageBar imageSrc={"./images/card1.jpg"} />
      {/* <ProductsTypeBar productType="Electronics" /> */}
      <FilteredProductsBox />
    </>
  );
};

export default ProductListing;
