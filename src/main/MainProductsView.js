import React, { useState, useContext } from "react";
import imageStore from "../assets/img/ProfilePic.png";
import { DarkMode } from "../context/DarkModeContext";
import { ProductById } from "../context/ProductByIdViewContext";
import "../css/main.css";

export const MainProductsView = () => {
  const { productObject } = useContext(ProductById);
  const [stock, setStock] = useState(1);
  const { darkMode } = useContext(DarkMode);

  console.log(productObject);

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
    if (stock >= 2) {
      setStock(() => stock - 1);
    }
  };

  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className='mainHome'>
      <div className='main-container-product'>
        <img src={productObject.image} className='product-image-view' />
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
              type='text'
              className={
                darkMode ? "input-new-product-dark" : "input-new-product"
              }
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
              placeholder='Input Value'
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
          <input
            onSubmit={handleSubmit}
            type='submit'
            className={darkMode ? "button-agregado-dark" : "button-agregado"}
            value='Cancelar'
          />
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
