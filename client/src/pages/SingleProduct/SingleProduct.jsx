import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const ReadyMade = () => {
    return (
      <>
        <Filter>
          <FilterTitle>Metal Color</FilterTitle>
          {product.metalColor?.map((c) => (
            <FilterColor color={c} key={c} />
          ))}
        </Filter>
        <Filter>
          <FilterTitle>Purity</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.purity?.map((p) => (
              <Option>{p}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Size</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.size?.map((size) => (
              <Option>{size}</Option>
            ))}
          </Select>
        </Filter>
      </>
    );
  };

  const CustomMade = () => {
    return (
      <>
        <Filter>
          <FilterTitle>Metal Color</FilterTitle>
          {product.metalColor?.map((c) => (
            <FilterColor color={c} key={c} />
          ))}
        </Filter>
        <Filter>
          <FilterTitle>Purity</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.purity?.map((p) => (
              <Option>{p}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Stone</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.centerStone?.map((cs) => (
              <Option>{cs}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Shape</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.stoneShape?.map((sh) => (
              <Option>{sh}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Clarity</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.clarity?.map((cl) => (
              <Option>{cl}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Carat</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.carat?.map((cr) => (
              <Option>{cr}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Size</FilterTitle>
          <Select>
            <Option disabled selected>
              Select
            </Option>
            {product.size?.map((size) => (
              <Option>{size}</Option>
            ))}
          </Select>
        </Filter>
      </>
    );
  };

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
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
              {product.category?.[0]}
            </Typography>
          </Breadcrumbs>
          <Title>{product.title}</Title>
          <MfgType>
            <FavoriteBorderOutlinedIcon />{" "}
            {product.madeToOrder ? "Made to Order" : "Ready Made"}
          </MfgType>
          <FilterContainer>
            {product.madeToOrder ? <CustomMade /> : <ReadyMade />}
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
            <Price>{formatter.format(product.price)}</Price>
          </PriceContainer>
          <ColorButton>BUY NOW</ColorButton>
          <ColorButton>ADD TO BAG</ColorButton>
          <Description>{product.desc}</Description>
        </InfoContainer>
      </Wrapper>
      <Featured />
    </Container>
  );
};

export default SingleProduct;
