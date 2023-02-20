import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layouts/Header/Header";
import Meals from "./components/meals/Meals";
import Users from "./Users";
import Cart from "./components/cart/Cart";
import cartProvider from "./store/cartProvider.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartShow = () => setCartIsShown(true);
  const cartClose = () => setCartIsShown(false);
  return (
    <cartProvider>
      {cartIsShown && <Cart onClose={cartClose} />}
      <Header onShow={cartShow} />
      <Meals />
    </cartProvider>
  );
}
export default App;
