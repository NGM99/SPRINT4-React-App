import React, { useContext, useState } from "react";
import "./sidebar.css";
import "../../App.css";
import imglogo from "../../assets/img/miEcommerce.png";
import imguser from "../../assets/img/ProfilePic.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBox,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../../context/DarkModeContext";
const homeIcon = <FontAwesomeIcon icon={faHouseChimney} />;
const productsIcon = <FontAwesomeIcon icon={faBox} />;
const storeIcon = <FontAwesomeIcon icon={faShop} />;

export const Sidebar = () => {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  const [text, setText] = useState("Cambiar a modo oscuro");

  const handleOnClickDarkMode = () => {
    setDarkMode(!darkMode);

    darkMode
      ? setText("Cambiar a modo oscuro")
      : setText("Cambiar a modo claro");
  };
  return (
    <div className={darkMode ? "sideBarDark" : "sideBar"}>
      <div className='sideBar-topcontent'>
        <div className='sideBar__imgcontainer'>
          <img src={imglogo} className='imgcontainer__imglogo' />
        </div>
        <div className='sidebar__container-nav'>
          <nav className='nav'>
            <ul>
              <li>
                <div className={"icon-container"}>
                  <i className={darkMode ? "icon-container-dark" : ""}>
                    {homeIcon}
                  </i>
                </div>
                <div>
                  <Link
                    to={"/home"}
                    className={darkMode ? "nav-link-dark" : "nav-link"}
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className='icon-container'>
                  <i className={darkMode ? "icon-container-dark" : ""}>
                    {productsIcon}
                  </i>
                </div>
                <div>
                  <Link
                    to={"/products"}
                    className={darkMode ? "nav-link-dark" : "nav-link"}
                  >
                    Productos
                  </Link>
                </div>
              </li>
              <li>
                <div className='icon-container'>
                  <i className={darkMode ? "icon-container-dark" : ""}>
                    {storeIcon}
                  </i>
                </div>
                <div>
                  <Link
                    to={"/stores"}
                    className={darkMode ? "nav-link-dark" : "nav-link"}
                  >
                    Tiendas
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className='sidebar__containerbutton'>
          <button
            onClick={handleOnClickDarkMode}
            className={darkMode ? "darkModeButton-dark" : "darkModeButton"}
          >
            {text}
          </button>
        </div>
      </div>
      <div>
        <Link
          to={"/profile"}
          className={
            darkMode
              ? "sidebar__containeruser link-user-dark"
              : "sidebar__containeruser link-user"
          }
        >
          <div className='user-container'>
            <div className='sidebar__containeruser'>
              <img className='container-user__imgUser' src={imguser} />
              <p className={darkMode ? "text-user-dark" : ""}>Olivia</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
