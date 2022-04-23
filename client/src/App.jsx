import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Announcement from "./components/Announcement/Announcement";

function App() {
  return (
    <div>
      <Announcement />
      <Home />
    </div>
  );
}

export default App;
