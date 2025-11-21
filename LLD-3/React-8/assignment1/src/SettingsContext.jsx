import React, { useState } from "react";

export const SettingsContext = React.createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  const value = {
    theme,
    setTheme,
    language,
    setLanguage,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};