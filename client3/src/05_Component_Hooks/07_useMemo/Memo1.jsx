import React, { useState } from "react";
import ToDos from "./ToDo";
const Memo1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const Calculation = expenseCalculation(count);

  const Increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
    <h1>Memo-1</h1>
      <ToDos todos={todos} addToDo={addTodo} />
      <hr />
      <div>
        Count:{count}
        <br/>
        <button onClick={Increment}>+</button>
        <br />
        <h2>Expensive Calculation:{Calculation}</h2>
      </div>
    </>
  );
};

const expenseCalculation = (num) => {
  console.log("Calculation........Memo-1");

  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }
  return num
};

export default Memo1;
