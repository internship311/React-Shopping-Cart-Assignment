import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import Products from "../products/index.get.json";
import Categories from "../categories/index.get.json";

const useProducts = () => {
  const history = useNavigate();
  const location = useLocation();
  const match = useMatch("/products/:id");

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const [filteredProduct, setFilteredProduct] = useState(Products);

  function handleProduct(id) {
    if (id) {
      history(`/products/${id}`);
    } else {
      history(`/products`);
    }

    window.scrollTo(0, 0);
  }

  useEffect(() => {
    if (!match) {
      setFilteredProduct(Products);
    } else {
      setFilteredProduct(
        Products.filter((product) => product.category === match.params.id)
      );
    }
  }, [location]);

  return {
    filteredCategory,
    filteredProduct,
    handleProduct,
  };
}

export default useProducts;