import React from "react";

const ProductName = (props) => {
  const faIcons = props.icons.map((element) => <i className={element}></i>);

  return (
    <div className="product-name">
      <h1>{props.name}</h1>
      {faIcons}
    </div>
  );
};

export default ProductName;
