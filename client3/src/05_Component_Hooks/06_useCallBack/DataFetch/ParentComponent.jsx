import React from "react";
import UseDataFetching from "./UseDataFetching";
import Loader from './loader'
const ParentComponent = () => {
  const { data, isLoading, error } = UseDataFetching("https://jsonplaceholder.typicode.com/comments");

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : error ? (
        <p>Error:{error.message}</p>
      ) : (
        <p>Data:{JSON.stringify(data)}</p>
      )}
    </div>
  );
};

export default ParentComponent;
