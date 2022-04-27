import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Announcement from "./components/Announcement/Announcement";
import Shop from "./pages/Shop/Shop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Home />
      {/* <Shop /> */}
      {/* <SingleProduct /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
