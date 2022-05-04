import React from 'react';
import Logo from '../Logo/Logo';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-sub-container">
                <Logo />
                <nav className="header-nav-items">
                    <Link to="/" className="header-nav-items-link">HOME</Link>
                    <Link to="/products" className="header-nav-items-link">PRODUCTS</Link>
                </nav>
                <nav className="header-nav-login">
                    <Link to="/signin" className="header-nav-login-link">SIGNIN</Link>
                    <Link to="/register" className="header-nav-login-link">REGISTER</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;