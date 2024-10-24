import React from "react";
import DataList from './DataList'
const DataSource = () => {
  const Data = [{ name: "React" }, { name: "Angular" }, { name: "Vue" }];

  return (
    <div>
      <ul>
        {Data.map((element) => (
          //console.log(element)
          <DataList data={element} />
        ))}
      </ul>
    </div>
  );
};

export default DataSource;
