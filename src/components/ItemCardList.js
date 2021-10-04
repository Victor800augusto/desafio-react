import React from "react";
import ItemCard from "../components/ItemCard";
import { StyledItemCardList } from "./styles/ItemCardList.style";
import { useGlobalContext } from "../context";

const ItemCardList = () => {
  const { ItemList } = useGlobalContext();
  return (
    <StyledItemCardList>
      {ItemList.map((item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </StyledItemCardList>
  );
};

export default ItemCardList;
