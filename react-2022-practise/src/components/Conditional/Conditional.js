import React from "react";

const Conditional = () => {
  const data = 4;

  return <>{data % 2 === 0 && <h3>Even Number </h3>}</>;
};

export default Conditional;
