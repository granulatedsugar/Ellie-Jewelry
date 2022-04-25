import React from "react";
import Products from "../../components/Products/Products";
import {
  Container,
  Filter,
  FilterContainer,
  FilterTitle,
  Option,
  Select,
  Title,
} from "./ShopElements";

const Shop = () => {
  return (
    <Container>
      <Title>SHOP</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter by:</FilterTitle>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Necklace & Pendants</Option>
            <Option>Rings</Option>
            <Option>Bracelets</Option>
            <Option>Earrings</Option>
            <Option>Stones</Option>
            <Option>Brooch</Option>
            <Option>Charm</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Metal
            </Option>
            <Option>Yellow Gold</Option>
            <Option>Rose Gold</Option>
            <Option>White Gold</Option>
            <Option>Silver</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Sort by:</FilterTitle>
          <Select>
            <Option disabled selected>
              New
            </Option>
            <Option>Price Low to High</Option>
            <Option>Price High to Low</Option>
            <Option>Under $1,000.00</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default Shop;
