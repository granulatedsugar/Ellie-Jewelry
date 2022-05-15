import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ScrollToTop from "./ScrollToTop";
import Success from "./pages/Success/Success";

function App() {
  const user = false;

  return (
    <Router>
      <Announcement />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
