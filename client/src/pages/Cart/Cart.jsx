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
  ProductQty,
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

const Cart = () => {
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
            <Product>
              <ProductDetail>
                <Image src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-round-brilliant-diamond-68975425_1028237_ED_M.jpg" />
                <Details>
                  <ProductName>Round Brilliant Diamond</ProductName>
                  <ProductId>
                    <b>ID:</b> 60011685
                  </ProductId>
                  <ProductSize>
                    <b>Size: </b> 6
                  </ProductSize>
                  <ProductColor color="#F7F7F7" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQtyContainer>
                  <Filter>
                    <FilterTitle>Qty</FilterTitle>
                    <Select>
                      <Option>0</Option>
                      <Option>1</Option>
                      <Option>2</Option>
                      <Option>3</Option>
                      <Option>4</Option>
                      <Option>5</Option>
                    </Select>
                  </Filter>
                </ProductQtyContainer>
                <ProductPrice>$17,000.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-perettiopen-heart-pendant-60957401_1023440_ED.jpg" />
                <Details>
                  <ProductName>Open Heart Pendant</ProductName>
                  <ProductId>
                    <b>ID:</b> 60011681
                  </ProductId>
                  <ProductSize>
                    <b>Size: </b> 4
                  </ProductSize>
                  <ProductColor color="#d4af37" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductQtyContainer>
                  <Filter>
                    <FilterTitle>Qty</FilterTitle>
                    <Select>
                      <Option>0</Option>
                      <Option>1</Option>
                      <Option>2</Option>
                      <Option>3</Option>
                      <Option>4</Option>
                      <Option>5</Option>
                    </Select>
                  </Filter>
                </ProductQtyContainer>
                <ProductPrice>$575.00</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          <Summary>
            <SummaryContainer>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$17,575.00</SummaryItemPrice>
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
                <SummaryItemPrice type="total">$18,845.00</SummaryItemPrice>
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
