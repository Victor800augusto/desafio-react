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
  const { remove, increase, decrease } = useGlobalContext();

  let total = parseFloat((amount * price).toFixed(2));

  return (
    <StyledCartItem>
      <img src={`assets/${image}`} alt={name} />
      <ItemCartInfo>
        <h3>{name}</h3>
        <ScoreInfo>Score {score}</ScoreInfo>
      </ItemCartInfo>
      <PriceInfo>R$ {price}</PriceInfo>
      <AmountContainer>
        <ButtonAmount onClick={() => decrease(id)}>
          <ArrowUp src="assets/arrow-down-icon.svg" alt="" />
        </ButtonAmount>
        <AmountInfo>
          <p>{amount}</p>
        </AmountInfo>
        <ButtonAmount onClick={() => increase(id)}>
          <Arrow src="assets/arrow-down-icon.svg" alt="" />
        </ButtonAmount>
        <ButtonRemove onClick={() => remove(id)}>
          <BsXLg color="red" size={20} />
        </ButtonRemove>
      </AmountContainer>
      <TotalAmountInfo>R$ {total}</TotalAmountInfo>
    </StyledCartItem>
  );
};

export default CartItem;
