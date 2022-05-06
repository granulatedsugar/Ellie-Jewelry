import React, { useEffect, useState } from "react";
import { products } from "../../Data/data";
import Product from "../Product/Product";
import { Container } from "./ProductsElements";
import { Badge } from "@mui/material";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/products?category=${cat}`
            : `http://localhost:5001/products`
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        product.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => {
        return item.id <= 8 && item.popular === true ? (
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
            <Product item={item} key={item.id} />
          </Badge>
        ) : null;
      })}
    </Container>
  );
};

export default Products;
