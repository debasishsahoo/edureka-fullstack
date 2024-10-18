import React from "react";
import ProductName from "./SubComponent/ProductName";
import ProductDetails from "./SubComponent/ProductDetails";
import ProductSize from "./SubComponent/ProductSize";
import ProductColor from "./SubComponent/ProductColor";
import ProductButton from "./SubComponent/ProductButton";

const RightComponent = () => {
  return (
    <div className="right">
      <div className="product-info">
        <ProductName />
        <ProductDetails />
        <ProductSize />
        <ProductColor />
        <ProductButton />
      </div>
    </div>
  );
};

export default RightComponent;
