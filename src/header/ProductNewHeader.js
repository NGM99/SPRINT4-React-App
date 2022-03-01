import React, { useContext } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../context/DarkModeContext";
import { IconMenu } from "../components/IconMenu";
const flechaDerechaIcon = <FontAwesomeIcon icon={faAngleRight} />;

export const ProductNewHeader = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className='header-container-new'>
      <IconMenu />
      <p className={darkMode ? "header__text-dark" : "header__text"}>
        Productos
      </p>
      <p className={darkMode ? "header__text-dark" : "header__text"}>
        {flechaDerechaIcon}
      </p>
      <p className={darkMode ? "header__text-dark" : "header__text"}>
        Nuevo Producto
      </p>
    </div>
  );
};
