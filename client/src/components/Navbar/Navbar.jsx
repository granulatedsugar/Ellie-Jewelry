import React from "react";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./NavbarElements";
import SearchRounded from "@mui/icons-material/SearchRounded";
import Badge from "@mui/material/Badge";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchRounded style={{ color: "#cad2c5", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ELLIE</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="error">
              <LocalMallRoundedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
