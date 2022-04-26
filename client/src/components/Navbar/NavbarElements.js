import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
  height: 100px;
  margin: auto;
  padding: 0px 0px 20px 0px;
  background-color: #fff;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
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
  font-weight: bold;
  font-family: "Playfair Display", sans-serif;
  ${mobile({ fontSize: "24px" })}
`;

// NAVBAR RIGHT + ITEMS
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
