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
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});

  const [selection, setSelection] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [metalColor, setMetalColor] = useState("");
  const dispatch = useDispatch();

  const calcSelection = { ...selection };

  // Metal Calc
  const goldPrice = 3500;
  const grams = product.grams;
  const initialPurity = !calcSelection.purity
    ? product.purity?.[0] / 24
    : Number(calcSelection.purity) / 24;
  const totalPurity = initialPurity * goldPrice * grams * 1.15;

  // Extras
  const labor = product.labor;
  const markup = product.markup / 100;
  const packaging = product.packaging;

  // StoneCalc
  const stone = !calcSelection.carat
    ? (product.madeToOrder ? Number(product.carat?.[0]) * 1 * 60000 : 0)
    : Number(calcSelection.carat) * 1 * 60000;

  const total = stone + totalPurity + labor + packaging;
  const markedUp = total * markup + total;

  const totalPrice = Number(markedUp.toFixed(2));

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

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleChange = (e) => {
    setSelection((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitToBag = () => {
    // Update cart
    dispatch(
      addProduct({
        ...product,
        quantity,
        metalColor,
        ...selection,
        totalPrice: totalPrice * quantity,
        actualPrice: totalPrice,
      })
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
            {product.madeToOrder ? (
              <>
                <Filter>
                  <FilterTitle>Metal Color</FilterTitle>
                  {product.metalColor?.map((c) => (
                    <FilterColor
                      color={c}
                      key={c}
                      defaultValue={product.metalColor?.[0]}
                      onClick={() => setMetalColor(c)}
                    />
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Purity</FilterTitle>
                  <Select
                    name="purity"
                    defaultValue={product.purity?.[0]}
                    onChange={handleChange}
                  >
                    {product.purity?.map((p) => (
                      <Option key={p}>{p}</Option>
                    ))}
                  </Select>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <Select
                    name="size"
                    defaultValue={product.size?.[0]}
                    onChange={handleChange}
                  >
                    {product.size?.map((size) => (
                      <Option key={size}>{size}</Option>
                    ))}
                  </Select>
                </Filter>
                <Filter>
                  <FilterTitle>Stone</FilterTitle>
                  <Select
                    name="centerStone"
                    defaultValue={product.centerStone?.[0]}
                    onChange={handleChange}
                  >
                    {product.centerStone?.map((cs) => (
                      <Option key={cs}>{cs}</Option>
                    ))}
                  </Select>
                </Filter>
                <Filter>
                  <FilterTitle>Shape</FilterTitle>
                  <Select
                    name="stoneShape"
                    defaultValue={product.stoneShape?.[0]}
                    onChange={handleChange}
                  >
                    {product.stoneShape?.map((sh) => (
                      <Option key={sh}>{sh}</Option>
                    ))}
                  </Select>
                </Filter>
                <Filter>
                  <FilterTitle>Clarity</FilterTitle>
                  <Select
                    name="clarity"
                    defaultValue={product.clarity?.[0]}
                    onChange={handleChange}
                  >
                    {product.clarity?.map((cl) => (
                      <Option key={cl}>{cl}</Option>
                    ))}
                  </Select>
                </Filter>
                <Filter>
                  <FilterTitle>Carat</FilterTitle>
                  <Select
                    name="carat"
                    defaultValue={product.carat?.[0]}
                    onChange={handleChange}
                  >
                    {product.carat?.map((cr) => (
                      <Option key={cr}>{cr}</Option>
                    ))}
                  </Select>
                </Filter>
              </>
            ) : (
              <>
                <Filter>
                  <FilterTitle>Metal Color</FilterTitle>
                  {product.metalColor?.map((c) => (
                    <FilterColor
                      color={c}
                      key={c}
                      onClick={() => setMetalColor(c)}
                    />
                  ))}
                </Filter>
                <Filter>
                  <FilterTitle>Purity</FilterTitle>
                  <Select
                    name="purity"
                    onChange={handleChange}
                  >
                    {product.purity?.map((p) => (
                      <Option key={p}>{p}</Option>
                    ))}
                  </Select>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <Select
                    name="size"
                    onChange={handleChange}
                  >
                    {product.size?.map((size) => (
                      <Option key={size}>{size}</Option>
                    ))}
                  </Select>
                </Filter>
              </>
            )}
          </FilterContainer>
          <AddContainer>
            <FilterTitle>Quantity</FilterTitle>
            <QtyContainer>
              <RemoveIcon
                style={{ fontSize: "12px" }}
                onClick={() => handleQuantity("dec")}
              />
              <Qty>{quantity}</Qty>
              <AddIcon
                style={{ fontSize: "12px" }}
                onClick={() => handleQuantity("inc")}
              />
            </QtyContainer>
          </AddContainer>
          <PriceContainer>
            <FilterTitle>Total Price</FilterTitle>
            <Price>{formatter.format(totalPrice * quantity)}</Price>
          </PriceContainer>
          {product.madeToOrder && !selection ? (
            <>
              <ColorButton disabled sx={{ backgroundColor: "#fffefe" }}>
                BUY NOW
              </ColorButton>
              <ColorButton
                disabled
                sx={{ backgroundColor: "#fffefe" }}
                onClick={handleSubmitToBag}
              >
                ADD TO BAG
              </ColorButton>
            </>
          ) : (
            <>
              <ColorButton>BUY NOW</ColorButton>
              <ColorButton onClick={handleSubmitToBag}>ADD TO BAG</ColorButton>
            </>
          )}
          <Description>{product.desc}</Description>
        </InfoContainer>
      </Wrapper>
      <Featured />
    </Container>
  );
};

export default SingleProduct;
