import styled from "styled-components";
import {
  Button,
  Paper,
  MenuList,
  Radio,
  Popper,
  FormLabel,
  FormControlLabel,
  Typography,
} from "@mui/material";
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

export const CustomPopper = StyledMd(Popper)`
  z-index: 5;
  min-width: 100%;
`;

export const CustomPaper = StyledMd(Paper)`
  min-width: "120px";
  `;

export const CustomMenuList = StyledMd(MenuList)`
  display: flex;
  justify-content: space-between;
  padding: 100px;
`;

export const CustomRadio = StyledMd(Radio)`
  color: #000;
  &.Mui-checked{
    color: #000;
  }
`;

export const CustomFormLabel = StyledMd(FormLabel)`
  color: #2e2e2e;
`;

export const CustomTypography = StyledMd(Typography)`
 color: #000;
 font-size: 14px;
`;

export const CustomFormControlLabel = StyledMd(FormControlLabel)``;

export const ColorButton = StyledMd(Button)`
  color: #000;
  font-family: "Urbanist", sans-serif;
  border: 1px solid #fff;
  border-radius: 0px;
  cursor: pointer;
  text-transform: capitalize;
`;
