import React from "react";
import "./InputBox.scss";
const Inputbox = ({ type, placeholder, inputId }) => {
  return (
    <>
      <input
        type={type}
        className="floating-input"
        id={inputId}
        placeholder={placeholder}
        required
      />
      <label htmlFor={inputId} className="floating-label">
        {placeholder}
      </label>
    </>
  );
}

export default Inputbox;