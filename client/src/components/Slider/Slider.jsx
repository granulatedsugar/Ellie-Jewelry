import React, { useState } from "react";
import {
  Container,
  Arrow,
  ImgContainer,
  Image,
  InfoContainer,
  Slide,
  Title,
  Description,
  Wrapper,
  ColorButton,
} from "./SliderElements";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { sliderItems } from "../../Data/data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftRoundedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          // Switch columns every slide using imgStart ?
          return item.imgStart === true ? (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer textStart={item.imgStart}>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <ColorButton>SHOP NOW</ColorButton>
              </InfoContainer>
            </Slide>
          ) : (
            <Slide bg={item.bg}>
              <InfoContainer textStart={item.imgStart}>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <ColorButton>SHOP NOW</ColorButton>
              </InfoContainer>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
