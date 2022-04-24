import React from "react";
import {
  ColorButton,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./NewsletterElements";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <ColorButton>
          <SendRoundedIcon />
        </ColorButton>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
