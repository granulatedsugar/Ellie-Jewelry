import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("New");

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Title>SHOP</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter by:</FilterTitle>
          <Select name="metalColor" onChange={handleFilters}>
            <Option disabled>Metal</Option>
            <Option>Gold</Option>
            <Option>Rose Gold</Option>
            <Option>White Gold</Option>
            <Option>Silver</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Ring Size
            </Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterTitle>Sort by:</FilterTitle>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="New">New</Option>
            <Option value="asc">Price Low to High</Option>
            <Option value="des">Price High to Low</Option>
            <Option value="999">Under $1,000.00</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
    </Container>
  );
};

export default Shop;
