import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";

export const ColorButton = StyledMd(Button)`
  color: #fff;
  font-family: "Urbanist", sans-serif;
  border: 1px solid #fff;
  border-radius: 0px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
  }
`;

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 45vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
