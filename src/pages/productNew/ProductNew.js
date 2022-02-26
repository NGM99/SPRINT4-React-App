import React, { useContext } from "react";
import { DarkMode } from "../../context/DarkModeContext";
import { Header } from "../../components/Header";
import { ProductNewHeader } from "../../header/ProductNewHeader";
import { MainProductNew } from "../../main/MainProductNew";
import "../../css/header.css";
import "../../css/main.css";
import "../../App.css";

export const ProductNew = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={darkMode ? "main-container-dark" : "main-container"}>
      <Header>
        <ProductNewHeader />
      </Header>
      <MainProductNew />
    </div>
  );
};
