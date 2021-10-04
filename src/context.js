import React, { useState, useContext, useEffect } from "react";
import ItemList from "./data/products.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ ItemList }}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
