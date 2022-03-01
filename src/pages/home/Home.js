import React, { useContext } from "react";
import { DarkMode } from "../../context/DarkModeContext";
import { HomeHeader } from "../../header/HomeHeader";
import { Header } from "../../components/Header";
import { MainHome } from "../../main/MainHome";
import "../../css/header.css";
import "../../css/main.css";
import "../../App.css";

export const Home = () => {
  const { darkMode, sideBarHideActive, setSideBarHideActive } =
    useContext(DarkMode);
  const quitSideBar = (e) => {
    e.preventDefault();

    setSideBarHideActive(!sideBarHideActive);
    console.log(sideBarHideActive);
  };
  return (
    <div className={darkMode ? "main-container-dark" : "main-container"}>
      <Header>
        <HomeHeader />
      </Header>
      <MainHome />
    </div>
  );
};
