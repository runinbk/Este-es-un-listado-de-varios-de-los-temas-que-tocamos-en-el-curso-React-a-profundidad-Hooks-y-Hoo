import React from "react";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between">
        <span
          className="align-self-center"
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </ul>
  );
};
