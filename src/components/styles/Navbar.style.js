import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  max-width: 65rem;
  margin: 0 auto;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const CartItems = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1.25rem;
  left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  border-radius: 50%;

  p {
    color: black;
  }
`;
