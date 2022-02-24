import React from "react";
import { HomeHeader } from "../../header/HomeHeader";
import { Header } from "../../components/Header";
import { MainHome } from "../../main/MainHome";
import "../../css/header.css";
import "../../css/main.css";

export const Home = () => {
  return (
    <div>
      <Header>
        <HomeHeader />
      </Header>
      <MainHome />
    </div>
  );
};
