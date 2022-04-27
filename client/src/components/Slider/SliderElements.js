import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";
import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.bg};
  ${mobile({ display: "none" })};
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f1eee4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 60%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: ${(props) => (props.textStart === true ? "left" : "right")};
`;

export const Image = styled.img`
  height: 80%;
`;

export const Title = styled.h1`
  font-size: 70px;
  color: #000;
  font-family: "Playfair Display", sans-serif;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  margin: 20px 0px;
  color: #000;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const ColorButton = StyledMd(Button)`
  color: #000;
  font-family: "Urbanist", sans-serif;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 0px;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
