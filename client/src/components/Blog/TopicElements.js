import styled from "styled-components";
import { Button } from "@mui/material";
import { styled as StyledMd } from "@mui/material/styles";

export const CardHeader = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  margin-bottom: 1rem;
  break-inside: avoid;
  background-color: white;

  ${CardHeader} {
    padding: 1.5rem;
  }
`;

export const Info = styled.div``;

export const ContainerClip = styled.div`
  position: relative;
  ${Info} {
    position: absolute;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
`;

export const Title = styled.h1`
  padding: 0px 0px 0px 20px;
  font-size: 24px;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const Description = styled.div`
  padding: 0px 20px 0px 20px;
  font-size: 14px;
  color: #000;
`;

export const ColorButton = StyledMd(Button)`
margin-left: 20px;
  color: #fff;
  font-family: "Urbanist", sans-serif;
  border: 1px solid #000;
  background-color: #000;
  border-radius: 0px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
  }
`;
