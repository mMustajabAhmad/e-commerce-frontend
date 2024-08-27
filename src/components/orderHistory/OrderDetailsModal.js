import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="flex fixed top-0 left-0 w-full h-full  justify-center items-center z-10">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black opacity-50 z-20"
      ></div>

      <div className="relative bg-white h-2/3 w-1/2 border border-solid z-30 overflow-auto">
        <div className="flex flex-row justify-end mr-2 mt-2">
          <IoCloseOutline className="text-md" onClick={onClose} />
        </div>
        <span className="flex justify-center text-2xl font-medium">Order Details</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
