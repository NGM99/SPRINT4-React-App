import React, { useContext } from "react";
import "../css/header.css";
import "../App.css";
import error404 from "../assets/img/404-error-not-found.png";
import { DarkMode } from "../context/DarkModeContext";

export const Stores = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className={darkMode ? "main-container-dark" : "main-container"}>
      <div className='error-container'>
        <h1 className={darkMode ? "title-404" : ""}>
          Error 404: página no encontrada
        </h1>
        <img src={error404} />
      </div>
    </div>
  );
};
