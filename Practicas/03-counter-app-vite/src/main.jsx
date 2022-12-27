import React from "react";
import ReactDOM from "react-dom/client";

//import HelloWordApp from "./HelloWordApp";
//import FirstApp from "./FistApp";
import CounterApp from "./CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);
