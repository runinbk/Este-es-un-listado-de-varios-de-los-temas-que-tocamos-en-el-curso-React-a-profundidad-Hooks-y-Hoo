import { UserContex } from "./UserContext";
import { useState } from "react";

//   const user = {
//     id: 123,
//     name: "Fernando",
//     email: "sdsds@gmail.com",
//   };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContex.Provider
      //   value={{ user: user, mensaje: { mensaje: "Hola Mundo", id: 1 } }}
      value={{ user, setUser }}
    >
      {children}
    </UserContex.Provider>
  );
};
