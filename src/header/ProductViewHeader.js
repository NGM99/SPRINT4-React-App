import React, { useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
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

  const handleOnClick = () => {
    axios
      .delete("http://localhost:3030/products/delete", { id: id })
      .then((res) => console.log(res));
  };

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
      <Link
        to={"/"}
        onClick={handleOnClick}
        className={darkMode ? "button-agregado-dark" : "button-agregado"}
      >
        Eliminar
      </Link>
    </div>
  );
};
