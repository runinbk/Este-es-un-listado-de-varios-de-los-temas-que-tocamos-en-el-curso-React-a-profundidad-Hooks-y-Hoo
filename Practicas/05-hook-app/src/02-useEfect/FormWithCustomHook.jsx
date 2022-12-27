//import { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { handleInputChange, onResetForm, username, email, password } = useForm(
    {
      username: "",
      email: "",
      password: "",
    }
  );

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hooks</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="brayan@gmail.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        borrar
      </button>
    </>
  );
};
