import React, { useState } from "react";

function AppTwo() {
  const [foods, setFoods] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
  ]);

  return (
    <div>
      {foods.map((item) => (
        <h4>{item}</h4>
      ))}
    </div>
  );
}

export default AppTwo;
//4 minutes
