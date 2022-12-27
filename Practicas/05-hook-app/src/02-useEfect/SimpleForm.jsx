import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "brayan",
    email: "runinkgr@gmail.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  /*
      useEffect(() => {
        console.log("hey!");
      }, []);
    
      useEffect(() => {
        console.log("hey, formState!");
      }, [formState]);
    
      useEffect(() => {
        console.log("hey, formState email!");
      }, [email]);
    */
  return (
    <>
      <h1>Formulario Simple</h1>
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
      {username === "brayan2" && <Message />}
    </>
  );
};
