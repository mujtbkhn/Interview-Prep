import React from "react";
import Button from "./Button";
import { useCount } from "./CountContext";

const DisplayCount = () => {
  const { count } = useCount();
  return (
    <div>
      {count}
      <Button />
    </div>
  );
};

export default DisplayCount;
