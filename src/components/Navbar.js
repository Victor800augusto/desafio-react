import React from "react";
import { StyledNavbar } from "./styles/Navbar.style";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>GamesStore</h1>
      <BsCart />
    </StyledNavbar>
  );
};

export default Navbar;
