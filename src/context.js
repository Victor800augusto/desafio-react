import React, { useState, useContext, useEffect, useReducer } from "react";
import ItemList from "./data/products.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [orderBy, setOrderBy] = useState("priceAsc");

  const handleChange = (selectedOption) => {
    setOrderBy(selectedOption.value);
  };

  return (
    <AppContext.Provider value={{ ItemList, handleChange, orderBy }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
