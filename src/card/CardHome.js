import React, { useContext, useEffect, useRef } from "react";
import "../css/card.css";
import { DarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faShop } from "@fortawesome/free-solid-svg-icons";
const productsIcon = <FontAwesomeIcon icon={faBox} />;
const storeIcon = <FontAwesomeIcon icon={faShop} />;

export const CardHome = () => {
  const title = useRef();

  const { darkMode } = useContext(DarkMode);

  const cardListHome = [
    {
      logo: productsIcon,
      number: 123,
      context: "Productos",
      btn1: "Ver Listado",
      link1: "/products",
      btn2: "Agregar Producto",
      link2: "/products/new",
    },
    {
      logo: storeIcon,
      number: 10,
      context: "Tiendas",
      btn1: "Ver Listado",
      link1: "/stores",
      btn2: "Agregar Tienda",
      link2: "/stores",
    },
  ];

  return (
    <>
      {cardListHome.map((card, i) => (
        <div
          className={darkMode ? "cardElementHomeDark" : "cardElementHome"}
          key={i}
        >
          <div className='card--container-text'>
            <i className={darkMode ? "logo" : ""}>{card.logo}</i>
            <p
              ref={title}
              className={
                darkMode ? "card--text-quantity-dark" : "card--text-quantity"
              }
            >
              {card.number}
            </p>
            <p
              className={
                darkMode ? "card--text-context-dark" : "card--text-context"
              }
            >
              {card.context}
            </p>
          </div>
          <div className='card-container-button'>
            <Link
              className={
                darkMode
                  ? "link-element button-home-dark"
                  : "link-element button-home"
              }
              to={card.link1}
            >
              {card.btn1}
            </Link>
            <Link
              className={
                darkMode
                  ? "link-element button-home-dark"
                  : "link-element button-home"
              }
              to={card.link2}
            >
              {card.btn2}
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
