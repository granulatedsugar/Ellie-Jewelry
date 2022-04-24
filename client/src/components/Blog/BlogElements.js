import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #fafafa;
`;

export const Wrapper = styled.div`
  max-width: 80rem;
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
    columns: 3;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
