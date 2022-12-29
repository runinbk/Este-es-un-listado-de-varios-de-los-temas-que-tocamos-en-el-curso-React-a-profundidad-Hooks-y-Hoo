import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, handleInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="¿Qué vas a hacer? . . ."
            name="description"
            value={description}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn btn-outline-primary mt-1 btn-block"
          >
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};
