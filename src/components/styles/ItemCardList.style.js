import styled from "styled-components";

export const StyledItemCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
  max-width: 65rem;
  margin: 0 auto;
  padding: 1.25rem;
  gap: 0.95rem;
`;
