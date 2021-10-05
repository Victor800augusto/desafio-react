import React from "react";
import { useGlobalContext } from "../context";
import {
  StyledCartItem,
  ArrowUp,
  Arrow,
  ButtonAmount,
  ItemCartInfo,
  PriceInfo,
  ScoreInfo,
  AmountContainer,
  ButtonRemove,
  AmountInfo,
  TotalAmountInfo,
} from "./styles/CartItem.style";
import { BsXLg } from "react-icons/bs";

const CartItem = ({ id, image, name, price, score, amount }) => {
  const { cart } = useGlobalContext();

  let total = amount * price;

  return (
    <StyledCartItem>
      <img src={`assets/${image}`} alt={name} />
      <ItemCartInfo>
        <h3>{name}</h3>
        <ScoreInfo>Score {score}</ScoreInfo>
      </ItemCartInfo>
      <PriceInfo>R$ {price}</PriceInfo>
      <AmountContainer>
        <ButtonAmount onClick={() => console.log("increase")}>
          <ArrowUp src="assets/arrow-down-icon.svg" alt="" />
        </ButtonAmount>
        <AmountInfo>
          <p>{amount}</p>
        </AmountInfo>
        <ButtonAmount onClick={() => console.log("decrease")}>
          <Arrow src="assets/arrow-down-icon.svg" alt="" />
        </ButtonAmount>
        <ButtonRemove>
          <BsXLg color="red" size={20} />
        </ButtonRemove>
      </AmountContainer>
      <TotalAmountInfo>R$ {total}</TotalAmountInfo>
    </StyledCartItem>
  );
};

export default CartItem;
