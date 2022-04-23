import React from "react";
import { products } from "../../Data/data";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Container } from "./ProductElements";
import { Badge } from "@mui/material";

const Products = (props) => {
  return (
    <Container>
      {products.map((item) => {
        return item.id <= 5 ? (
          <Badge
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#000",
                color: "#fff",
                height: 40,
                minWidth: 15,
                borderRadius: 100,
              },
            }}
            badgeContent={item.state}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <SingleProduct item={item} key={item.id} />
          </Badge>
        ) : null;
      })}
    </Container>
  );
};

export default Products;
