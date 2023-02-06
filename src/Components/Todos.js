import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import React from "react";
import "./style.css";
export const Todos = ({ todos, handleComplete, handleDelete }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo.id} className="task-preview">
          {todo.completed ? (
            <p
              style={{
                "text-decoration-line": " line-through",
                "text-decoration-thickness": "2px",
              }}
            >
              {todo.task}
            </p>
          ) : (
            <p>{todo.task}</p>
          )}
          <div className="btn">
            <button
              onClick={() => {
                handleComplete(todo);
              }}
            >
              <CheckIcon />
            </button>
            <button onClick={() => handleDelete(todo.id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
