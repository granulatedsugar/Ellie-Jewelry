import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";
import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-weight: 300;
  font-family: "Playfair Display", sans-serif;
  text-align: center;
  padding: 20px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;

export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 8;
`;
export const Summary = styled.div`
  background-color: #f5f5f5;
  flex: 4;
  padding: 20px 0px;
  height: 40vh;
`;

export const SummaryContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const SummaryTitle = styled.h1`
  font-size: 16px;
`;
export const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin: ${(props) => (props.type === "total" ? "20px 0px" : "none")};
  font-size: 12px;
  border-top: ${(props) =>
    props.type === "total" ? "1px solid #000" : "none"};
`;
export const SummaryItemText = styled.span`
  font-size: ${(props) => (props.type === "total" ? 16 : 12)}px;
  font-weight: ${(props) => (props.type === "total" ? 600 : 400)};
`;
export const SummaryItemPrice = styled.span`
  font-size: ${(props) => (props.type === "total" ? 16 : 12)}px;
  font-weight: ${(props) => (props.type === "total" ? 600 : 400)};
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
export const Image = styled.img`
  flex: 8;
  width: 100%;
  height: 30vh;
  object-fit: contain;
`;
export const Details = styled.span`
  padding: 20px;
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-around;
`;
export const ProductName = styled.span`
  font-weight: 600;
  font-size: 14px;
`;
export const ProductId = styled.span`
  font-size: 14px;
`;
export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.span`
  font-size: 14px;
`;
export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductQtyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
export const Select = styled.select`
  border: none;
  margin-left: 10px;
  padding: 5px;
  direction: ltr;
`;
export const Option = styled.option`
  direction: rtl;
`;
export const ProductPrice = styled.span`
  font-size: 14px;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 80%;
`;

export const ColorButton = StyledMd(Button)`
  color: #fff;
  font-family: "Urbanist", sans-serif;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 0px;
  width: 100%;
  height: 50px;

  &:hover {
    color: #000;
    background-color: #f1eee4;
    font-weight: 600;
  }
`;
