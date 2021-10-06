import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {
  CartItemsContainer,
  CheckoutTotal,
  CheckoutTotalContainer,
  ButtonRemoveAll,
  CartItemEmpty,
  Button,
} from "./styles/Checkout.style";
import { BsXLg } from "react-icons/bs";

const Checkout = () => {
  const { cart, clearCart } = useGlobalContext();
  let subTotal = 0;
  let shipping = 0;
  let cartTotalAmount = 0;
  let total = 0;

  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price * cart[i].amount;
      cartTotalAmount += cart[i].amount;
    }
    subTotal = parseFloat(subTotal.toFixed(2));
    if (subTotal > 250.0) {
      shipping = 0;
    } else {
      shipping = cartTotalAmount * 10;
    }
    total = parseFloat((subTotal + shipping).toFixed(2));
  }

  if (cart.length === 0) {
    return (
      <CartItemEmpty>
        <h1>Carrinho vazinho</h1>
        <Link to="/">
          <Button>Voltar para a página principal</Button>
        </Link>
      </CartItemEmpty>
    );
  }

  return (
    <>
      <CartItemsContainer>
        <h1>Carrinho de compras</h1>
        <ButtonRemoveAll onClick={() => clearCart()}>
          Remover todos os itens
          <BsXLg color="red" size={20} />
        </ButtonRemoveAll>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </CartItemsContainer>
      <CheckoutTotalContainer>
        <CheckoutTotal>
          <div>
            <p>Subtotal:</p>
            <p>R$ {subTotal}</p>

            <p>Frete:</p>
            <p>R$ {shipping}</p>

            <p>Total:</p>
            <p>R$ {total}</p>
          </div>
        </CheckoutTotal>
      </CheckoutTotalContainer>
    </>
  );
};

export default Checkout;
