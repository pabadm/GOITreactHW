import React from "react";
import "./ModalWindow.css";

const ModalWindow = ({ link, alt, closeModal }) => {
  return (
    <div className="ModalWindow" onClick={closeModal}>
      <img className="ModalWindow-img" src={link} alt={alt} />
    </div>
  );
};

export default ModalWindow;
