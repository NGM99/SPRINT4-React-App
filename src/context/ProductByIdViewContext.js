import React from "react";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ProductById = createContext();

export const ProductByIdViewContext = ({ children }) => {
  const [productObject, setViewProductObject] = useState({});
  const [id, setId] = useState("");

  // useEffect(() => {
  //   getProductById(id);
  // }, []);

  // const getProductById = async (id) => {
  //   try {
  //     await axios
  //       .get("http://localhost:3030/productos/" + id)
  //       .then((res) => setViewProductObject(res.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <ProductById.Provider
      value={{ productObject, setViewProductObject, id, setId }}
    >
      {children}
    </ProductById.Provider>
  );
};
