import React, { useState, useContext, useReducer } from "react";
import reducer from "./reducer";
import ItemList from "./data/products.json";

const AppContext = React.createContext();

// const initialCart = [
//   {
//     id: 312,
//     name: "Super Mario Odyssey",
//     price: 197.88,
//     score: 100,
//     image: "super-mario-odyssey.png",
//     amount: 2,
//   },
//   {
//     id: 201,
//     name: "Call Of Duty Infinite Warfare",
//     price: 49.99,
//     score: 80,
//     image: "call-of-duty-infinite-warfare.png",
//     amount: 1,
//   },
//   {
//     id: 102,
//     name: "The Witcher III Wild Hunt",
//     price: 119.5,
//     score: 250,
//     image: "the-witcher-iii-wild-hunt.png",
//     amount: 5,
//   },
// ];
const initialCart = [];

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
  const addToCart = (item) => {
    dispatch({ type: "ADD", payload: item });
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
        addToCart,
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
