import React from "react";

export const TodoAdd = ({ todos, add }) => {
  return (
    <>
      <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr />
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="¿Qué vas a hacer? . . ."
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
