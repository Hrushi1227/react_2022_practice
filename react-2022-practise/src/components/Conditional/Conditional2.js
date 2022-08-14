import React from "react";

const Conditional2 = () => {
  const dayNumber = new Date().getDay();

  switch (dayNumber) {
    case 1:
      return <h3>Today is Monday {dayNumber}</h3>;
      break;
    case 2:
      return <h3>Today is Tuesday {dayNumber}</h3>;
      break;
    case 3:
      return <h3>Today is Wenesday {dayNumber}</h3>;
      break;
    case 4:
      return <h3>Today is Thrusday {dayNumber}</h3>;
      break;
    case 5:
      return <h3>Today is Friday {dayNumber}</h3>;
      break;
    case 6:
      return <h3>Today is Saturday {dayNumber}</h3>;
      break;
    case 7:
      return <h3>Today is Sunday {dayNumber}</h3>;
      break;
    default:
      return <h3>you have enter wrong number </h3>;
  }
  //   return <div>{dayNumber}</div>;
};

export default Conditional2;
