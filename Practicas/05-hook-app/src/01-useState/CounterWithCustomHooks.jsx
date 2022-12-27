import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  //const { counter } = useCounter();

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hooks: {counter}</h1>
      <hr />
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={decrement} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
