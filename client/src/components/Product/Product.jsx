import React from "react";
import { Circle, Container, Icon, Image, Info } from "./ProductElements";
import SearchRounded from "@mui/icons-material/SearchRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <LocalMallOutlinedIcon />
        </Icon>
        <Icon>
          <SearchRounded />
        </Icon>
        <Icon>
          <FavoriteBorderRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
