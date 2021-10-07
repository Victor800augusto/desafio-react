import React from "react";
import { StyledNavbar, CartItems } from "./styles/Navbar.style";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { cart } = useGlobalContext();

  let cartTotalAmount = 0;
  if (cart.length) {
    for (let i = 0; i < cart.length; i++) {
      cartTotalAmount += cart[i].amount;
    }
  }
  return (
    <StyledNavbar>
      <Link to="/">
        <h2>GamesStore</h2>
      </Link>
      <Link to="/Checkout" style={{ position: "relative" }}>
        <BsCart size={35} />
        <CartItems>
          <p>{cartTotalAmount}</p>
        </CartItems>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
