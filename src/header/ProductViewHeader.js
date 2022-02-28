import React, { useContext, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../context/DarkModeContext";
import { useParams } from "react-router-dom";
import { ProductById } from "../context/ProductByIdViewContext";
import axios from "axios";
const flechaDerechaIcon = <FontAwesomeIcon icon={faAngleRight} />;

export const ProductViewHeader = () => {
  const { id, setId, setViewProductObject, productObject } =
    useContext(ProductById);
  const idProduct = useParams().id;
  setId(idProduct);

  const getProductById = async (id) => {
    try {
      await axios
        .get("http://localhost:3030/productos/" + id)
        .then((res) => setViewProductObject(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById(idProduct);
  }, []);

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
        <p className={darkMode ? "header__text-dark" : "header__text"}>{id}</p>
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
