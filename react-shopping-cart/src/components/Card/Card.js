import React, {useState, useEffect, useContext} from 'react';
import Button from '../Button/Button';
import Image from '../Image/Image';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { GlobalContext } from '../../contexts/GlobalContext';
import './Card.scss';

const Card = ({ name, imageUrl, price, stock, text, id }) => {
    const browserWidth = useMediaQuery("(min-width: 769px)");
  const {
    dispatch,
    cartItems: { products },
  } = useContext(GlobalContext);

  function addItemToCart() {
    if (!products[id]) {
      dispatch({
        type: "ADD_ITEM",
        product: {
          [id]: {
            id,
            imageUrl,
            name,
            price,
            stock,
            quantity: 1,
          },
        },
      });
    } else {
      dispatch({
        type: "EDIT_ITEM",
        id: id,
      });
    }
  }

  return (
    <section className="card-container">
      <h2 className="card-container__title">{name}</h2>
      <figure className="card-container__image">
        <Image source={imageUrl} alt="Fruit Pic" className={"product-image"} />
      </figure>
      <p className="card-container__text">{text}</p>
      <section className="card-container__section">
        {browserWidth ? (
          <>
            <p className="card-container__section__price">MRP Rs.{price}</p>
            <Button
              onClick={() => addItemToCart()}
              className={"card-container__section__buy-button"}
              >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addItemToCart()}
            className={"card-container__section__buy-button"}
            >
            Buy Now @ Rs.{price}
          </Button>
        )}
      </section>
    </section>
  );
}

export default Card;