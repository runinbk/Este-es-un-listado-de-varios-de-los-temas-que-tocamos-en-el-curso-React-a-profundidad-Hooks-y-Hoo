import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount} ,
        <small>
          pendientes:
          {pendingTodosCount}
        </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todo={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </>
  );
};
