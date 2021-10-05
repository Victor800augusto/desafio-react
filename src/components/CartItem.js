import React from "react";
import { useGlobalContext } from "../context";
import {
  StyledCartItem,
  ArrowUp,
  Arrow,
  ButtonAmount,
} from "./styles/CartItem.style";

const CartItem = ({ id, image, name, price, score, amount }) => {
  return (
    <StyledCartItem>
      <img src={`assets/${image}`} alt={name} />
      <div>
        <h3>{name}</h3>
        <h3>Score {score}</h3>
        <h2>R$ {price}</h2>
      </div>
      <div>
        <ButtonAmount onClick={() => console.log("increase")}>
          <ArrowUp src="assets/arrow-down-icon.svg" alt="" />
        </ButtonAmount>
        <p>{amount}</p>
        <ButtonAmount onClick={() => console.log("decrease")}>
          <Arrow src="assets/arrow-down-icon.svg" alt="" />
        </ButtonAmount>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
