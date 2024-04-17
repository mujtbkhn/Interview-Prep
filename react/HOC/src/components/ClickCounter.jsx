import React from "react";
import WithCounter from "./WithCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      {count}
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
};

export default WithCounter(ClickCounter);
