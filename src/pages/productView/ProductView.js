import React, { useContext } from "react";
import { DarkMode } from "../../context/DarkModeContext";
import { ProductViewHeader } from "../../header/ProductViewHeader";
import { Header } from "../../components/Header";
import { MainProductsView } from "../../main/MainProductsView";
import { ProductByIdViewContext } from "../../context/ProductByIdViewContext";
import "./productView.css";
import "../../App.css";

export const ProductView = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={darkMode ? "main-container-dark" : "main-container"}>
      <ProductByIdViewContext>
        <Header>
          <ProductViewHeader />
        </Header>
        <MainProductsView />
      </ProductByIdViewContext>
    </div>
  );
};
