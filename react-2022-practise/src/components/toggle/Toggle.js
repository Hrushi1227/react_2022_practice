import React, { useState } from "react";

const Toggle = () => {
  //   const collapseParagraph = () => {
  //     settoggleFlag((prevState) => {
  //       if (prevState === 1) {
  //         return <p>Hello Showing beacuse tag is true {prevState}</p>;
  //       }
  //       console.log(prevState);
  //       return prevState === true ? 1 : 0;
  //     });
  //   };

  const [flag, setflag] = useState(true);
  const collapseParagraph = () => {
    setflag(!flag);
  };

  return (
    <>
      <button onClick={collapseParagraph}>Click Mee For Toggle</button>
      <label>Value of Flag is - {flag}</label>
      <div>{flag ? <div>Hello </div> : null}</div>
    </>
  );
};

export default Toggle;
