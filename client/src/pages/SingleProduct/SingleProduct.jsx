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
  FilterPurity,
  FilterStone,
  FilterShape,
  FilterClarity,
  FilterCarat,
} from "./SingleProductElements";

const SingleProduct = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/tiffany-co-schlumbergeribex-brooch-21000736_1020292_ED.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Ibex Brooch</Title>
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
              <FilterPurity>
                {/* TODO : Filters! */}
                <PurityOption>10k</PurityOption>
                <PurityOption>14k</PurityOption>
                <PurityOption>18k</PurityOption>
                <PurityOption>24k</PurityOption>
              </FilterPurity>
            </Filter>
            <Filter>
              <FilterTitle>Stone</FilterTitle>
              <FilterStone>Diamond</FilterStone>
              <FilterStone>Signity</FilterStone>
              <FilterStone>Mossainite</FilterStone>
              <FilterStone>Lab Diamond</FilterStone>
            </Filter>
            <Filter>
              <FilterTitle>Shape</FilterTitle>
              <FilterShape>Round Brilliant</FilterShape>
              <FilterShape>Cushion</FilterShape>
              <FilterShape>Emerald</FilterShape>
              <FilterShape>Princess</FilterShape>
            </Filter>
            <Filter>
              <FilterTitle>Clarity</FilterTitle>
              <FilterClarity>SI-VS</FilterClarity>
              <FilterClarity>SI</FilterClarity>
              <FilterClarity>VS</FilterClarity>
              <FilterClarity>VVS</FilterClarity>
            </Filter>
            <Filter>
              <FilterTitle>Carat</FilterTitle>
              <FilterCarat>0.3</FilterCarat>
              <FilterCarat>0.5</FilterCarat>
              <FilterCarat>1</FilterCarat>
              <FilterCarat>2</FilterCarat>
            </Filter>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
