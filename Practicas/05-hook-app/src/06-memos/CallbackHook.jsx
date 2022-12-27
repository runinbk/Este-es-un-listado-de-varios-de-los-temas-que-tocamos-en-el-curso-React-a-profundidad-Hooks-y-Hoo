import { useEffect } from "react";
import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  /// optimizando el componente hijo con useCallback y memo en ShowIncrement.jsx
  useEffect(() => {
    /// ==>> no usar en caso de paso de argumentos en el useCallback
    //incrementFather(); ===>>> esto genera un bucle infinito porque el componente hijo se vuelve a renderizar y se vuelve a ejecutar el useEffect del componente padre
  }, [incrementFather]);

  //   const incrementFather = () => {
  //     setCounter(counter + 1);
  //   };

  return (
    <>
      <h1>useCallback Hook : {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
