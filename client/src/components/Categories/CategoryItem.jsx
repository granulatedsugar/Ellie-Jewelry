import React from "react";

import {
  Container,
  Image,
  Info,
  Title,
  ColorButton,
} from "./CategoryItemElements";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <ColorButton>SHOP NOW</ColorButton>
      </Info>
    </Container>
  );
};

export default CategoryItem;
