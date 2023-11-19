import React from "react";

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded p-2 m-2 text-orange-700"
    />
  );
};

export default TextInput;
