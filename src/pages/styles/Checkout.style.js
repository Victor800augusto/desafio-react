import styled from "styled-components";

export const CartItemsContainer = styled.section`
  max-width: 65rem;
  margin: 0 auto;
  padding: 1.25rem;
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
