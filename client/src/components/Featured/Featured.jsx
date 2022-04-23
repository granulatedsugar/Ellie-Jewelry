import React from "react";
import Products from "../Products/Products";
import { Container, Title } from "./FeaturedElements";

const FeaturedElements = () => {
  return (
    <Container>
      <Title>FEATURED PRODUCTS</Title>
      <Products />
    </Container>
  );
};

export default FeaturedElements;
