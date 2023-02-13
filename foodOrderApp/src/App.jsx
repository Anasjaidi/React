import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layouts/Header/Header";
import Meals from "./components/meals/Meals";
import Users from "./Users";
import Cart from "./components/cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartShow = () => setCartIsShown(true);
  const cartClose = () => setCartIsShown(false);
  return (
    <>
      {cartIsShown && <Cart onClose={cartClose} />}
      <Header onShow={cartShow} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
