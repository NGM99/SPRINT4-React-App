import React, { useContext, useEffect, useRef, useState } from "react";
import "./sidebar.css";
import "../../App.css";
import imglogo from "../../assets/img/miEcommerce.png";
import imguser from "../../assets/img/ProfilePic.png";
import { Link, NavLink } from "react-router-dom";
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
  const { darkMode, setDarkMode, navbarActive, setNavbarActive } =
    useContext(DarkMode);
  const [text, setText] = useState("Cambiar a modo oscuro");
  const [backgroundHome, setBackgroundHome] = useState(true);
  const [backgroundProducts, setBackgroundProducts] = useState(false);
  const [backgroundStore, setBackgroundStore] = useState(false);

  const handleClickChangeBackgroundColorHomeNav = () => {
    backgroundHome ? setBackgroundHome(true) : setBackgroundHome(true);
    setBackgroundProducts(false);
    setBackgroundStore(false);
  };

  const handleClickChangeBackgroundColorProductsNav = () => {
    backgroundProducts
      ? setBackgroundProducts(true)
      : setBackgroundProducts(true);
    setBackgroundHome(false);
    setBackgroundStore(false);
  };

  const handleClickChangeBackgroundColorStoresNav = () => {
    backgroundStore ? setBackgroundStore(true) : setBackgroundStore(true);
    setBackgroundHome(false);
    setBackgroundProducts(false);
  };

  const handleClickChangeBackgroundColorAllNav = () => {
    setBackgroundHome(false);
    setBackgroundProducts(false);
    setBackgroundStore(false);
  };

  const handleOnClickDarkMode = () => {
    setDarkMode(!darkMode);

    darkMode
      ? setText("Cambiar a modo oscuro")
      : setText("Cambiar a modo claro");
  };

  const sideBarActive = useRef();

  useEffect(() => {
    if (navbarActive) {
      sideBarActive.current.style.display = "flex";
      sideBarActive.current.style.zIndex = "100";
    }
  }, [navbarActive]);

  return (
    <div className={darkMode ? "sideBarDark" : "sideBar"} ref={sideBarActive}>
      <div className='sideBar-topcontent'>
        <div className='sideBar__imgcontainer'>
          <img src={imglogo} className='imgcontainer__imglogo' />
        </div>
        <div className='sidebar__container-nav'>
          <nav className='nav'>
            <ul>
              <NavLink
                onClick={handleClickChangeBackgroundColorHomeNav}
                className={
                  backgroundHome
                    ? "side-nav-container bgColorActive"
                    : "side-nav-container"
                }
                to={"/"}
              >
                <div className={"icon-container"}>
                  <i
                    className={
                      darkMode ? "icon-container-dark" : "iconMenuNavegation"
                    }
                  >
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
              </NavLink>
              <NavLink
                onClick={handleClickChangeBackgroundColorProductsNav}
                className={
                  backgroundProducts
                    ? "side-nav-container bgColorActive"
                    : "side-nav-container"
                }
                to={"products"}
              >
                <div className='icon-container'>
                  <i
                    className={
                      darkMode ? "icon-container-dark" : "iconMenuNavegation"
                    }
                  >
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
              </NavLink>
              <NavLink
                onClick={handleClickChangeBackgroundColorStoresNav}
                className={
                  backgroundStore
                    ? "side-nav-container bgColorActive"
                    : "side-nav-container"
                }
                to={"/stores"}
              >
                <div className='icon-container'>
                  <i
                    className={
                      darkMode ? "icon-container-dark" : "iconMenuNavegation"
                    }
                  >
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
              </NavLink>
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
          onClick={handleClickChangeBackgroundColorAllNav}
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
