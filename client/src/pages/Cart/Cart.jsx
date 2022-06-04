import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { adjustQuantity, reset, removeProduct } from "../../redux/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

// import dotenv from "dotenv";

// dotenv.config();

const KEY =
  "pk_test_51KvqZcLmaSzy3z1g2c2vPVjuWHHHDfwDSEDNrEdOWjnLLagldXYTfwoNyxkgs4T6QAfs2iuDOwBnjs3yiKAcc6f0006e1vTkDj";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async (cart) => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  const dispatch = useDispatch();

  const onChangeQuantityHandle = (e, product) => {
    dispatch(
      adjustQuantity({
        quantity: Number(e.target.value),
        productPrice: product.actualPrice,
        productId: product._id,
        previousPrice: product.totalPrice,
      })
    );
  };

  const clearPage = () => {
    dispatch(reset());
  };

  const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  const removeFromCart = (e, product) => {
    dispatch(
      removeProduct({
        quantity: Number(e.target.value),
        productPrice: product.actualPrice,
        productId: product._id,
        previousPrice: product.totalPrice,
      })
    );
  };

  console.log(cart.products);

  return (
    <Container>
      <Wrapper>
        <Top>
          <ChevronLeftIcon style={{ fontSize: "14px" }} />
          <Link>Continue Shopping</Link>
          <ColorButton onClick={clearPage}>
            CLEAR CART FOR TESTING ONLY!
          </ColorButton>
        </Top>
        <Title>Shopping Bag</Title>
        <Bottom>
          <Info>
            <Hr />
            {cart.products?.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>{product.title}</ProductName>
                    <ProductId>
                      <b>ID:</b> {product.productSku}
                    </ProductId>
                    <ProductSize>
                      <b>Size: </b> {product.size}
                    </ProductSize>
                    <ProductColor color={product.metalColor} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <CloseIcon onClick={(e) => removeFromCart(e, product)} />
                  <ProductQtyContainer>
                    <Filter>
                      <FilterTitle>Qty</FilterTitle>
                      <Select
                        onChange={(e) => onChangeQuantityHandle(e, product)}
                        defaultValue={product.quantity}
                      >
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                        <Option>5</Option>
                      </Select>
                    </Filter>
                  </ProductQtyContainer>
                  <ProductPrice>
                    {formatter.format(product.totalPrice)}
                  </ProductPrice>
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
              {!cart.products.length ? (
                <ColorButton
                  disabled={true}
                  style={{
                    color: "#000",
                    background: "#fff",
                    textDecoration: "line-through",
                  }}
                >
                  CHECKOUT
                </ColorButton>
              ) : (
                <StripeCheckout
                  name="Ellie Jewelry"
                  image="https://vectorlogos.net/wp-content/uploads/2019/08/Jewelry-Design-logo-1.jpg"
                  billingAddress
                  shippingAddress
                  description={`Your total is ${formatter.format(cart.total)}`}
                  amount={cart.total * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <ColorButton>CHECKOUT</ColorButton>
                </StripeCheckout>
              )}
            </SummaryContainer>
          </Summary>
        </Bottom>
      </Wrapper>
      <Featured />
    </Container>
  );
};

export default Cart;
