import React from "react";

const Button = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        increase count
      </button>
    </div>
  );
};

export default Button;
