import React from "react";
import {
  Link,
  ColorButton,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
} from "./LoginElements";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Link>Fogot Password?</Link>
          <Link>Register</Link>
          <ColorButton>LOGIN</ColorButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
