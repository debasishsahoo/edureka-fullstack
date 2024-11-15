import React from "react";
import Book from "./Book";
const Books = ({ list }) => {
  return (
    <ul>
      {list.map((element) => (
        <Book key={element.id} item={element} />
      ))}
    </ul>
  );
};

export default Books;
