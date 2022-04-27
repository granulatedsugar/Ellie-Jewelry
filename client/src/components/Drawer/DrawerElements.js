import styled from "styled-components";
import { mobile } from "../../Responsive";

export const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  padding: 0px 100px;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 2px #000;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  &:after {
    transform-origin: 0% 50%;
  }
`;

export const Logo = styled.h1`
  font-weight: 500;
  text-align: center;
  ${mobile({ fontSize: "24px" })}
`;
