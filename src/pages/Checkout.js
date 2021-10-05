import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "../components/CartItem";

const Checkout = () => {
  const { cart } = useGlobalContext();
  if (cart.length === 0) {
    <section>
      <h4>empty</h4>
    </section>;
  }
  return (
    <section>
      <h1>Checkout</h1>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Checkout;
