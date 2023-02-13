import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Meals from "./components/meals/Meals";
import Users from "./Users";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
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
