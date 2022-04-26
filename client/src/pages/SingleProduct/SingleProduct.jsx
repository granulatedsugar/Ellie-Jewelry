import React from "react";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  PriceContainer,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  Select,
  Option,
  QtyContainer,
  AddContainer,
  Qty,
  ColorButton,
  MfgType,
} from "./SingleProductElements";
import Featured from "../../components/Featured/Featured";
import { Typography, Breadcrumbs } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const SingleProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-round-brilliant-diamond-68975425_1028237_ED_M.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Breadcrumbs aria-label="breadcrumb" style={{ fontSize: "9px" }}>
            <Typography
              underline="hover"
              color="inherit"
              href="/"
              style={{ fontSize: "9px" }}
            >
              Home
            </Typography>
            <Typography
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              style={{ fontSize: "9px" }}
            >
              Designer Jewelry
            </Typography>
            <Typography color="text.primary" style={{ fontSize: "9px" }}>
              Rings
            </Typography>
          </Breadcrumbs>
          <Title>Round Brilliant Diamond</Title>
          <MfgType>
            <FavoriteBorderOutlinedIcon /> Made to Order
          </MfgType>
          <FilterContainer>
            <Filter>
              <FilterTitle>Metal Color</FilterTitle>
              <FilterColor color="#F7F7F7" />
              <FilterColor color="#d4af37" />
              <FilterColor color="#CBA3B2" />
            </Filter>
            <Filter>
              <FilterTitle>Purity</FilterTitle>
              <Select>
                <Option disabled selected></Option>
                <Option>10k</Option>
                <Option>14k</Option>
                <Option>18k</Option>
                <Option>24k</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Stone</FilterTitle>
              <Select>
                <Option disabled selected></Option>
                <Option>Diamond</Option>
                <Option>Signity</Option>
                <Option>Mossainite</Option>
                <Option>Lab Diamond</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Shape</FilterTitle>
              <Select>
                <Option></Option>
                <Option>Round Brilliant</Option>
                <Option>Cushion</Option>
                <Option>Emerald</Option>
                <Option>Princess</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Clarity</FilterTitle>
              <Select>
                <Option></Option>
                <Option>SI-VS</Option>
                <Option>SI</Option>
                <Option>VS</Option>
                <Option>VVS</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Carat</FilterTitle>
              <Select>
                <Option disabled selected></Option>
                <Option>0.3</Option>
                <Option>0.5</Option>
                <Option>1</Option>
                <Option>2</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Ring Size</FilterTitle>
              <Select>
                <Option disabled selected></Option>
                <Option>3</Option>
                <Option>4</Option>
                <Option>5</Option>
                <Option>6</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <FilterTitle>Quantity</FilterTitle>
            <QtyContainer>
              <RemoveIcon style={{ fontSize: "12px" }} />
              <Qty>1</Qty>
              <AddIcon style={{ fontSize: "12px" }} />
            </QtyContainer>
          </AddContainer>
          <PriceContainer>
            <FilterTitle>Total Price</FilterTitle>
            <Price>$17,000.00</Price>
          </PriceContainer>
          <ColorButton>BUY NOW</ColorButton>
          <ColorButton>ADD TO BAG</ColorButton>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id
            non voluptatibus maxime molestiae aliquam distinctio enim tempora
            possimus rerum error, quaerat nulla, natus dolores nemo accusantium
            placeat? Ad, perferendis?
          </Description>
        </InfoContainer>
      </Wrapper>
      <Featured />
    </Container>
  );
};

export default SingleProduct;
