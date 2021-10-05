import styled from "styled-components";

export const StyledCartItem = styled.article`
  display: flex;
`;

export const Arrow = styled.img`
  width: 1.5rem;

  &:hover {
    background: blue;
  }
`;

export const ArrowUp = styled(Arrow)`
  transform: scaleY(-1);
`;

export const ButtonAmount = styled.button`
  width: 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;
