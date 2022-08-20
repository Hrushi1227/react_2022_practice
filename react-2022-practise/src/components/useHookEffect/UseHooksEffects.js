import React, { useState, useEffect } from "react";

const UseHooksEffects = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("Hello A");
  }, [a]);
  useEffect(() => {
    console.log("Hello B");
  }, [b]);
  return (
    <>
      <h2>Value of A is {a}</h2>
      <h2>Value of B is {b}</h2>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Click Me to Increment
      </button>

      <button
        onClick={() => {
          setB(b + 5);
        }}
      >
        Click Me to Increment
      </button>
    </>
  );
};

export default UseHooksEffects;
