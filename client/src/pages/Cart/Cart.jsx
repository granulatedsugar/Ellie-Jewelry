import React from "react";
import {
  Bottom,
  ColorButton,
  Info,
  Summary,
  Container,
  Title,
  Top,
  Link,
  Wrapper,
  Product,
  Image,
  ProductDetail,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductQtyContainer,
  ProductPrice,
  Filter,
  FilterTitle,
  Select,
  Option,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryContainer,
} from "./CartElements";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Featured from "../../components/Featured/Featured";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  return (
    <Container>
      <Wrapper>
        <Top>
          <ChevronLeftIcon style={{ fontSize: "14px" }} />
          <Link>Continue Shopping</Link>
        </Top>
        <Title>Shopping Bag</Title>
        <Bottom>
          <Info>
            <Hr />
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>{product.name}</ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Size: </b> {product.size}
                    </ProductSize>
                    <ProductColor color={product.metalColor} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductQtyContainer>
                    <Filter>
                      <FilterTitle>Qty</FilterTitle>
                      <Select>
                        <Option>{product.quantity}</Option>
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                        <Option>5</Option>
                      </Select>
                    </Filter>
                  </ProductQtyContainer>
                  <ProductPrice>{formatter.format(product.price)}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryContainer>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>
                  {formatter.format(cart.total)}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Fee</SummaryItemText>
                <SummaryItemPrice>$80.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Tax</SummaryItemText>
                <SummaryItemPrice>$1,190.00</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText type="total">Estimated Total</SummaryItemText>
                <SummaryItemPrice type="total">
                  {formatter.format(cart.total)}
                </SummaryItemPrice>
              </SummaryItem>
              <ColorButton>CHECKOUT</ColorButton>
            </SummaryContainer>
          </Summary>
        </Bottom>
      </Wrapper>
      <Featured />
    </Container>
  );
};

export default Cart;
