import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #${(props) => props.bg};
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cad2c5;
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
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
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
  padding: 50px;
`;

export const Image = styled.img`
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 70px;
  color: #2f3e46;
  margin-bottom: 10px;
`;
export const Description = styled.p`
  margin: 20px 0px;
  color: #354f52;
  font-weight: 500;
  letter-spacing: 2px;
`;
