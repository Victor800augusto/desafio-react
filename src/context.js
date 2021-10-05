import React, { useState, useContext, useEffect, useReducer } from "react";
import ItemList from "./data/products.json";

const AppContext = React.createContext();

const initialCart = [
  {
    id: 312,
    name: "Super Mario Odyssey",
    price: 197.88,
    score: 100,
    image: "super-mario-odyssey.png",
    amount: 1,
  },
  {
    id: 201,
    name: "Call Of Duty Infinite Warfare",
    price: 49.99,
    score: 80,
    image: "call-of-duty-infinite-warfare.png",
    amount: 1,
  },
  {
    id: 102,
    name: "The Witcher III Wild Hunt",
    price: 119.5,
    score: 250,
    image: "the-witcher-iii-wild-hunt.png",
    amount: 1,
  },
];

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(initialCart);
  const [orderBy, setOrderBy] = useState("priceAsc");

  const handleChange = (selectedOption) => {
    setOrderBy(selectedOption.value);
  };

  return (
    <AppContext.Provider value={{ ItemList, handleChange, orderBy, cart }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
