import React, { useContext } from "react";
import { DarkMode } from "../context/DarkModeContext";
import "../css/main.css";

export const ImageCard = ({ element }) => {
  const { darkMode } = useContext(DarkMode);
  return (
    <div
      className={
        darkMode ? "image-cards-container bgColorCard" : "image-cards-container"
      }
    >
      <div className='image-cards-container-cards'>
        <img src={element} className='image-card' />
        <p className={darkMode ? "text-card text-white" : "text-card"}>
          {element}
        </p>
      </div>
      <button
        className={darkMode ? "substractCard button-dark" : "substractCard"}
      >
        Quitar
      </button>
    </div>
  );
};
