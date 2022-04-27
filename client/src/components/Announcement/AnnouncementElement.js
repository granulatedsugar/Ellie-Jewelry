import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
  height: 35px;
  width: 100%;
  background-color: #000;
  display: flex;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${mobile({
    display: "none",
  })}
`;
