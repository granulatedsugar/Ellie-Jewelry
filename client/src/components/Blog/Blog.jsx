import React from "react";
import { Container, Title, Wrapper } from "./BlogElements";
import { blog } from "../../Data/data";
import Topic from "./Topic";

const Blog = () => {
  return (
    <Container>
      <Title>Stories</Title>
      <Wrapper>
        {blog.map((item) => (
          <Topic item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Blog;
