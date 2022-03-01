import React, { useContext } from "react";
import { DarkMode } from "../context/DarkModeContext";
import { CardHome } from "../card/CardHome";
import { Card } from "../components/Card";

export const MainHome = () => {
  const { sideBarHideActive, setSideBarHideActive } = useContext(DarkMode);
  const quitSideBar = (e) => {
    e.preventDefault();

    setSideBarHideActive(!sideBarHideActive);
    console.log(sideBarHideActive);
  };
  return (
    <div className='mainHome' onClick={quitSideBar}>
      <Card>
        <CardHome />
      </Card>
    </div>
  );
};
