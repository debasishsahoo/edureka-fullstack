import React from "react";

const ProductColor = (props) => {
  const ProductColor = props.color.map((element) => (
    <li className={element}></li>
  ));
  return (
    <ul>
      <li>COLOR</li>
      {ProductColor}
    </ul>
  );
};

export default ProductColor;
