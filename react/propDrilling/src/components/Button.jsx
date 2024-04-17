import React, { useState } from "react";

const Button = ({buttonState, toggleButton}) => {
  return (
    <div>
      {buttonState ? (
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/windows/64/toggle-off.png"
          alt="toggle-on"
          onClick={toggleButton}
        />
      ) : (
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/windows/64/toggle-on.png"
          alt="toggle-on"
          onClick={toggleButton}
        />
      )}
    </div>
  );
};

export default Button;
