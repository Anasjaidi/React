import React from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop}>{}</div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
