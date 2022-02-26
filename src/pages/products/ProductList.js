import React, { useContext } from "react";
import { DarkMode } from "../../context/DarkModeContext";
import { Header } from "../../components/Header";
import { MainProducts } from "../../main/MainProducts";
import { ProductsListHeader } from "../../header/ProductsListHeader";
import "./productList.css";
import { ProductsContext } from "../../context/ProductsContext";
import "../../App.css";

export const ProductList = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={darkMode ? "main-container-dark" : "main-container"}>
      <ProductsContext>
        <Header>
          <ProductsListHeader />
        </Header>
        <MainProducts />
      </ProductsContext>
    </div>
  );
};
