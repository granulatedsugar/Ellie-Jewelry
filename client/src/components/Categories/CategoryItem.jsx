import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/shop/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <ColorButton>SHOP NOW</ColorButton>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
