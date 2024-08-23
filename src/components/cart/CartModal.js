import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="flex fixed top-0 left-0 w-full h-full  justify-end z-10">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50 z-20"
      ></div>
      <div className="relative bg-white h-full w-1/3 border border-solid z-30">
        {children}
      </div>
    </div>
  );
};

export default Modal;
