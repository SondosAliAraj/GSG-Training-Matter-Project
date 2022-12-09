import React from "react";
import FilteredProductsBox from "../components/FilteredProductsBox";
import ImageBar from "../components/ImageBar";

const ProductListing = () => {
  return (
    <>
      <ImageBar imageSrc={"./images/card1.jpg"} />
      <FilteredProductsBox />
    </>
  );
};

export default ProductListing;
