import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { Container } from "./ProductsElements";
import { Badge } from "@mui/material";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/products?category=${cat}`
            : "http://localhost:5001/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
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
        >
          <Product item={item} key={item.id} />
        </Badge>
      ))}
    </Container>
  );
};

export default Products;
