import React, { useContext } from "react";
import "./Counter.scss";
import Button from "../Button/Button";
import { GlobalContext } from "../../contexts/GlobalContext";

const Counter = ({ quantity, price, id }) => {
  const { dispatch } = useContext(GlobalContext);

  const editItem = () => {
    dispatch({
      type: "EDIT_ITEM",
      id: id,
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  return (
    <div className="counter">
      <Button onClick={() => removeItem()} className={"counter__button"}>
        -
      </Button>
      <p className="counter__text">{quantity}</p>
      <Button onClick={() => editItem()} className={"counter__button"}>
        +
      </Button>
      <p className="counter__multiply">&#10005;</p>
      <p className="counter__text">{price}</p>
    </div>
  );
}

export default Counter;