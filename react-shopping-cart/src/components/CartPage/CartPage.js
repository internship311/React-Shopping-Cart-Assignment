import React, { useContext } from "react";
import "./CartPage.scss";

import CardTablet from "../CardTablet/CardTablet";
import { GlobalContext } from "../../contexts/GlobalContext";

const CartPage = ({ handleCart }) => {
  const {
    cartItems: { count, products },
  } = useContext(GlobalContext);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <main className="cartpage">
      <h1 className="cartpage__title">My Cart ({countItems})</h1>
      <CardTablet count={count} products={products} />
    </main>
  );
}

export default CartPage;