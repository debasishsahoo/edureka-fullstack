import React, { memo } from "react";

const ToDos = ({ todos, addToDo }) => {
  console.log('todos:', todos)
  console.log("Child Render");
  return (
    <div>
      <h2>My ToDo</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addToDo}>Add Todo</button>
    </div>
  );
};

export default memo(ToDos);
