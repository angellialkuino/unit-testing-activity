import React from "react";

const Button = ({ disabled, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`border rounded py-2 px-5 m-2 ${
        disabled ? "bg-gray-300" : "bg-orange-500 text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
