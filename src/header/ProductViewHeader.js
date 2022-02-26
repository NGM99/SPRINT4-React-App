import React, { useContext } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../context/DarkModeContext";
const flechaDerechaIcon = <FontAwesomeIcon icon={faAngleRight} />;

export const ProductViewHeader = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div className='header-container-view'>
      <div className='header-container-new'>
        <p className={darkMode ? "header__text-dark" : "header__text"}>
          Productos
        </p>
        <p className={darkMode ? "header__text-dark" : "header__text"}>
          {flechaDerechaIcon}
        </p>
        <p className={darkMode ? "header__text-dark" : "header__text"}>Id</p>
      </div>
      <form>
        <input
          type='submit'
          className={darkMode ? "button-agregado-dark" : "button-agregado"}
          value='Eliminar'
        />
      </form>
    </div>
  );
};
