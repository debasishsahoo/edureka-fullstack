import React from "react";
import propTypes from 'prop-types'
import "./InValid.css";
const Percentage = ({ label, score = 0, total = Math.max(1, score) }) => {
  return (
    <div className="pricetab">
      <h1>{label}</h1>
      <div className="price">
        <h2>{Math.round((score / total) * 100)}%</h2>
      </div>
    </div>
  );
};

//Check If the Value is Numeric or Finite number or numeric String
function isNumeric(value) {
  const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
  return (
    Number.isFinite(value) || (typeof value === "string" && regex.test(value))
  );
}

//Checks if the Value is Non Zero and Convert value to a number
function isNonZero(value) {
  return +value !== 0;
}

function ValidationType(...validators) {
  return function (props, propsName, componentName) {
    const value = props[propsName];    //props['label']  props['score'] 

    const Valid = validators.every((validator) => {
      if (typeof validator === "function") {
        const result = validator(value);
        return typeof result === "boolean" && result;
      }
      return false;
    });

    if (!Valid) {
      return new Error(
        `Invalid props\`${propsName}\` form \`${props}\` is
        passed to \`${componentName}\` component and the
        Validation Failed.Please Fix this First`
      );
    }
  };
}


Percentage.propTypes={
  label:propTypes.string.isRequired,
  score:ValidationType(isNumeric),
  total:ValidationType(isNumeric,isNonZero),
}



export default Percentage;
