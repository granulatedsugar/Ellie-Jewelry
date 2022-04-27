import { autocompleteClasses } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
  height: 100px;
  margin: auto;
  padding: 0px 0px 30px 0px;
  background-color: #fff;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  width: ${(props) => (props.mainNav === "main" ? "60%" : "90%")};
  margin: auto;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
`;

// NAVBAR LEFT + ITEMS
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid #cad2c5;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

export const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;

// NAVBAR CENTER + ITEMS
export const Center = styled.div`
  flex: 1;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: 500;
  ${mobile({ fontSize: "24px" })}
`;

// NAVBAR RIGHT + ITEMS
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "end" })}
`;

export const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px", display: "none" })};

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
