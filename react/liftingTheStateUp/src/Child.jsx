import React, { useState } from "react";

const Child = (props) => {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.childProps(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Child;
