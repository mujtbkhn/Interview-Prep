import React, { useState } from "react";

const ControlledComp = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>The input value is {inputValue}</p>
    </div>
  );
};

export default ControlledComp;
