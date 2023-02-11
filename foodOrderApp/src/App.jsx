import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Meals from "./components/meals/Meals";
import Users from "./Users";

function App() {
  return (
    <>
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
