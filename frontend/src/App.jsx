import "./App.css";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
