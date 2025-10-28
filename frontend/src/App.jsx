import "./App.css";
import Body from "./components/Body";
import Card from "./components/Card";
import Cart from "./components/Cart";
import CheckoutPage from "./components/Checkout/CheckoutPage";
import PaymentPage from "./components/Checkout/PaymentPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Card />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkoutpage" element={<CheckoutPage />} />
            <Route
              path="payment"
              element={<PaymentPage onBack={() => window.history.back()} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
