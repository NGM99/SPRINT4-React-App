import React, { useState, useContext } from "react";
import "../App.css";
import { DarkMode } from "../context/DarkModeContext";
import { IconMenu } from "../components/IconMenu";

export const HomeHeader = () => {
  const [username, setUsername] = useState("Username");
  const { darkMode } = useContext(DarkMode);
  return (
    <div className='headsito'>
      <IconMenu />
      <p className={darkMode ? "header__text-dark" : "header__text"}>
        ¡Hola {username}!
      </p>
    </div>
  );
};
