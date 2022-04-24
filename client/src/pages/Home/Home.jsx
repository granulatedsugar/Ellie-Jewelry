import React from "react";
import Blog from "../../components/Blog/Blog";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Featured />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
