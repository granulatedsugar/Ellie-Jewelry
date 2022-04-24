import React from "react";
import {
  Container,
  ColorButton,
  Image,
  Info,
  Title,
  Description,
  CardHeader,
  ContainerClip,
  ClipMask,
} from "./TopicElements";

const TopicElements = ({ item }) => {
  return (
    <Container>
      <ContainerClip>
        <Image src={item.img} />

        <Info></Info>
        <CardHeader>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
          <ColorButton>{item.button}</ColorButton>
        </CardHeader>
      </ContainerClip>
    </Container>
  );
};

export default TopicElements;
