import React from "react";
import ItemCard from "../components/ItemCard";
import { StyledItemCardList } from "./styles/ItemCardList.style";
import { useGlobalContext } from "../context";
import { sort } from "../utils";

const ItemCardList = () => {
  const { ItemList, orderBy } = useGlobalContext();

  if (orderBy === "priceAsc") {
    sort(ItemList, "price");
    return (
      <StyledItemCardList>
        {ItemList.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </StyledItemCardList>
    );
  }
  if (orderBy === "priceDes") {
    sort(ItemList, "price").reverse();
    return (
      <StyledItemCardList>
        {ItemList.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </StyledItemCardList>
    );
  }
  if (orderBy === "scoreAsc") {
    sort(ItemList, "score");
    return (
      <StyledItemCardList>
        {ItemList.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </StyledItemCardList>
    );
  }
  if (orderBy === "scoreDes") {
    sort(ItemList, "score").reverse();
    return (
      <StyledItemCardList>
        {ItemList.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </StyledItemCardList>
    );
  }
  if (orderBy === "alphabetAtoZ") {
    sort(ItemList, "alphabet");
    return (
      <StyledItemCardList>
        {ItemList.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </StyledItemCardList>
    );
  }
  if (orderBy === "alphabetZtoA") {
    sort(ItemList, "alphabet").reverse();
    return (
      <StyledItemCardList>
        {ItemList.map((item) => {
          return <ItemCard key={item.id} {...item} />;
        })}
      </StyledItemCardList>
    );
  }
};

export default ItemCardList;
