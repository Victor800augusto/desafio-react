import React from "react";
import { useGlobalContext } from "../context";
import {
  StyledItemCard,
  ItemCardInfo,
  Button,
  CartIcon,
} from "./styles/ItemCard.style";

const ItemCard = (item) => {
  const { addToCart } = useGlobalContext();

  return (
    <StyledItemCard>
      <img src={`assets/${item.image}`} alt="" />
      <ItemCardInfo>
        <h4>{item.name}</h4>
        <h4>Score: {item.score}</h4>
        <h3>R$ {item.price}</h3>
      </ItemCardInfo>
      <Button onClick={() => addToCart(item)} data-tip data-for="addTip">
        Adicionar ao carrinho
        <CartIcon src="assets/cart-icon.svg" />
      </Button>
    </StyledItemCard>
  );
};

export default ItemCard;
