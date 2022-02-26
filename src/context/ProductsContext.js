import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const Products = createContext();

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredText, setFilteredText] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const data = await axios
        .get("http://localhost:3030/products")
        .then((res) => {
          const productsApi = res.data;
          setProducts(productsApi);
        });
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Products.Provider
      value={{ products, loading, filteredText, setFilteredText }}
    >
      {children}
    </Products.Provider>
  );
};
