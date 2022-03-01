import React, { useState, useContext, useRef } from "react";
import imageStore from "../assets/img/ProfilePic.png";
import notFound from "../assets/img/not-found.png";
import { DarkMode } from "../context/DarkModeContext";
import { ProductById } from "../context/ProductByIdViewContext";
import "../css/main.css";
import axios from "axios";

export const MainProductsView = () => {
  const { productObject } = useContext(ProductById);
  const [stock, setStock] = useState(1);
  const { darkMode } = useContext(DarkMode);

  console.log(productObject);

  // useEffect(() => {
  //   nombreInput.current.value = productObject.title;
  //   valorInput.current.value = productObject.price;
  //   stockInput.current.value = productObject.stock;
  //   descripcionInput.current.value = productObject.description;
  // }, []);

  let nombreInput = useRef();
  let valorInput = useRef();
  let stockInput = useRef();
  let descripcionInput = useRef();

  let nombre;
  let valor;
  let stocks;
  let descripcion;

  // const getProductById = async (id) => {
  //   try {
  //     await axios
  //       .get("http://localhost:3030/productos/" + id)
  //       .then((res) => setfirst(res.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getProductById(id);
  // }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    setStock(() => stock + 1);
  };

  const handleSubstract = (e) => {
    e.preventDefault();
    if (stock >= 1) {
      setStock(() => stock - 1);
    }
  };

  const handleOnChange = () => {
    nombre = nombreInput.current.value;
    valor = valorInput.current.value;
    stocks = stockInput.current.value;
    descripcion = descripcionInput.current.value;
  };

  const handleCancelar = (e) => {
    e.preventDefault();
    nombreInput.current.value = "";
    valorInput.current.value = "";
    stockInput.current.value = 1;
    descripcionInput.current.value = "";
  };

  const handleEditar = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/producto/edit", {
        nombre,
        valor,
        stocks,
        descripcion,
        id: productObject._id,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className='mainHome'>
      <div className='main-container-product'>
        <img
          src={productObject.image == null ? notFound : productObject.image}
          className='product-image-view'
        />
        <div className='product-container-info'>
          <div>
            <p className='product-main-title'>{productObject.title}</p>
          </div>
          <div className='details-container-info'>
            <div className='container-detail-box box-text'>
              <p className='details-text-product'>{productObject.price}</p>
              <p className='details-subtext-product'>PUNTOS SUPERCLUB</p>
            </div>
            <div className='container-detail-box box-text'>
              <p className='details-text-product'>{productObject.stock}</p>
              <p className='details-subtext-product'>STOCK DISPONIBLE</p>
            </div>
            <div className='container-detail-box content-box-view'>
              <div className='box-store-profile'>
                <img src={imageStore} className='img-store-profile' />
                <p className=''>Olivia Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className={darkMode ? "h2-text-dark" : "h2-text"}>Informacion</h2>
      <form className='from-new-product'>
        <div>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Nombre
            </label>
            <input
              ref={nombreInput}
              type='text'
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
              placeholder='Input Value'
              onChange={handleOnChange}
            />
          </div>
          <div className='container-input'>
            <label className={darkMode ? "label-text-dark" : "label-text"}>
              Valor
            </label>
            <input
              ref={valorInput}
              type='number'
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
              placeholder='Input Value'
              onChange={handleOnChange}
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
                ref={stockInput}
                type='number'
                className={darkMode ? "input-stock-dark" : "input-stock"}
                value={stock}
                onChange={handleOnChange}
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
              ref={descripcionInput}
              type='text'
              className={
                darkMode
                  ? "input-new-product-dark description"
                  : "input-new-product description"
              }
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
        <div className='container-buttons-view'>
          <button
            onClick={handleCancelar}
            className={darkMode ? "button-agregado-dark" : "button-agregado"}
          >
            Cancelar
          </button>
          <button
            onClick={handleEditar}
            className={darkMode ? "button-agregado-dark" : "button-agregado"}
          >
            Editar producto
          </button>
        </div>
      </form>
    </div>
  );
};
