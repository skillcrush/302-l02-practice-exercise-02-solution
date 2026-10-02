import React, { useState } from "react";

const NewFoodInput = ({ addFoodItem }) => {
  const [food, setFood] = useState("");

  const updateFood = (e) => {
    setFood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodItem(food);
    setFood("");
  };

  return (
    <form className="food-form" onSubmit={handleSubmit}>
      <input
        id="new-food"
        type="text"
        aria-label="Add a food to the list"
        value={food}
        onChange={updateFood}
      />
      <button>Add to the list!</button>
    </form>
  );
};

export default NewFoodInput;
