import React,{useContext} from "react";
import CurrencyContext from './Currency-Context'

const Book=({item})=>{

    const Currency=useContext(CurrencyContext)
    return(
        <li>
            {item.title}  -  {Currency}{item.price}
        </li>
    )



}
export default Book