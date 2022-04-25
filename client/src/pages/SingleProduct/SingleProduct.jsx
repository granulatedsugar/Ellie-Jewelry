import React from "react";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  Select,
  Option,
} from "./SingleProductElements";

const SingleProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-true-engagement-ring-with-a-round-brilliant-diamond-68975425_1028237_ED_M.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Round Brilliant Diamond</Title>
          <Price>$17,000.00</Price>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore id
            non voluptatibus maxime molestiae aliquam distinctio enim tempora
            possimus rerum error, quaerat nulla, natus dolores nemo accusantium
            placeat? Ad, perferendis?
          </Description>
          <FilterContainer>
            <Filter>
              <FilterTitle>Metal Color</FilterTitle>
              <FilterColor>Yellow Gold</FilterColor>
              <FilterColor>Rose Gold</FilterColor>
              <FilterColor>White Gold</FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Purity</FilterTitle>
              <Select>
                <Option disabled selected>
                  -
                </Option>
                <Option>10k</Option>
                <Option>14k</Option>
                <Option>18k</Option>
                <Option>24k</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Stone</FilterTitle>
              <Select>
                <Option disabled selected>
                  -
                </Option>
                <Option>Diamond</Option>
                <Option>Signity</Option>
                <Option>Mossainite</Option>
                <Option>Lab Diamond</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Shape</FilterTitle>
              <Select>
                <Option>-</Option>
                <Option>Round Brilliant</Option>
                <Option>Cushion</Option>
                <Option>Emerald</Option>
                <Option>Princess</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Clarity</FilterTitle>
              <Select>
                <Option>-</Option>
                <Option>SI-VS</Option>
                <Option>SI</Option>
                <Option>VS</Option>
                <Option>VVS</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterTitle>Carat</FilterTitle>
              <Select>
                <Option disabled selected>
                  -
                </Option>
                <Option>0.3</Option>
                <Option>0.5</Option>
                <Option>1</Option>
                <Option>2</Option>
              </Select>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
