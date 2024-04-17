import React from "react";
import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      {count}
      <button onMouseOver={incrementCount}>Hover me</button>
    </div>
  );
};

export default WithCounter(HoverCounter);
