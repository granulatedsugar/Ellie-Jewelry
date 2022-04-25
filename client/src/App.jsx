import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Announcement from "./components/Announcement/Announcement";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Home /> */}
      {/* <Shop /> */}
      <SingleProduct />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
