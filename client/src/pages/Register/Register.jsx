import React from "react";
import {
  Agreement,
  ColorButton,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./RegisterElements";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="First" />
          <Input placeholder="Last" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </Agreement>
          <ColorButton>Register</ColorButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
