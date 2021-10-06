import styled from "styled-components";

export const CartItemEmpty = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65rem;
  margin: 0 auto;
  padding: 1.25rem;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  padding: 1rem 0.3rem;
  align-items: center;
  max-width: 17.5rem;
  margin-top: 3rem;

  background: linear-gradient(
    133.94deg,
    #8256d5 1.41%,
    #3a31c8 23.29%,
    #150855 76.15%,
    #140853 101.52%
  );
  border-radius: 0.313rem;
  color: white;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const CartItemsContainer = styled.section`
  max-width: 65rem;
  margin: 0 auto;
  padding: 1.25rem;
  @media (max-width: 790px) {
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 350px) {
    padding: 1rem;
  }
`;

export const ButtonRemoveAll = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-left: auto;
  background: transparent;
  border: solid red 0.2rem;
  cursor: pointer;
  color: red;
  font-weight: bold;

  svg {
    margin-left: 0.5rem;
  }
`;

export const CheckoutTotalContainer = styled.section`
  padding: 1.25rem;
  max-width: 65rem;
  margin: 0 auto;
`;

export const CheckoutTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  background: white;
  padding: 1.25rem;
  width: 100%;

  div {
    display: grid;
    grid-template-columns: 5rem 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-self: right;
  }
  p {
    font-size: 1.125rem;
  }
`;
