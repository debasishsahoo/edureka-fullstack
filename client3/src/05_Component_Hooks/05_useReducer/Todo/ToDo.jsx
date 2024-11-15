import React, { useReducer } from "react";
import Reducer from "./Reducer";
import initialTodo from "./data";
const ToDo = () => {
  const [todos, dispatch] = useReducer(Reducer, initialTodo);

  const handleComplete = (todo) => {
    console.log('todo:', todo)
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
};

export default ToDo;
