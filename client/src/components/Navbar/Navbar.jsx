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
import DrawerComponent from "../Drawer/Drawer";
import { useTheme, useMediaQuery } from "@mui/material";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Wrapper>
        {isMobile ? (
          <Left>
            <DrawerComponent />
          </Left>
        ) : (
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <SearchRounded style={{ color: "#cad2c5", fontSize: "16px" }} />
            </SearchContainer>
          </Left>
        )}
        <Center>
          <Logo>ELLIE</Logo>
        </Center>
        {isMobile ? (
          <Right>
            <Badge badgeContent={4} color="error">
              <LocalMallRoundedIcon color="action" />
            </Badge>
          </Right>
        ) : (
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="error">
                <LocalMallRoundedIcon color="action" />
              </Badge>
            </MenuItem>
          </Right>
        )}
      </Wrapper>
      <Wrapper mainNav="main">
        <MenuItem>Jewelry</MenuItem>
        <MenuItem>Love & Engagement</MenuItem>
        <MenuItem>Watches</MenuItem>
        <MenuItem>Accessories</MenuItem>
        <MenuItem>Fragrance</MenuItem>
        <MenuItem>Gifts</MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
