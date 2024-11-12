import React, { useState, useEffect, useRef } from "react";
import { getList, setList } from "../services/list.services";

const DataHooks = () => {
  const [alert, setAlert] = useState(false);
  const [glist, setGList] = useState([]);
  const [ItemInput, setItemInput] = useState("");
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (glist.length && !alert) {
      return;
    }
    getList().then((items) => {
      //console.log(items)
      if (mounted.current) {
        setGList(items);
      }
    });
    return () => (mounted.current = false);
  }, [alert, glist]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [alert]);

  const HandelSubmit = (e) => {
    e.preventDefault();
    setList(ItemInput).then(() => {
      if (mounted.current) {
        setItemInput('');
        setAlert(true);
      }
    });
  };

  return (
    <div>
      <h1>My Grocery List</h1>
      <ul>
        {
          glist.map((item) => console.log(item))
        }
        {
        glist.map((item) => (
          <li key={item.id}>{item.Item}</li>
        ))
        
        
        }
      </ul>
      {alert && <h2>Submit Successfully</h2>}
      <br />
      <form onSubmit={HandelSubmit}>
        <label>
          <p>Add new Item</p>
          <input
            type="text"
            onChange={(e) => setItemInput(e.target.value)}
            value={ItemInput}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataHooks;
