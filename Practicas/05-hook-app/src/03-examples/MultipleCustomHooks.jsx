import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  console.log({ data, isLoading, hasError });

  const { quote_id, author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote key={quote_id} author={author} quote={quote} />
      )}

      <button
        onClick={increment}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
