import React, { useState } from "react";
import Books from "./Books";
import CurrencyContext from "./Currency-Context";
import Data from "./Data";
import Currencies from "./Currencies";
const PageBooks = () => {
  const [currency, setCurrency] = useState("₹");

  return (
    <>
      <CurrencyContext.Provider value={currency}>
        <button type="button" onClick={() => setCurrency("₹")}>
          Rupee
        </button>
        <button type="button" onClick={() => setCurrency("€")}>
          Pound
        </button>
        <button type="button" onClick={() => setCurrency("$")}>
          Dollar
        </button>
        <Books list={Data} />
      </CurrencyContext.Provider>
    </>
  );
};

export default PageBooks;
