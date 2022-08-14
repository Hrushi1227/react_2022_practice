import React, { useState } from "react";

const ConditionalHandlingData = () => {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };
  const reset = () => {
    setCount((prevStateData) => {
      return prevStateData * 0;
    });
  };
  return (
    <>
      <button onClick={changeCount}>Click Me To increase Count </button>
      <button onClick={reset}>Click Me To reset Count </button>
      <label>Count Is -- {count}</label>
    </>
  );
};

export default ConditionalHandlingData;
