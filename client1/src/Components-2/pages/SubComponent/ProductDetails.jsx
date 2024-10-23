import React from "react";

const ProductDetails = (props) => {
  return (
    <div className="details">
      <h3>{props.head1}</h3>
      <h2>{props.head2}</h2>
      <h4>
        <span className="fas fa-dollar"></span>150
      </h4>
      <h4 className="dis">
        <span className="fas fa-dollar"></span>200
      </h4>
    </div>
  );
};

export default ProductDetails;
