import React, { createContext, useState } from "react";

export const DarkMode = createContext();

export const DarkModeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};
