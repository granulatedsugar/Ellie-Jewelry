import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80%;
  columns: 1;
  column-gap: 1rem;
  margin: auto;
  @media (min-width: 640px) {
    columns: 1;
  }
  @media (min-width: 768px) {
    columns: 2;
  }
  @media (min-width: 1024px) {
    columns: 4;
  }
`;
