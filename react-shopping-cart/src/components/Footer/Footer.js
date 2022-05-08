import React from "react";
import './Footer.scss';
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
  if (location.pathname.includes("cartpage")) {
    return null;
  }
  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.
      </p>
    </footer>
  );
}

export default Footer;