import React from "react";
import {
  StyledItemCard,
  ItemCardInfo,
  Button,
  CartIcon,
} from "./styles/ItemCard.style";

const ItemCard = ({ id, name, price, score, image }) => {
  return (
    <StyledItemCard>
      <img src={`assets/${image}`} alt="" />
      <ItemCardInfo>
        <h4>{name}</h4>
        <h4>Score: {score}</h4>
        <h3>R$ {price}</h3>
      </ItemCardInfo>
      <Button>
        Adicionar ao carrinho
        <CartIcon src="assets/cart-icon.svg" />
      </Button>
    </StyledItemCard>
  );
};

export default ItemCard;
