import React from "react";

const Card = ({ buttonState }) => {
  return (
    <div className={`w-80 px-8 border-black border-2 rounded-xl`}>
      <img
        className="w-full h-full object-contain"
        src="https://m.media-amazon.com/images/I/81Y9N97S6gL._AC_UF894,1000_QL80_.jpg"
        alt=""
      />
      <h1>baby modi</h1>
      <button
        className={`px-4 m-2 py-2 text-white rounded-md  ${
          buttonState ? "bg-blue-500" : "bg-black"
        }`}
      >
        submit
      </button>
    </div>
  );
};

export default Card;
