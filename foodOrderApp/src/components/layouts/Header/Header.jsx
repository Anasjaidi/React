import mealImg from "../../../assets/meals.jpg";
import styleClasses from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styleClasses.header}>
        <h1>foodOrderApp</h1>
        <button type="button">cart</button>
      </header>
      <div className={styleClasses["main-image"]}>
        <img src={mealImg} alt="" />
      </div>
    </>
  );
};

export default Header;
