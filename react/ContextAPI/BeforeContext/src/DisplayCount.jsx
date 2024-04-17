import React from "react";
import Button from "./Button";

const DisplayCount = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <Button setCount={setCount} />
    </div>
  );
};

export default DisplayCount;
