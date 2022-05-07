import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../../components/Products/Products";
import {
  ColorButton,
  Container,
  Filter,
  FilterContainer,
  FilterTitle,
  Option,
  Select,
  Title,
  CustomPaper as Paper,
  CustomMenuList as MenuList,
  CustomRadio as Radio,
  CustomPopper as Popper,
  CustomFormLabel as FormLabel,
  CustomFormControlLabel as FormControlLabel,
  CustomTypography as Typography,
} from "./ShopElements";
import {
  ClickAwayListener,
  Grow,
  FormControl,
  RadioGroup,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Shop = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("New");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  // Material UI Menulist
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterTitle>Filter by:</FilterTitle>
          <ColorButton
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Select Filters <KeyboardArrowDownIcon sx={{ fontSize: "18px" }} />
          </ColorButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onChange={handleFilters}
                    >
                      <Container>
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Purity
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="purity"
                          >
                            <FormControlLabel
                              value="10"
                              control={<Radio />}
                              label="10"
                            />
                            <FormControlLabel
                              value="12"
                              control={<Radio />}
                              label="12"
                            />
                            <FormControlLabel
                              value="14"
                              control={<Radio />}
                              label="14"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Container>
                      <Container>
                        <FormControl>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Metal Color
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="10"
                            name="metalColor"
                          >
                            <FormControlLabel
                              value="Yellow Gold"
                              control={<Radio />}
                              label={<Typography>Yellow Gold</Typography>}
                            />
                            <FormControlLabel
                              value="Rose Gold"
                              control={<Radio />}
                              label={<Typography>Rose Gold</Typography>}
                            />
                            <FormControlLabel
                              value="White Gold"
                              control={<Radio />}
                              label={<Typography>White Gold</Typography>}
                            />
                          </RadioGroup>
                        </FormControl>
                      </Container>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          {/* <Select name="metalColor" onChange={handleFilters}>
            <Option disabled selected>
              Metal
            </Option>
            <Option>Yellow Gold</Option>
            <Option>Rose Gold</Option>
            <Option>White Gold</Option>
            <Option>Silver</Option>
          </Select>
          <Select name="purity" onChange={handleFilters}>
            <Option disabled selected>
              Purity
            </Option>
            <Option>10</Option>
            <Option>12</Option>
            <Option>14</Option>
            <Option>18</Option>
          </Select> */}
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
