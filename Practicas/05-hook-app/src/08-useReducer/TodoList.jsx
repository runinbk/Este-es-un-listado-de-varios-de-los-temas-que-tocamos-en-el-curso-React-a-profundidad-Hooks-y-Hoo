import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todo }) => {
  console.log(todo);
  return (
    <>
      {todo.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};
