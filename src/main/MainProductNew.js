import axios from "axios";
import React, { useState, useContext, useRef } from "react";
import { DarkMode } from "../context/DarkModeContext";
import "../css/main.css";

export const MainProductNew = () => {
  const [stock, setStock] = useState(1);
  const { darkMode } = useContext(DarkMode);
  const [object, setObject] = useState({ nom: "", val: "", sto: "", des: "" });

  let nombreInput = useRef();
  let valorInput = useRef();
  let stockInput = useRef();
  let descripcionInput = useRef();

  let nombre;
  let valor;
  let stocks;
  let descripcion;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3030/product/new", { nombre: "Alan" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleOnChange = () => {
    nombre = nombreInput.current.value;
    valor = valorInput.current.value;
    stocks = stockInput.current.value;
    descripcion = descripcionInput.current.value;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setStock(() => stock + 1);
  };

  const handleSubstract = (e) => {
    e.preventDefault();
    if (stock >= 2) {
      setStock(() => stock - 1);
    }
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className='mainHome'>
      <h2 className={darkMode ? "h2-text-dark" : "h2-text"}>Informacion</h2>
      <form className='from-new-product' onSubmit={handleOnSubmit}>
        <div>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Nombre
            </label>
            <input
              type='text'
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
              ref={nombreInput}
              onChange={handleOnChange}
              placeholder='Input Value'
            />
          </div>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Valor
            </label>
            <input
              type='number'
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
              ref={valorInput}
              onChange={handleOnChange}
              placeholder='Input Value'
            />
          </div>
          <div className='descripcion-container'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Stock
            </label>
            <div>
              <button
                className={
                  darkMode ? "button-substract-dark" : "button-substract"
                }
                onClick={handleSubstract}
              >
                -
              </button>
              <input
                type='text'
                className={darkMode ? "input-stock-dark" : "input-stock"}
                ref={stockInput}
                onChange={handleOnChange}
                value={stock}
              />
              <button
                className={darkMode ? "button-add-dark" : "button-add"}
                onClick={handleAdd}
              >
                +
              </button>
            </div>
          </div>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Descripción
            </label>
            <textarea
              type='text'
              className={
                darkMode
                  ? "input-new-product-dark description"
                  : "input-new-product description"
              }
              ref={descripcionInput}
              placeholder='Input Value'
              onChange={handleOnChange}
            />
          </div>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Tienda
            </label>
            <select
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
            >
              <option value='select'>Select</option>
              <option value='saab'>Saab</option>
              <option value='opel'>Opel</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
          <h2 className={darkMode ? "h2-text-dark" : "h2-text"}>
            Galería de Imágenes
          </h2>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Nueva Imagen
            </label>
            <input
              type='text'
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
              placeholder='Input Value'
            />
          </div>
          <label className={darkMode ? "label-text-dark" : "label-text"}>
            Imagenes actuales
          </label>
          <div>{/* Galeria de imagenes */}</div>
        </div>
        <div className='container-button-agregar'>
          <input
            onSubmit={handleSubmit}
            type='submit'
            className={darkMode ? "button-agregado-dark" : "button-agregado"}
            value='Agregar producto'
          />
        </div>
      </form>
    </div>
  );
};
