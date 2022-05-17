import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";
import { mobile } from "../../Responsive";

export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
export const ImgContainer = styled.div`
  flex: 8;
  padding: 50px;
`;
export const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: contain;
  ${mobile({ height: "30vh" })}
`;
export const InfoContainer = styled.div`
  flex: 4;
  padding: 0 50px;
  ${mobile({ padding: "0px 0px", width: "100%" })}
`;
export const Title = styled.h1`
  font-weight: 200;
  font-family: "Playfair Display", sans-serif;
`;
export const Description = styled.p`
  margin: 20px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const FilterContainer = styled.div`
  border-top: 1px solid #000;
  padding: 10px 0;
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

export const FilterColor = styled.div`
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid #fff;
  margin: 0;
  direction: rtl;
  cursor: pointer;
  &:target {
    border: 0.5px solid #000;
  }
  &:hover {
    border: 0.5px solid #000;
  }
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

export const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 15px 0;
`;

export const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
export const Qty = styled.span`
  font-size: 14px;
`;

export const ColorButton = StyledMd(Button)`
  color: #fff;
  width: 100%;
  font-family: "Urbanist", sans-serif;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 0px;
  margin-bottom: 5px;

  &:hover {
    color: #000;
    background-color: #f1eee4;
  }
`;

export const MfgType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 12px;
`;
