import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DarkMode } from "../context/DarkModeContext";
import "../App.css";
const faBarsIcon = <FontAwesomeIcon icon={faBars} />;

export const IconMenu = () => {
  const { navbarActive, setNavbarActive } = useContext(DarkMode);

  const handleOnClick = (e) => {
    console.log(e);
    setNavbarActive(!navbarActive);
    console.log(navbarActive);
  };

  //console.log(navbarActive);

  return (
    <i className='icon-menu' onClick={handleOnClick}>
      {faBarsIcon}
    </i>
  );
};
