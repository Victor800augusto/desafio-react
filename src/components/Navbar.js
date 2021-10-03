import React from "react";
import { StyledNavbar } from "./styles/Navbar.style";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <h1>GamesStore</h1>
      </Link>
      <Link to="/Checkout">
        <BsCart />
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
