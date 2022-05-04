import React from "react";

import logo from '../../static/images/logo.png';

const Logo = () => {
    return (
        <main className="logo">
            <img src={logo} className="logo-image" alt="Logo" />
        </main>
    )
}

export default Logo;