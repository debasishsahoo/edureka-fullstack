import React, { useState,useCallback } from "react";
import ToDos from "./ToDo";
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const Increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  },[todos]);
  return (
    <>
      <ToDos todos={todos} addToDo={addTodo} />
      <hr />
      <div>
        Count:{count}
        <button onClick={Increment}>+</button>
      </div>
    </>
  );
};

export default App;
