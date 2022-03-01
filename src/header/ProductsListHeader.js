import React, { useContext, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Products } from "../context/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../context/DarkModeContext";
import { IconMenu } from "../components/IconMenu";
const lupaIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

export const ProductsListHeader = () => {
  const { setFilteredText } = useContext(Products);
  const inputFilterProducts = useRef();

  const { darkMode } = useContext(DarkMode);

  const handleOnChange = () => {
    setFilteredText(inputFilterProducts.current.value);
  };

  return (
    <>
      <div className='header--products-container'>
        <IconMenu />
        <div className='header-container-text'>
          <p className={darkMode ? "header__text-dark" : "header__text"}>
            Productos
          </p>
        </div>
        <div className='header--container-input'>
          <form
            className={
              darkMode ? "form-submit-product-dark" : "form-submit-product"
            }
          >
            <input
              onChange={handleOnChange}
              ref={inputFilterProducts}
              type='text'
              className={darkMode ? "input-search-dark" : "input-search"}
            />
            <i className={darkMode ? "loop-icon-dark" : ""}>{lupaIcon}</i>
          </form>
          <Link
            to={"/products/new"}
            className={
              darkMode
                ? "add-product-button-dark link-element-dark"
                : "add-product-button link-element"
            }
          >
            Agregar Producto
          </Link>
        </div>
      </div>
    </>
  );
};
