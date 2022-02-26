import React, { useContext } from "react";
import { DarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import notFound from "../assets/img/not-found.png";
import "../css/card.css";
import { Products } from "../context/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const flechaDerechaIcon = <FontAwesomeIcon icon={faAngleRight} />;

export const CardProducts = () => {
  const { productosContext } = useContext(Products);
  const { darkMode } = useContext(DarkMode);

  return (
    <>
      {productosContext.map((product, i) => {
        return (
          <Link
            key={i}
            to={"/products/:id"}
            className={
              darkMode
                ? "cardElementHome-dark link-element"
                : "cardElementHome link-element"
            }
          >
            <div className='card-container-texts'>
              <div className='image-product-content'>
                <img
                  src={product.image === null ? notFound : product.image}
                  className='img-product'
                />
              </div>

              <div>
                <p className={darkMode ? "text-product-dark" : "text-product"}>
                  {product.title}
                </p>
                <p className={darkMode ? "text-product-dark" : "text-product"}>
                  {product._id}
                </p>
              </div>
            </div>
            <div>
              <i
                className={
                  darkMode ? "icon-angle--righ-dark" : "icon-angle--right"
                }
              >
                {flechaDerechaIcon}
              </i>
            </div>
          </Link>
        );
      })}
    </>
  );
};