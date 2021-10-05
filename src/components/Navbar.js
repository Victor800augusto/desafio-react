import React from "react";
import { StyledNavbar, CartItems } from "./styles/Navbar.style";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <h2>GamesStore</h2>
      </Link>
      <Link to="/Checkout" style={{ position: "relative" }}>
        <BsCart size={35} />
        <CartItems>
          <p>1</p>
        </CartItems>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
