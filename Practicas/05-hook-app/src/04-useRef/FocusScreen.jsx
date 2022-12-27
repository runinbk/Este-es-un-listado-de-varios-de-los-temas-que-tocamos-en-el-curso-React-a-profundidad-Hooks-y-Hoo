import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  console.log(inputRef);
  const OnClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-outline-primary mt-5" onClick={OnClick}>
        Set Focus
      </button>
    </>
  );
};
