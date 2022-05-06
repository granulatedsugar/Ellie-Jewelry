import React from "react";
import {
  Circle,
  Container,
  Icon,
  Image,
  Info,
  Wrapper,
} from "./ProductElements";
import SearchRounded from "@mui/icons-material/SearchRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const Product = ({ item }) => {
  return (
    <Container>
      <Wrapper>
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
      </Wrapper>
    </Container>
  );
};

export default Product;
