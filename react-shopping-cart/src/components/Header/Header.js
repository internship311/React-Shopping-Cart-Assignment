import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <header className="header">
          <div className="header-sub-container">
            <Link to="/">
              <Logo />
            </Link>
            <nav className="header-sub-container-nav-items">
              <Link to="/" className="header-sub-container-nav-items-link">
                Home
              </Link>
              <Link
                to="/products"
                className="header-sub-container-nav-items-link"
              >
                Products
              </Link>
            </nav>
            <div className="header-sub-container-nav-wrapper">
              <nav className="header-sub-container-nav-wrapper-login">
                <Link
                  to="/signin"
                  className="header-sub-container-nav-wrapper-login-link"
                >
                  SignIn
                </Link>
                <Link
                  to="/register"
                  className="header-sub-container-nav-wrapper-login-link"
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