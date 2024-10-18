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
        <ProductName name='AirMax-2' icons={['fa fa-search','fa fa-user','fa fa-shopping-cart']}/>
        <ProductDetails head1='Summer Collection' head2='Men Black Sneakers'/>
        <ProductSize size={[7,8,9,10,11]}/>
        <ProductColor color={['yellow','black','blue']} />
        <ProductButton />
      </div>
    </div>
  );
};

export default RightComponent;
