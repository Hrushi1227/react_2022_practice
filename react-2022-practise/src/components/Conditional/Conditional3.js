import React from "react";

const Conditional3 = () => {
  const cars = ["tata", "safari", "kia", "jaugwar"];
  return (
    <>
      <h3>Car Object is </h3>
      <ul>
        {cars.map((evt, index) => (
          <li key={index}>{evt}</li>
        ))}
      </ul>
    </>
  );
};

export default Conditional3;
