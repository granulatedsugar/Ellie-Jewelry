import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";
import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
`;
export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  font-family: "Playfair Display", sans-serif;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 20px 0px 0px 0px;
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
export const ColorButton = StyledMd(Button)`
  color: #fff;
  font-family: "Urbanist", sans-serif;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 0px;

  &:hover {
    color: #000;
    background-color: #f1eee4;
  }
`;
