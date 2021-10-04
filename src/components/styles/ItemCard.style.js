import styled from "styled-components";

export const StyledItemCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.75rem;
  padding-top: 0.625rem;
  background: white;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.3);
  }
`;
export const ItemCardInfo = styled.div`
  padding: 0.625rem;
`;

export const Button = styled.button`
  background: linear-gradient(
    133.94deg,
    #8256d5 1.41%,
    #3a31c8 23.29%,
    #150855 76.15%,
    #140853 101.52%
  );
  color: white;
  font-size: 1rem;
  padding: 1rem 0.75rem;
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.img`
  width: 40px;
`;
