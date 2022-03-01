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
  const {
    darkMode,
    setDarkMode,
    navbarActive,
    sideBarHideActive,
    setNavbarActive,
    setSideBarHideActive,
  } = useContext(DarkMode);
  const [text, setText] = useState("Cambiar a modo oscuro");
  const [backgroundHome, setBackgroundHome] = useState(true);
  const [backgroundProducts, setBackgroundProducts] = useState(false);
  const [backgroundStore, setBackgroundStore] = useState(false);

  const handleClickChangeBackgroundColorHomeNav = () => {
    console.log(navLinkHome);
    if (backgroundHome) {
      setBackgroundHome(true);
    } else {
      setBackgroundHome(true);
    }

    setBackgroundProducts(false);
    setBackgroundStore(false);
  };

  const handleClickChangeBackgroundColorProductsNav = (e) => {
    backgroundProducts
      ? setBackgroundProducts(true)
      : setBackgroundProducts(true);

    // if (darkMode) {
    //   navLinkHome.current.className.toggle("textColorDark");
    // } else {
    // }

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
  const navLinkHome = useRef();
  const navLinkProducts = useRef();
  const navLinkStores = useRef();

  useEffect(() => {
    if (navbarActive) {
      sideBarActive.current.style.display = "flex";
      sideBarActive.current.style.zIndex = "100";
      setNavbarActive(!navbarActive);
    }
    if (sideBarHideActive) {
      sideBarActive.current.style.display = "none";
      setSideBarHideActive(!sideBarHideActive);
    }
  }, [navbarActive, sideBarHideActive]);

  return (
    <div
      className={darkMode ? "sideBar bgDarkSidebar" : "sideBar"}
      ref={sideBarActive}
    >
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
                      darkMode ? "iconMenuNavegation" : "iconMenuNavegation"
                    }
                  >
                    {homeIcon}
                  </i>
                </div>
                <div>
                  <p
                    to={"/home"}
                    ref={navLinkHome}
                    className={darkMode ? "nav-link" : "nav-link"}
                  >
                    Home
                  </p>
                </div>
              </NavLink>
              <NavLink
                onClick={handleClickChangeBackgroundColorProductsNav}
                ref={navLinkProducts}
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
                      darkMode ? "iconMenuNavegation" : "iconMenuNavegation"
                    }
                  >
                    {productsIcon}
                  </i>
                </div>
                <div>
                  <p
                    to={"/products"}
                    className={darkMode ? "nav-link" : "nav-link"}
                  >
                    Productos
                  </p>
                </div>
              </NavLink>
              <NavLink
                onClick={handleClickChangeBackgroundColorStoresNav}
                ref={navLinkStores}
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
                      darkMode ? "iconMenuNavegation" : "iconMenuNavegation"
                    }
                  >
                    {storeIcon}
                  </i>
                </div>
                <div>
                  <p
                    to={"/stores"}
                    className={darkMode ? "nav-link" : "nav-link"}
                  >
                    Tiendas
                  </p>
                </div>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className='sidebar__containerbutton'>
          <button
            onClick={handleOnClickDarkMode}
            className={
              darkMode ? "darkModeButton darkModeButton-dark" : "darkModeButton"
            }
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
              <p className={darkMode ? "textBgDark" : ""}>Olivia</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
