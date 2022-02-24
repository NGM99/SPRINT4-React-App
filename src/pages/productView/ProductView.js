import React from "react";
import { ProductViewHeader } from "../../header/ProductViewHeader";
import { Header } from "../../components/Header";
import { MainProductsView } from "../../main/MainProductsView";
import "./productView.css";

export const ProductView = () => {
  return (
    <div>
      <Header>
        <ProductViewHeader />
      </Header>
      <MainProductsView />
    </div>
  );
};
