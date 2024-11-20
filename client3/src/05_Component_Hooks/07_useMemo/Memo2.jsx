import React, { useState, useMemo } from "react";
import ToDos from "./ToDo";
const Memo2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const Calculation = useMemo(() => expenseCalculation(count), [count]);

  const Increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
     <h1>Memo-2</h1>
      <ToDos todos={todos} addToDo={addTodo} />
      <hr />
      <div>
        Count:{count}
        <br />
        <button onClick={Increment}>+</button>
        <br />
        <h2>Expensive Calculation:{Calculation}</h2>
      </div>
    </>
  );
};

const expenseCalculation = (num) => {
  console.log("Calculation........Memo2");

  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num;
};

export default Memo2;
