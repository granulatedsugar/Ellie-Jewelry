import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Title, Wrapper } from "./FeaturedElements";
import { Badge } from "@mui/material";
import Product from "../Product/Product";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5001/products");

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  });

  return (
    <Container>
      <Title>FEATURED PRODUCTS</Title>

      <Wrapper>
        {products.map((item) => {
          return item.popular ? (
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
              badgeContent={item.state ? "NEW" : null}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              key={item._id}
            >
              <Product item={item} key={item.id} />
            </Badge>
          ) : null;
        })}
      </Wrapper>
    </Container>
  );
};

export default Featured;
