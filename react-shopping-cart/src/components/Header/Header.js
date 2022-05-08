import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <header className="header">
          <div className="header__sub-container">
            <Link to="/">
              <Logo />
            </Link>
            <nav className="header__sub-container__nav-items">
              <Link to="/" className="header__sub-container__nav-items-link">
                Home
              </Link>
              <Link
                to="/products"
                className="header__sub-container__nav-items-link"
              >
                Products
              </Link>
            </nav>
            <div className="header__sub-container__nav-wrapper">
              <nav className="header__sub-container__nav-wrapper__login">
                <Link
                  to="/signin"
                  className="header__sub-container__nav-wrapper__login-link"
                >
                  SignIn
                </Link>
                <Link
                  to="/register"
                  className="header__sub-container-nav-wrapper-login-link"
                >
                  Register
                </Link>
              </nav>
              <Cart />
            </div>
          </div>
        </header>
      );
}

export default Header;