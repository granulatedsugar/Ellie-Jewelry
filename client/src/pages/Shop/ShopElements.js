import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";

export const Container = styled.div``;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  margin: 20px;
`;

export const Title = styled.h1`
  margin: 20px;
`;

export const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-right: 20px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: none;
`;

export const Option = styled.option``;

export const ColorButton = StyledMd(Button)`
  color: #000;
  font-family: "Urbanist", sans-serif;
  border: 1px solid #fff;
  border-radius: 0px;
  cursor: pointer;
  text-transform: capitalize ;
`;
