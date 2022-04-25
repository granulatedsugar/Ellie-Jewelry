import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";

export const Container = styled.div`
  height: 40vh;
  background-color: #000;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: #fff;
`;
export const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #fff;
`;
export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

export const ColorButton = StyledMd(Button)`
  flex: 1;
  color: #fff;
  background-color: #000;
  font-family: "Urbanist", sans-serif;
  border: 1px solid #fff;
  border-radius: 0px;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
  }
`;
