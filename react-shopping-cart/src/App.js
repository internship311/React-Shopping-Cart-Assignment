import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Signin from './components/Signin/Signin';
import Register from './components/SignIn';
import CartPage from './components/pages/CartPage/Cartpage';

import Categories from './categories/index.get.json';
import ProductValue from './products/index.get.json';


const App = () => {

  const history = useNavigate();
  const location = useLocation();

  const [filteredProduct, setFilteredProduct] = useState(ProductValue);

  const filteredCategory = Categories
                              .filter(category => category.enabled)
                              .sort((a, b) => a.order - b.order);

  useEffect(() => {
      if(!location.search){
          setFilteredProduct(ProductValue);
      }
  }, [location]);

  function handleProduct(id) {
      setFilteredProduct(ProductValue.filter((product) => product.category === id));
      history.push({
          pathname: `/products`,
          search: `?query=${id}`
      });
  }

    return(
      <React.Fragment>
        <Header />
        <Routes>
          <Route exact path="/" render={() => (
          <Home filteredCategory={filteredCategory} handleProduct={handleProduct} />
          )} />
          <Route exact path="/products" render={() => (
          <Products filteredCategory={filteredCategory} filteredProduct={filteredProduct} handleProduct={handleProduct} />
          )} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cartpage" component={CartPage} />
          </Routes>
        <Footer />
      </React.Fragment>
    );
}

export default App;