import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todo = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </>
  );
};
