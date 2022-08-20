import React, { useState, useEffect, useRef } from "react";

const UseRefEffect = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  const prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  });
  return (
    <>
      <h2>
        Current {count} and Previous Count {prevCount}
      </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me to Increse count
      </button>
    </>
  );
};
export default UseRefEffect;
