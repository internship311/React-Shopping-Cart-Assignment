import React from 'react';
import { Link } from 'react-router-dom';
import CartImage from '../../static/images/cart.svg'
import './Cart.scss';

export default function Cart() {
    let count = 0;
    const cartItem = count === 1 ? `${count} item` : `${count} items`
    return (
        <Link to="/cartPage" className="cart-wrapper">
            <img src={CartImage} className="cart-wrapper-image" alt="Cart Img" />
            <p className="cart-wrapper-text">{cartItem}</p>
        </Link>
    )
}