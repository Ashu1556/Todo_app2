import React, { useState } from "react";
import "./template.css";

const Todo = () => {
  const [state, setState] = useState("");
  const [value, setValue] = useState([]);

  const handleclick = () => {
    var newitem = {
      title: state,
      status: true,
    };
    setValue([...value, newitem]);
  };
  const deltebutton = (index) => {
    var neitem = value.filter((item, i) => {
      return index !== i;
    });

    setValue(neitem);
  };

  const completebutton = (index) => {
    var newdata = value.map((item, i) => {
      return index === i ? { ...item, status: !item.status } : item;
    });
    setValue(newdata);
  };

  return (
    <div className="todo_center">
      <div className="header">
        <h2>Todo App</h2>
      </div>

      <div className="todo_center1">
        <input
          type="text"
          className="input_container"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <button className="button_container" onClick={handleclick}>
          Add
        </button>
      </div>
      <div className="todo_center2">
        {value.map((item, index) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "16px" }}>{item.title}</p>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h5 style={{ color: "red", fontSize: "16px" }}>
              {" "}
              {item.status ? "completed" : "not completed"}
            </h5>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => completebutton(index)}>Toggle</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deltebutton(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
