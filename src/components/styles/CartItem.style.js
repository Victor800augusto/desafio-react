import styled from "styled-components";

export const StyledCartItem = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr 2fr;
  padding: 0.5rem;
  margin: 1.5rem 0;
  border: solid #140853 0.2rem;
  background: white;
`;

export const ItemCartInfo = styled.div`
  margin: auto;
  width: 12rem;
`;

export const ScoreInfo = styled.p`
  font-weight: bold;
`;

export const PriceInfo = styled.h2`
  margin: auto;
  color: #8255d5;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 90px;
`;

export const AmountInfo = styled.div`
  text-align: center;
  margin: 0.625rem 0;
  width: 1.875rem;
`;

export const Arrow = styled.img`
  width: 1.5rem;
  transform: rotate(270deg);
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(90deg);
`;

export const ButtonAmount = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonRemove = styled.button`
  height: 25px;
  width: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TotalAmountInfo = styled.h2`
  margin: auto;
  color: #8255d5;
`;
