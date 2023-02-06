import React from "react";
import { v4 } from "uuid";
import "./style.css";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

import Swal from "sweetalert2";

export default function TodoForm({ todos, setTodos }) {
  const [task, setTask] = useState("");
  const handleSubmit = () => {
    if (task == "") {
      Swal.fire("Can't add empty task");
    } else {
      const allTodos = [...todos, { id: v4(), task: task, completed: false }];
      setTodos(allTodos);
    }
  };
  return (
    <>
      <div className="header">
        <h1> React Todo List</h1>
        <p> Determine your goals And Save Your Time</p>
      </div>

      <div className="form">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          {" "}
          <input
            className="task-input"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="add-btn"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            <AddIcon boxSize={20} />
          </button>
        </form>
      </div>
    </>
  );
}
