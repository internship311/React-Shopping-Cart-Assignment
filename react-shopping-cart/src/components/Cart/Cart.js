import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartImage from '../../static/images/cart.svg'
import Image from '../Image/Image';
import Modal from '../Modal/Modal';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useMediaQuery } from '../../utils/useMediaQuery';
import './Cart.scss';
import CartModal from '../CartModal/CartModal';

const Cart = () => {
    const {
        cartItems: { count, cartOpen }, dispatch
      } = useContext(GlobalContext);

      useEffect(() => {
        if (cartOpen) {
          document.body.style.overflow = "hidden";
        }

        return () => (document.body.style.overflow = "unset");
      }, [cartOpen]);
    
      const countItem = count === 1 ? `${count} item` : `${count} items`;
    
      const history = useNavigate();
      const browserWidth = useMediaQuery("(min-width: 769px)");
    
      const handleBrowserWidth = () => {
        browserWidth
      ? dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
      : history.push("/cartpage");
      };

      const handleOnKeyPress = (e) => {
        e.key === "Enter" && handleBrowserWidth();
      };
    
      return (
        <>
          <div
            className="cart-wrapper"
            onClick={() => {
              handleBrowserWidth();
            }}
            tabIndex={0}
            onKeyPress={handleOnKeyPress}
          >
            <Image
              source={CartImage}
              className={"cart-wrapper__image"}
              alt={"Cart Image"}
            />
            <p className="cart-wrapper__text">{countItem}</p>
          </div>
          {cartOpen ? (
        <Modal>
          <CartModal cartOpen={cartOpen} />{" "}
        </Modal>
      ) : (
        ""
      )}
        </>
      );
}

export default Cart;