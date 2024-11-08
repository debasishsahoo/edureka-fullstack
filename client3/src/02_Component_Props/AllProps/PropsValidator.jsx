import React from 'react'
import PropTypes from 'prop-types';
import './Validator.css'
const PropsValidator = (props) => {
  return (
    <div>
      <h1> Props Validation Example</h1>
      <table id="customers">
        <thead>
            <tr>
                <th>Type</th>
                <th>Value</th>
                <th>Valid</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Any</td>
            <td>{props.anyValue}</td>
            <td>{props.anyValue?"True":"False"}</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>{props.propObj.name}</td>
            <td>{props.propObj?"True":"False"}</td>
          </tr>
          <tr>
            <td>Array</td>
            <td>{props.propArray[0]}</td>
            <td>{props.propArray?"True":"False"}</td>
          </tr>
          <tr>
            <td>Boolean</td>
            <td>{props.propBool?"True":"False"}</td>
            <td>{props.propBool?"True":"False"}</td>
          </tr>
          <tr>
            <td>Function</td>
            <td>{props.propFunc(5)}</td>
            <td>{props.propFunc(5)?"True":"False"}</td>
          </tr>
          <tr>
            <td>String</td>
            <td>{props.propString}</td>
            <td>{props.propString?"True":"False"}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{props.propNumber}</td>
            <td>{props.propNumber?"True":"False"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const myPropTypes ={
  anyValue:PropTypes.any,
  propObj:PropTypes.object,
  propArray:PropTypes.array.isRequired,
  propBool:PropTypes.bool.isRequired,
  propNumber:PropTypes.number,
  propString:PropTypes.number,
  propFunc:PropTypes.func,
}

const props={
  anyValue:0,
  propObj:{name:'Saheli'},
  propArray:[1,2,3,4,5],
  propBool:true,
  propFunc:function(x){return x+5},
  propNumber:1,
  propString:'Srabani Roy',
}

PropTypes.checkPropTypes(myPropTypes, props, 'prop', 'PropsValidator');




export default PropsValidator
