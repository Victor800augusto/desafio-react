import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "../components/CartItem";
import {
  CartItemsContainer,
  CheckoutTotal,
  CheckoutTotalContainer,
} from "./styles/Checkout.style";

const Checkout = () => {
  const { cart } = useGlobalContext();
  let subTotal = 0;
  let shipping = 0;
  let cartTotalAmount = 0;
  let total = 0;

  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      subTotal += cart[i].price * cart[i].amount;
      cartTotalAmount += cart[i].amount;
    }
    if (subTotal > 250.0) {
      shipping = 0;
    } else {
      shipping = cartTotalAmount * 10;
    }
    total = subTotal + shipping;
  }

  if (cart.length === 0) {
    <section>
      <h4>Carrinho vazinho</h4>
    </section>;
  }
  return (
    <>
      <CartItemsContainer>
        <h1>Carrinho de compras</h1>
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
