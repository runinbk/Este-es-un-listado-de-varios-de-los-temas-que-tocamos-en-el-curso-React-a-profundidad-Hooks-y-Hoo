import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    descripcion: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    descripcion: "Recolectar la piedra del tiempo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const handleNewTodo = (todo) => {
    dispatch({
      type: "add",
      payload: todo,
    });
  };
  return (
    <>
      <h1>
        TodoApp: 10 ,<small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList todo={todos} />
          {/* Fin TodoList */}
        </div>
        {/* TodoAdd */}
        <TodoAdd todo={todos} add={handleNewTodo} />
        {/* Fin TodoAdd */}
      </div>
    </>
  );
};
