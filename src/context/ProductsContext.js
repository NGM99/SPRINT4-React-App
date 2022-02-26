import axios from "axios";
import { createContext, useState, useEffect } from "react";
import data from "../utils/data";

export const Products = createContext();

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productosGenerales, setProductosGenerales] = useState([data]);

  useEffect(() => {
    axios.get("http://localhost:3030/products").then((res) => {
      const productsApi = res.data;
      setProducts(productsApi);
    });
  }, []);

  const productosContext = products;

  return (
    <Products.Provider
      value={{ productosContext, productosGenerales, setProductosGenerales }}
    >
      {children}
    </Products.Provider>
  );
};
