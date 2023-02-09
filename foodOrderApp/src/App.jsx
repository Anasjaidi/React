import "./App.css";
import Header from "./components/layouts/Header/Header";
import Main from "./components/layouts/main/Main";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Meals />
      </Main>
    </>
  );
}
export default App;
