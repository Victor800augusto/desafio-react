import React from "react";
import ItemCardList from "../components/ItemCardList";
import { useGlobalContext } from "../context";

const Home = () => {
  const { data } = useGlobalContext();
  console.log(data);
  return <ItemCardList />;
};

export default Home;
