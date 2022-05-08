import React, { useContext } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import CartPage from './components/CartPage/CartPage';

import ProductContextProvider from "./contexts/ProductContext";
import GlobalContextProvider from "./contexts/GlobalContext";
import { GlobalContext } from './contexts/GlobalContext';
import CartModal from "./components/CartModal/CartModal";

import Categories from './categories/index.get.json';
import ProductValue from './products/index.get.json';


const App = () => {
  const {
    cartItems: { cartOpen },
  } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/products" element= {<Products />}/>

        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/register" element={<Register />} />

        <Route
          exact
          path="/cartpage"
          element={<CartPage />} />
      </Routes>
      <Footer />
      {cartOpen ? <CartModal cartOpen={cartOpen} /> : ""}
    </>
  );
}

export default App;