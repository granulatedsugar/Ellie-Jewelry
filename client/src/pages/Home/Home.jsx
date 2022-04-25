import React from "react";
import Blog from "../../components/Blog/Blog";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Featured />
      <Blog />
    </div>
  );
};

export default Home;
