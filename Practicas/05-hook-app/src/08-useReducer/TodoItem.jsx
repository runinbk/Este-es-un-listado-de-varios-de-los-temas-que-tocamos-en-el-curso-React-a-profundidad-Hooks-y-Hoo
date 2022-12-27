import React from "react";

export const TodoItem = ({ todo }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{todo.descripcion}</span>
          <button className="btn btn-danger">Borrar</button>
        </li>
      </ul>
    </>
  );
};
