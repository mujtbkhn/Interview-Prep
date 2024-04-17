import React from "react";
import { useCount } from "./CountContext";

const Button = () => {
  const { setCount } = useCount();
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        increase count
      </button>
    </div>
  );
};

export default Button;
