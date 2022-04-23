import React from "react";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Featured />
    </div>
  );
};

export default Home;
