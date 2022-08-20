import React, { useState, useEffect } from "react";

const UseHooksEffects = () => {
  const [a, setA] = useState(0);
  const changeValue = () => {
    setA(a + 1);
  };
  useEffect(() => {
    console.log("Hello ");
  }, [a]);
  return (
    <>
      <h2>Value of A is {a}</h2>
      <button onClick={changeValue}>Click Me to Increment</button>
    </>
  );
};

export default UseHooksEffects;
