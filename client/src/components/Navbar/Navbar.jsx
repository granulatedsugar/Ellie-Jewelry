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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

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
          <Logo href="/">ELLIE</Logo>
        </Center>
        {isMobile ? (
          <Right>
            <Badge badgeContent={quantity} color="error">
              <Link to="/cart">
              <LocalMallRoundedIcon color="action" to="/cart"  />
              </Link>
            </Badge>
          </Right>
        ) : (
          <Right>
            {user ? (
              <MenuItem>{user.username.toUpperCase()}</MenuItem>
            ) : (
              <>
                <MenuItem href="/register">REGISTER</MenuItem>
                <MenuItem href="login">SIGN IN</MenuItem>
              </>
            )}
            <MenuItem>
              <Badge badgeContent={quantity} color="error">
                <Link to="/cart">
                  <LocalMallRoundedIcon color="action" to="/cart" />
                </Link>
              </Badge>
            </MenuItem>
          </Right>
        )}
      </Wrapper>
      <Wrapper mainNav="main">
        <MenuItem href="/shop/Diamond">Diamond</MenuItem>
        <MenuItem href="/shop/Necklace">Necklace</MenuItem>
        <MenuItem href="/shop/Pendants">Pendants</MenuItem>
        <MenuItem href="/shop/Bracelets">Bracelets</MenuItem>
        <MenuItem href="/shop/fragrance">Fragrance</MenuItem>
        <MenuItem href="/shop/gifts">Gifts</MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
