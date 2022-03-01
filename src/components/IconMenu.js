import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../context/DarkModeContext";
import "../App.css";
const faBarsIcon = <FontAwesomeIcon icon={faBars} />;

export const IconMenu = () => {
  const { navbarActive, setNavbarActive, darkMode } = useContext(DarkMode);

  const handleOnClick = () => {
    setNavbarActive(!navbarActive);
    console.log(navbarActive);
  };

  return (
    <i
      className={darkMode ? "icon-menu icon-white" : "icon-menu"}
      onClick={handleOnClick}
    >
      {faBarsIcon}
    </i>
  );
};
