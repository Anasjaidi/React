import React from "react";
import stylesClasses from "./Card.module.css";

const Card = (props) => {
  const { children } = props;

  return <div className={stylesClasses.card}>{children}</div>;
};

export default Card;
