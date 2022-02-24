import React from "react";
import { Header } from "../../components/Header";
import { MainProducts } from "../../main/MainProducts";
import { ProductsListHeader } from "../../header/ProductsListHeader";
import "./productList.css";

export const ProductList = () => {
  return (
    <div>
      <Header>
        <ProductsListHeader />
      </Header>
      <MainProducts />
    </div>
  );
};
