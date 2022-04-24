import React from "react";
import {
  Center,
  Container,
  Left,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./FooterElements";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ELLIE</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit
          natus mollitia omnis soluta sit fugiat laboriosam vitae, quod, velit
          ut ex quia alias. Nobis, quis tempora! Repudiandae, cupiditate
          suscipit?
        </Description>
        <SocialContainer>
          <SocialIcon>
            <FacebookSharpIcon />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Jewelry</ListItem>
          <ListItem>Engagement Rings</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FmdGoodOutlinedIcon style={{ marginRight: "10px" }} />
          4850 Aviation Way, Los Angeles 90026
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlinedIcon style={{ marginRight: "10px" }} />
          +1 213-914-8891
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          contact@ellie.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
