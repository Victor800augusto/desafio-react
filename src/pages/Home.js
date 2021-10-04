import React from "react";
import ItemCardList from "../components/ItemCardList";
import CustomSelect from "../components/CustomSelect";
import { StyledHome } from "../components/styles/Home.style";

const Home = () => {
  return (
    <StyledHome>
      <CustomSelect />
      <ItemCardList />
    </StyledHome>
  );
};

export default Home;
