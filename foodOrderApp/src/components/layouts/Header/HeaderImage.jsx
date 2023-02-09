import mealImg from "../../../assets/meals.jpg";

const HeaderImage = (props) => {
  const { className: classes } = props;

  return (
    <div className={classes}>
      <img src={mealImg} alt="" />
    </div>
  );
};

export default HeaderImage;
