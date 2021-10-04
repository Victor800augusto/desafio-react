import styled from "styled-components";

export const StyledItemCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.625rem;
  width: 13.75rem;
  background: white;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 0.75em rgba(0, 0, 0, 0.3);
  }
`;
export const ItemCardInfo = styled.div`
  display:flex;
  flex-direction:column;
  flex-grow: 1;
  padding: 0.625rem;

  h4:first-child{
    font-weight:600;
  }
  h3{
    color: #8255d5;
    margin-top:auto;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 1rem 0.3rem;
  align-items: center;
  
  background: linear-gradient(
    133.94deg,
    #8256d5 1.41%,
    #3a31c8 23.29%,
    #150855 76.15%,
    #140853 101.52%
  );
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  color: white;
  font-size: 1rem;
  font-weight:bold;

  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled.img`
  width: 40px;
`;
