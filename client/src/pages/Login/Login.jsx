import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import {
  Link,
  ColorButton,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Error,
} from "./LoginElements";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link>Fogot Password?</Link>
          <Link>Register</Link>
          <ColorButton onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </ColorButton>
          {error && (
            <Error>
              Having trouble logging in? Please check your username or password.
            </Error>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
