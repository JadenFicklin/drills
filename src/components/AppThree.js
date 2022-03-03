import React, { useState } from "react";

function AppThree() {
  const resetFoods = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
  const [foods, setFoods] = useState([
    "spaghetti",
    "ice cream",
    "sushi",
    "bologna",
    "cheese",
  ]);

  const filterFoods = (param) => {
    const filteredArray = foods.filter((food) =>
      food.toLowerCase().includes(param)
    );
    setFoods(param === "" ? resetFoods : filteredArray);
  };

  return (
    <>
      <input
        placeholder="input name here"
        onChange={(e) => filterFoods(e.target.value)}
      />
      {foods.map((item) => (
        <h2>{item}</h2>
      ))}
    </>
  );
}

export default AppThree;
//50 minutes
