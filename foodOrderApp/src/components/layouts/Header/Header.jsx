import HeaderImage from "./HeaderImage";
import styleClasses from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={styleClasses.header}>
        <h1>foodOrderApp</h1>
        <HeaderCardButton />
      </header>
      <HeaderImage className={styleClasses["main-image"]} />
    </>
  );
};

export default Header;
