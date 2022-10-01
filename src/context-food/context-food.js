import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    setLoading(true)
    fetch(
      "https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=pizzas&json=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false)
      });
  }, []);


  const goHomeRoute = () => {
    navigate("/");
  };

  const filterByName = (value) => {
    const text = value.toLowerCase();
    const filteredByName = allProducts.filter((el) =>
      el.product_name_fr.toLowerCase().includes(text)
    );
    setFilteredProducts(filteredByName);
  };



  const contextFood = {
    allProducts,
    goHomeRoute,
    filteredProducts,
    filterByName,
    loading
  };

  return <Context.Provider value={contextFood}>{children}</Context.Provider>;
};
