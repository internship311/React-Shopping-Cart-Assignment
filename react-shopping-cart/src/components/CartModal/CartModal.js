import React, { useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import Button from "../Button/Button";
import CardTablet from "../CardTablet/CardTablet";
import "./CartModal.scss";

const CartModal = ({ cartOpen }) => {
  const {
    cartItems: { count, products },
    dispatch,
  } = useContext(GlobalContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;

  return (
    <section className="cartmodal__section">
      <div className="cartmodal__section__heading">
        <h1 className="cartmodal__section__heading__title">
          My Cart ({countItems})
        </h1>
        <Button
          className={"cartmodal__section__heading__button"}
          onClick={() => dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })}
        >
          &#10005;
        </Button>
      </div>
      <CardTablet
        className={"cartmodal__section__flex"}
        count={count}
        products={products}
      />
      </section>
      );
  }

export default CartModal;