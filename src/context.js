import React, { useState, useContext, useReducer } from "react";
import reducer from "./reducer";
import ItemList from "./data/products.json";

const AppContext = React.createContext();

const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  cart: initialCart,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [orderBy, setOrderBy] = useState("priceAsc");

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const newItemCart = (item) => {
    dispatch({ type: "ADD_NEW", payload: item });
  };

  const handleChange = (selectedOption) => {
    setOrderBy(selectedOption.value);
  };

  return (
    <AppContext.Provider
      value={{
        ItemList,
        handleChange,
        orderBy,
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        newItemCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
