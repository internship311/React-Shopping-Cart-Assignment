import React, { useState } from "react";
import "./Form.scss";
import Button from "../Button/Button";
import Inputbox from "../InputBox/InputBox";

const Form = ({ className = "", inputLabel, button }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={`${className} form`} onSubmit={handleSubmit}>
      {inputLabel.map((input) => (
        <Inputbox
          key={input.inputId}
          type={input.type}
          placeholder={input.placeholder}
          inputId={input.inputId}
        />
      ))}
      <Button className={"form__login-button"}>{button}</Button>
    </form>
  );
}

export default Form;